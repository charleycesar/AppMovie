import React from 'react'
import { useSelector } from 'react-redux'
import FetchOne from '@/store/Movie/FetchOne'
import FetchList from '@/store/PopularMovies/FetchList'
import FetchTopRatedList from '@/store/TopRatedMovies/FetchList'
import useCache from '@modules/cache/hooks/useCache'

const useMovies = () => {
    const { getRequest } = useCache()

    const [popularMovies, setPopularMovies] = React.useState({
        results: [],
        title: '',
    })

    const [topRatedMovies, setTopRatedMovies] = React.useState({
        results: [],
        title: '',
    })

    const [movieDetails, setMovieDetails] = React.useState({})

    const getMovies = (category) => {
        if (category === 'POPULAR') {
            getRequest(FetchList)
        }

        if (category === 'TOP_RATED') {
            getRequest(FetchTopRatedList)
        }
    }

    const getDetails = (movieId) => {
        getRequest(FetchOne, movieId)
    }

    const movieDetailsFromApi = useSelector((state) => state.movie.item)
    const popularFromApi = useSelector((state) => state.popularMovies.item)
    const topRatedMoviesFromApi = useSelector(
        (state) => state.topRatedMovies.item,
    )

    React.useEffect(() => {
        if (popularFromApi.results !== undefined) {
            setPopularMovies({
                results: popularFromApi.results,
                title: 'Popular',
            })
        }
    }, [popularFromApi])

    React.useEffect(() => {
        if (popularFromApi.results !== undefined) {
            setTopRatedMovies({
                results: topRatedMoviesFromApi.results,
                title: 'Melhores avaliados',
            })
        }
    }, [topRatedMoviesFromApi])

    React.useEffect(() => {
        if (movieDetailsFromApi.id !== undefined) {
            setMovieDetails(movieDetailsFromApi)
        }
    }, [movieDetailsFromApi])

    return {
        getMovies,
        getDetails,
        movieDetails,
        popularMovies,
        topRatedMovies,
    }
}

export default useMovies
