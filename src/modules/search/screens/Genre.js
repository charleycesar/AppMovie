import React from 'react'
import Screen from '@UI/Screen'
import { useRoute } from '@modules/navigation/hooks'
import Text from '@UI/Text'
import useGenres from '@modules/search/hooks/useGenres'

const Genre = () => {
    const { params } = useRoute()
    const { getGenres, genres } = useGenres()

    React.useEffect(() => {
        getGenres(params?.typeSearch)
    }, [params])

    return (
        <Screen fullScreen>
            <Text>Category Selected: {params?.typeSearch}</Text>
            {genres.map((genre) => (
                <Text key={genre.name}>{genre.name}</Text>
            ))}
        </Screen>
    )
}

export default Genre
