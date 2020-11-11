import React from 'react'
import Screen from '@UI/Screen'
import { useRoute, useNavigation } from '@modules/navigation/hooks'
import useGenres from '@modules/search/hooks/useGenres'
import MenuList from '@modules/search/components/MenuList'
import Box from '@UI/Box'
import useMovies from '@modules/home/hooks/useMovies'
import DetailsMovie from '@modules/home/components/DetailsMovie'
import BottomSheet from '@UI/BottomSheet'
import { LABELS, optionsChoose } from '@modules/search/helpers'
import Breadcrumb from '@modules/search/components/Breadcrumb'
import CatalogList from '@modules/search/components/CatalogList'
import configHome from '@modules/home/config'
import configSerch from '@modules/search/config'

const Genre = () => {
    const { params } = useRoute()
    const { navigate, replace } = useNavigation()
    const { searchMovies } = useMovies()
    const { getGenres, genres } = useGenres()
    const [choose, setChoose] = React.useState({
        value: params?.typeSearch,
        name: LABELS[params?.typeSearch].name,
    })
    const [genre, setGenre] = React.useState({})
    const [page, setPage] = React.useState(0)
    const [responseMovies, setResponseMovies] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [openDetail, setOpenDetail] = React.useState(false)
    const [movieDetails, setMovieDetails] = React.useState({})

    React.useEffect(() => {
        getGenres(choose.value)
    }, [])

    React.useEffect(() => {
        if (params.typeSearch) {
            setChoose({
                value: params?.typeSearch,
                name: LABELS[params?.typeSearch].name,
            })
            setGenre({})
        }
    }, [params])

    React.useEffect(() => {
        if (choose.value) {
            getGenres(choose.value)
        }
    }, [choose])

    React.useEffect(() => {
        if (genre.id) {
            discoverMovies(1)
        }
    }, [genre])

    const discoverMovies = (paramsPage) => {
        let pageChange = paramsPage || page
        const data = {
            withGenre: genre.id,
            page: pageChange + 1,
        }
        setLoading(true)
        searchMovies(choose.value, data)
            .then((response) => {
                let newResultsAppend = response.data.results
                const previusResults = [...responseMovies]
                if (previusResults.length) {
                    newResultsAppend = previusResults.concat(newResultsAppend)
                }
                setResponseMovies(newResultsAppend)
                setPage(data.page)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const onPressGenre = (genre) => {
        setResponseMovies([])
        setGenre(genre)
    }

    const onPressChoose = (option) => {
        setResponseMovies([])
        setChoose(option)
        setGenre({})
    }

    if (!choose.name) {
        return (
            <Box
                justifyContent="center"
                display="flex"
                testID={'Genre-MenuList-container'}>
                <MenuList
                    onPress={onPressChoose}
                    data={optionsChoose}
                    title={'Selecione uma das opções '}
                />
            </Box>
        )
    }

    if (!genre.id) {
        return (
            <Box justifyContent="center" display="flex">
                <MenuList
                    onPress={onPressGenre}
                    data={genres}
                    title={'Selecione um gênero'}
                />
            </Box>
        )
    }

    return (
        <Screen fullscreen>
            <Box>
                <Breadcrumb
                    choose={choose}
                    genre={genre}
                    onPressGoBack={() =>
                        replace(`${configHome.frontEndUrl}`, {
                            screen: `${configHome.frontEndUrl}/main`,
                            initial: true,
                        })
                    }
                    onPressSearch={() =>
                        navigate(`${configSerch.frontEndUrl}/index`)
                    }
                    onPressChoose={() => setChoose({})}
                    onPressGenre={() => setGenre({})}
                />

                <CatalogList
                    data={responseMovies}
                    onPressItem={(item) => {
                        setOpenDetail(true)
                        setMovieDetails(item)
                    }}
                    loading={loading}
                    discoverMovies={() => discoverMovies()}
                />

                {openDetail && movieDetails.id && (
                    <BottomSheet
                        show={openDetail}
                        showDrag
                        size={'medium'}
                        showBackDrop
                        onClose={() => setOpenDetail(false)}>
                        <DetailsMovie movie={movieDetails} />
                    </BottomSheet>
                )}
            </Box>
        </Screen>
    )
}

export default Genre
