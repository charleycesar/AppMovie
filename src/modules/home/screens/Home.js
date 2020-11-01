import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import Screen from '@UI/Screen'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'
import MovieCard from '@modules/home/components/MovieCard'
import { FlatList } from 'react-native'
import { mockMostPopular } from './mockMovies'

const Home = () => {
    const options = [{ label: 'Filmes' }, { label: 'Séries' }]

    return (
        <Screen fullScreen>
            <HeaderNavigation options={options} />
            <Box>
                <Box pb={1}>
                    <Text variant="h4">Os Mais Populares</Text>
                </Box>
                <FlatList
                    data={mockMostPopular}
                    style={{
                        width: '100%',
                    }}
                    ItemSeparatorComponent={() => (
                        <Box fullWidth={false} width={20} />
                    )}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <MovieCard data={item} key={item.title} />
                    )}
                />
            </Box>
        </Screen>
    )
}

export default Home
