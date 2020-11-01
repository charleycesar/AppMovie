import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import Screen from '@UI/Screen'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'
import MovieCard from '@modules/home/components/MovieCard'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FetchList from '@/store/Movie/FetchList'

const Home = () => {
    const options = [{ label: 'Filmes' }, { label: 'Séries' }]
    const dispatch = useDispatch()
    const [movies, setMovies] = React.useState({
        results: [],
        title: '',
    })

    React.useEffect(() => {
        dispatch(FetchList.action(1))
    }, [])

    const moviesFromApi = useSelector((state) => state.movies.item)

    React.useEffect(() => {
        if (moviesFromApi.results !== undefined) {
            setMovies({
                results: moviesFromApi.results,
                title: moviesFromApi.name,
            })
        }
    }, [moviesFromApi])

    return (
        <Screen fullScreen>
            <HeaderNavigation options={options} />
            <Box animation={'slideInRight'}>
                <Box pb={1}>
                    <Text variant="h4">{movies.title}</Text>
                </Box>
                <FlatList
                    data={movies.results}
                    style={{
                        width: '100%',
                    }}
                    ItemSeparatorComponent={() => (
                        <Box fullWidth={false} width={20} />
                    )}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <MovieCard
                                data={{
                                    title: item.title,
                                    uri: `/w200${item.poster_path}`,
                                    release_date: item.release_date,
                                }}
                                key={item.title}
                            />
                        )
                    }}
                />
            </Box>
        </Screen>
    )
}

export default Home
