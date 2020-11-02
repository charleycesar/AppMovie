import React from 'react'
import Screen from '@UI/Screen'
import BottomSheet from '@UI/BottomSheet'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'
import useMovies from '@modules/home/hooks/useMovies'
import MovieList from '@modules/home/components/MovieList'
import DetailsMovie from '@modules/home/components/DetailsMovie'
import { ScrollView } from 'react-native'
import Layout from '@styles/layout'
import LoadingMovieDetails from '@modules/home/components/LoadingMovieDetails'

const Home = () => {
    const [openDetail, setOpenDetail] = React.useState(false)
    const {
        getMovies,
        getDetails,
        movieDetails,
        popularMovies,
        topRatedMovies,
        movieDetailsFromApi,
    } = useMovies()
    const options = [{ label: 'Filmes' }, { label: 'TV Shows' }]

    React.useEffect(() => {
        getMovies('POPULAR')
        getMovies('TOP_RATED')
    }, [])

    const onMoviePress = (movieSelected) => {
        getDetails(movieSelected.id)
        setOpenDetail(true)
    }

    return (
        <Screen fullScreen>
            <HeaderNavigation options={options} />
            <ScrollView style={[Layout.fill, Layout.fullWidth]}>
                <MovieList
                    title={popularMovies.title}
                    movies={popularMovies.results}
                    onMoviePress={onMoviePress}
                />
                <MovieList
                    title={topRatedMovies.title}
                    movies={topRatedMovies.results}
                    onMoviePress={onMoviePress}
                />
            </ScrollView>

            {openDetail && movieDetails.id && (
                <BottomSheet
                    show={openDetail}
                    showDrag
                    size={'medium'}
                    showBackDrop
                    onClose={() => setOpenDetail(false)}>
                    {movieDetailsFromApi?.fetchOne?.loading ? (
                        <LoadingMovieDetails />
                    ) : (
                        <DetailsMovie movie={movieDetails} />
                    )}
                </BottomSheet>
            )}
        </Screen>
    )
}

export default Home
