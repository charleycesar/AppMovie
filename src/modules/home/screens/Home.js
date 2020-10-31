import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import Screen from '@UI/Screen'
import HeaderNavigation from '@modules/home/components/HeaderNavigation'

const Home = () => {
    const options = [{ label: 'Filmes' }, { label: 'Séries' }]

    return (
        <Screen>
            <HeaderNavigation options={options} />
        </Screen>
    )
}

export default Home
