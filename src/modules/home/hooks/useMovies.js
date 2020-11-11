import React from 'react'
import { useSelector } from 'react-redux'
import FetchOne from '@/store/Movie/FetchOne'
import FetchList from '@/store/PopularMovies/FetchList'
import FetchTopRatedList from '@/store/TopRatedMovies/FetchList'
import useCache from '@modules/cache/hooks/useCache'
import DiscoverFetchList from '@/services/Discover/FetchList'
import MultiSearchFetchList from '@/services/MultiSearch/FetchList'
import useConnection from '@modules/connection/hooks/useConnection'

const CATEGORY = {
    POPULAR: 'POPULAR',
    TOP_RATED: 'TOP_RATED',
}

const useMovies = () => {
    const { getRequest } = useCache()
    const { connected } = useConnection()

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
        if (category === CATEGORY.POPULAR) {
            getRequest(FetchList)
        }

        if (category === CATEGORY.TOP_RATED) {
            getRequest(FetchTopRatedList)
        }
    }

    const getDetails = (movieId) => {
        getRequest(FetchOne, movieId)
    }

    const movieDetailsFromApi = useSelector((state) => state.movie)
    const popularFromApi = useSelector((state) => state.popularMovies.item)
    const topRatedMoviesFromApi = useSelector(
        (state) => state.topRatedMovies.item,
    )

    React.useEffect(() => {
        if (popularFromApi?.results !== undefined) {
            setPopularMovies({
                results: popularFromApi.results,
                title: 'Popular',
            })
        }
    }, [popularFromApi])

    React.useEffect(() => {
        if (popularFromApi?.results !== undefined) {
            setTopRatedMovies({
                results: topRatedMoviesFromApi.results,
                title: 'Melhores avaliados',
            })
        }
    }, [topRatedMoviesFromApi])

    React.useEffect(() => {
        if (movieDetailsFromApi?.item !== undefined) {
            setMovieDetails(movieDetailsFromApi.item)
        }
    }, [movieDetailsFromApi])

    const getRequestParams = (data) => {
        let params = {}
        if (data.query) {
            params['query'] = data.query
        }

        if (data.withGenre) {
            params['with_genres'] = data.withGenre
        }

        if (data.page) {
            params['page'] = data.page
        }

        return params
    }
    const searchMovies = (typeOfSearch, data, multi = false) => {
        const params = getRequestParams(data)
        if (multi) {
            return MultiSearchFetchList(params)
        }
        return DiscoverFetchList(typeOfSearch, params)
    }

    return {
        getMovies,
        getDetails,
        movieDetails,
        popularMovies,
        topRatedMovies,
        movieDetailsFromApi,
        searchMovies,
    }
}

export default useMovies
