import React from 'react'
import Screen from '@UI/Screen'
import ChooseTypeSearch from '@modules/search/components/ChooseTypeSearch'

const Search = () => {
    return (
        <Screen fullScreen>
            <ChooseTypeSearch
                title={'Selecione o tipo da busca'}
                options={[
                    {
                        name: 'Filmes',
                        uri:
                            'https://image.tmdb.org/t/p/w440_and_h660_face/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg',
                    },
                    {
                        name: 'TV Shows',
                        uri:
                            'https://image.tmdb.org/t/p/w440_and_h660_face/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg',
                    },
                ]}
            />
        </Screen>
    )
}

export default Search
