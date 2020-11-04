import React from 'react'
import Screen from '@UI/Screen'
import { useRoute, useNavigation } from '@modules/navigation/hooks'
import useGenres from '@modules/search/hooks/useGenres'
import MenuList from '@modules/search/components/MenuList'
import Box from '@UI/Box'
import { Alert, TouchableOpacity, FlatList } from 'react-native'
import useMovies from '@modules/home/hooks/useMovies'
import Thumbnail from '@UI/Thumbnail'
import { getScreenDimensions } from '@helpers/screen'
import DetailsMovie from '@modules/home/components/DetailsMovie'
import BottomSheet from '@UI/BottomSheet'
import { LABELS, optionsChoose } from '@modules/search/helpers'
import Breadcrumb from '@modules/search/components/Breadcrumb'

const Genre = () => {
    const { params } = useRoute()
    const { goBack } = useNavigation()
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
            .catch((error) => {
                Alert.alert(error.message)
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
            <Box justifyContent="center" display="flex">
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
                    title={'Todos os gêneros'}
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
                    onPressGoBack={() => goBack()}
                    onPressChoose={() => setChoose({})}
                    onPressGenre={() => setGenre({})}
                />

                <FlatList
                    data={responseMovies}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        if (item.poster_path) {
                            return (
                                <Box
                                    fullWidth={false}
                                    width={'50%'}
                                    py={2}
                                    alignItems={'center'}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpenDetail(true)
                                            setMovieDetails(item)
                                        }}>
                                        <Thumbnail
                                            width={
                                                getScreenDimensions().width / 2
                                            }
                                            height={200}
                                            uri={`/w154/${item.poster_path}`}
                                        />
                                    </TouchableOpacity>
                                </Box>
                            )
                        }
                        return null
                    }}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        {
                            !loading && discoverMovies()
                        }
                    }}
                    scrollEventThrottle={400}
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
