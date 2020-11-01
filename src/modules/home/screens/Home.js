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

const Home = () => {
    const [openDetail, setOpenDetail] = React.useState(true)
    const { getMovies, popularMovies, topRatedMovies } = useMovies()
    const options = [{ label: 'Filmes' }, { label: 'TV Shows' }]

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
                    openDetailBottomSheet={(status) => setOpenDetail(status)}
                />
                <MovieList
                    title={topRatedMovies.title}
                    movies={topRatedMovies.results}
                    openDetailBottomSheet={(status) => setOpenDetail(status)}
                />
            </ScrollView>
            {openDetail && (
                <BottomSheet
                    show={openDetail}
                    showDrag
                    size={'medium'}
                    showBackDrop
                    onClose={() => setOpenDetail(false)}>
                    <Box py={2}>
                        <Text variant={'h4'} align="center">
                            Titulo do filme
                        </Text>
                        <Text variant={'h4'}>Ano do filme</Text>
                        <Text>Classificação:</Text>
                        <Text>Avaliação:</Text>
                        <Text>Descrição:</Text>
                    </Box>
                </BottomSheet>
            )}
        </Screen>
    )
}

export default Home
