import React from 'react'
import Screen from '@UI/Screen'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'
import useMovies from '@modules/home/hooks/useMovies'
import MovieList from '@modules/home/components/MovieList'

const Home = () => {
    const { getMovies, movies } = useMovies()
    const options = [{ label: 'Filmes' }, { label: 'Séries' }]

    React.useEffect(() => {
        getMovies()
    }, [])

    return (
        <Screen fullScreen>
            <HeaderNavigation options={options} />
            <MovieList title={movies.title} movies={movies.results} />
        </Screen>
    )
}

export default Home
