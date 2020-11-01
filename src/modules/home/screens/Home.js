import React from 'react'
import Screen from '@UI/Screen'
import Text from '@UI/Text'
import BottomSheet from '@UI/BottomSheet'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'
import useMovies from '@modules/home/hooks/useMovies'
import MovieList from '@modules/home/components/MovieList'
import { ScrollView } from 'react-native'
import Layout from '@styles/layout'
import Box from '@UI/Box'
import moment from 'moment'
import Thumbnail from '@UI/Thumbnail'

const Home = () => {
    const [openDetail, setOpenDetail] = React.useState(false)
    const {
        getMovies,
        getDetails,
        movieDetails,
        popularMovies,
        topRatedMovies,
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
            {openDetail && (
                <BottomSheet
                    show={openDetail}
                    showDrag
                    size={'medium'}
                    showBackDrop
                    onClose={() => setOpenDetail(false)}>
                    <Box p={1}>
                        <Box direction={'row'} pb={2}>
                            <Thumbnail
                                uri={`/w200${movieDetails.poster_path}`}
                            />
                            <Box px={2}>
                                <Text variant={'h4'}>{movieDetails.title}</Text>
                                <Text variant={'h5'}>
                                    {moment(movieDetails.release_date).format(
                                        'Y',
                                    )}
                                </Text>
                                <Text>Classificação:</Text>
                                <Text>Avaliação:</Text>
                            </Box>
                        </Box>
                        <Text variant={'body2'}>{movieDetails.overview}</Text>
                    </Box>
                </BottomSheet>
            )}
        </Screen>
    )
}

export default Home
