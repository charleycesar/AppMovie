import React from 'react'
import Screen from '@UI/Screen'
import { useRoute } from '@modules/navigation/hooks'
import Text from '@UI/Text'
import useGenres from '@modules/search/hooks/useGenres'
import GenreList from '@modules/search/components/GenreList'
import Box from '@UI/Box'
import { TouchableOpacity } from 'react-native'

const Genre = () => {
    const { params } = useRoute()
    const { getGenres, genres } = useGenres()
    const [genre, setGenre] = React.useState({})

    const LABELS = {
        movie: {
            name: 'Filmes',
        },
        tv: {
            name: 'TV Shows',
        },
    }

    React.useEffect(() => {
        getGenres(params?.typeSearch)
    }, [params])

    const onPressGenre = (genre) => {
        setGenre(genre)
    }

    return (
        <Screen fullScreen>
            {genre.id ? (
                <Box px={2} alignItems={'center'} animation={'fadeInDown'}>
                    <TouchableOpacity onPress={() => setGenre({})}>
                        <Text variant="h4" color="white">
                            {LABELS[params.typeSearch].name} > {genre.name}
                        </Text>
                    </TouchableOpacity>
                </Box>
            ) : (
                <GenreList
                    onPress={onPressGenre}
                    data={genres}
                    title={'Selecione um gênero'}
                />
            )}
        </Screen>
    )
}

export default Genre
