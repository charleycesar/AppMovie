import React from 'react'
import Screen from '@UI/Screen'
import Box from '@UI/Box'
import Text from '@UI/Text'
import Thumbnail from '@UI/Thumbnail'
import { getScreenDimensions } from '@helpers/screen'

const Search = () => {
    const cardWidth = getScreenDimensions().width / 2

    return (
        <Screen fullScreen>
            <Box pt={2}>
                <Text variant="h4" align="center">
                    Selecione o tipo da busca
                </Text>
                <Box direction="row" alignSelf="space-around" py={2}>
                    <Box display="flex">
                        <Thumbnail
                            width={cardWidth}
                            height={250}
                            uri={
                                'https://image.tmdb.org/t/p/w440_and_h660_face/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg'
                            }
                            usePrefix={false}
                        />
                        <Text variant="h4" align={'center'}>
                            Filmes
                        </Text>
                    </Box>
                    <Box display="flex">
                        <Thumbnail
                            width={cardWidth}
                            height={250}
                            uri={
                                'https://image.tmdb.org/t/p/w440_and_h660_face/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg'
                            }
                            usePrefix={false}
                        />
                        <Text variant="h4" align={'center'}>
                            Tv shows
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Screen>
    )
}

export default Search
