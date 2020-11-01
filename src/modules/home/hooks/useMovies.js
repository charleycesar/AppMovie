import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FetchList from '@/store/Movie/FetchList'
import useConnection from '@modules/connection/hooks/useConnection'
import useCache from '@modules/cache/hooks/useCache'

const useMovies = () => {
    const dispatch = useDispatch()
    const { getRequest } = useCache()

    const [movies, setMovies] = React.useState({
        results: [],
        title: '',
    })

    const getMovies = () => {
        getRequest(FetchList, 1)
    }

    const moviesFromApi = useSelector((state) => state.movies.item)

    React.useEffect(() => {
        if (moviesFromApi.results !== undefined) {
            setMovies({
                results: moviesFromApi.results,
                title: moviesFromApi.name,
            })
        }
    }, [moviesFromApi])

    return { getMovies, movies }
}

export default useMovies
