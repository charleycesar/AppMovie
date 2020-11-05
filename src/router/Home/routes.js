import HomeIcon from '@UI/Icon/HomeIcon'
import LoopIcon from '@UI/Icon/LoopIcon'
import ThreeDotsOutlineIcon from '@UI/Icon/ThreeDotsOutlineIcon'
import Text from '@UI/Text'
import config from '@modules/home/config'
import configSearch from '@modules/search/config'
import Home from '@modules/home/screens/Home'
import Search from '@router/Search'
import React from 'react'

const Label = ({ label, hasFocus }) => (
    <Text variant="body2" color={hasFocus ? 'secondary' : 'primary'}>
        {label}
    </Text>
)

export default [
    {
        name: 'home',
        component: Home,
        path: `${config.frontEndUrl}/main`,
        options: {
            header: () => null,
            tabBarLabel: ({ focused }) => (
                <Label hasFocus={focused} label="home" />
            ),
            tabBarIcon: ({ focused }) => (
                <HomeIcon color={focused ? 'secondary' : 'primary'} />
            ),
        },
    },
    {
        name: 'search',
        component: Search,
        path: `${configSearch.frontEndUrl}`,
        options: {
            header: () => null,
            tabBarLabel: ({ focused }) => (
                <Label hasFocus={focused} label="busca" />
            ),
            tabBarIcon: ({ focused }) => (
                <LoopIcon color={focused ? 'secondary' : 'primary'} />
            ),
        },
    },
]
