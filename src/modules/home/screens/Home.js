import React from 'react'
import Screen from '@UI/Screen'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'
import useMovies from '@modules/home/hooks/useMovies'
import MovieList from '@modules/home/components/MovieList'
import { ScrollView } from 'react-native'
import Layout from '@styles/layout'

const Home = () => {
    const { getMovies, popularMovies, topRatedMovies } = useMovies()
    const options = [{ label: 'Filmes' }, { label: 'Séries' }]

    React.useEffect(() => {
        getMovies('POPULAR')
        getMovies('TOP_RATED')
    }, [])

    return (
        <Screen fullScreen>
            <HeaderNavigation options={options} />
            <ScrollView style={[Layout.fill, Layout.fullWidth]}>
                <MovieList
                    title={popularMovies.title}
                    movies={popularMovies.results}
                />
                <MovieList
                    title={topRatedMovies.title}
                    movies={topRatedMovies.results}
                />
            </ScrollView>
        </Screen>
    )
}

export default Home
