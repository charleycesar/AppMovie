import React from 'react'
import Screen from '@UI/Screen'
import useDebounce from '@modules/search/hooks/useDebounce'
import SearchBar from '@modules/search/components/SearchBar'
import useMovies from '@modules/home/hooks/useMovies'
import CatalogList from '@modules/search/components/CatalogList'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import BottomSheet from '@UI/BottomSheet'
import DetailsMovie from '@modules/home/components/DetailsMovie'
import EmptyState from '@modules/search/components/EmptyState'
import Box from '@UI/Box'
import Loading from '@UI/Loading'
import Text from '@UI/Text'

const Search = () => {
    const [searching, setSearching] = React.useState(false)
    const [term, setTerm] = React.useState('')
    const [emptyMessage, setEmptyMessage] = React.useState({
        title: 'Realize uma pesquisa',
        description: 'Aqui serão listados filmes e TV Shows',
    })
    const [results, setResults] = React.useState([])
    const [openDetail, setOpenDetail] = React.useState(false)
    const [movieDetails, setMovieDetails] = React.useState({})

    const { searchMovies } = useMovies()
    const debouncedTerm = useDebounce(term, 500)

    React.useEffect(() => {
        if (debouncedTerm) {
            setSearching(true)
            multiSearch()
        }
    }, [debouncedTerm])

    const multiSearch = () => {
        const data = {
            query: term,
        }
        setSearching(true)
        searchMovies('multi', data, true)
            .then((response) => {
                if (!response.data.results.length) {
                    setEmptyMessage({
                        title: 'Ops. Não localizamos registros.',
                        description: 'Tente pesquisasr por outro termo.',
                    })
                }
                setResults(response.data.results)
                setSearching(false)
            })
            .catch((error) => {
                Alert.alert(error.data?.errors?.join('\n'))
                setSearching(false)
            })
    }

    const RenderContent = () => {
        if (searching) {
            return (
                <Box
                    fullWidth
                    height="100%"
                    alignItems="center"
                    justifyContent="center">
                    <Loading />
                </Box>
            )
        }

        if (results.length) {
            return (
                <CatalogList
                    data={results}
                    onPressItem={(item) => {
                        setOpenDetail(true)
                        setMovieDetails(item)
                    }}
                    onScroll={() => Keyboard.dismiss()}
                />
            )
        }

        return <EmptyState {...emptyMessage} />
    }

    return (
        <Screen fullScreen>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <>
                    <Box px={2}>
                        <Text variant="h4">Busca de filmes</Text>
                    </Box>
                    <SearchBar
                        placeholder={`Pesquise...`}
                        onChangeText={(text) => setTerm(text)}
                        onBlur={() => Keyboard.dismiss()}
                    />
                    <RenderContent />
                </>
            </TouchableWithoutFeedback>
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
        </Screen>
    )
}

export default Search
