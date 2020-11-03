import React from 'react'
import Screen from '@UI/Screen'
import ChooseTypeSearch from '@modules/search/components/ChooseTypeSearch'
import { useNavigation } from '@modules/navigation/hooks'
import configSearch from '@modules/search/config'

const Search = () => {
    const { navigate } = useNavigation()

    return (
        <Screen fullScreen>
            <ChooseTypeSearch
                title={'Selecione o tipo da busca'}
                options={[
                    {
                        name: 'Filmes',
                        uri:
                            'https://image.tmdb.org/t/p/w440_and_h660_face/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg',
                        onPress: () =>
                            navigate(`${configSearch.frontEndUrl}/genre`, {
                                typeSearch: 'movie',
                            }),
                    },
                    {
                        name: 'TV Shows',
                        uri:
                            'https://image.tmdb.org/t/p/w440_and_h660_face/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg',
                        onPress: () =>
                            navigate(`${configSearch.frontEndUrl}/genre`, {
                                typeSearch: 'tv',
                            }),
                    },
                ]}
            />
        </Screen>
    )
}

export default Search
