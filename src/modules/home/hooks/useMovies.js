import React from 'react'
import { useSelector } from 'react-redux'
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

    const getMovies = (category) => {
        if (category === 'POPULAR') {
            getRequest(FetchList)
        }

        if (category === 'TOP_RATED') {
            getRequest(FetchTopRatedList)
        }
    }

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

    return { getMovies, popularMovies, topRatedMovies }
}

export default useMovies
