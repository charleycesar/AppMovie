import React from 'react'
import Screen from '@UI/Screen'
import { useRoute, useNavigation } from '@modules/navigation/hooks'
import Text from '@UI/Text'
import useGenres from '@modules/search/hooks/useGenres'
import GenreList from '@modules/search/components/GenreList'
import Box from '@UI/Box'
import { TouchableOpacity, Keyboard } from 'react-native'
import BackButton from '@modules/navigation/BackButton'
import SearchBar from '@modules/search/components/SearchBar'

const Genre = () => {
    const { params } = useRoute()
    const { goBack } = useNavigation()
    const { getGenres, genres } = useGenres()
    const [genre, setGenre] = React.useState({})
    const [text, setText] = React.useState('')

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

    const onSearchPress = () => {}

    return (
        <Screen fullscreen>
            {genre.id ? (
                <>
                    <Box
                        alignItems={'center'}
                        animation={'fadeInDown'}
                        direction={'row'}>
                        <BackButton
                            htmlColor={'white'}
                            onPress={() => goBack()}
                        />
                        <TouchableOpacity onPress={() => setGenre({})}>
                            <Text variant="h4" color="white">
                                {LABELS[params.typeSearch].name} > {genre.name}
                            </Text>
                        </TouchableOpacity>
                    </Box>
                    <SearchBar
                        placeholder={`Pesquise por ${
                            LABELS[params.typeSearch].name
                        }...`}
                        btnText={'busca'}
                        onChangeText={(text) => setText(text)}
                        onBlur={() => Keyboard.dismiss()}
                        onSearchPress={onSearchPress}
                    />
                </>
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
