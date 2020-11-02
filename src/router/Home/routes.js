import HomeIcon from '@UI/Icon/HomeIcon'
import LoopIcon from '@UI/Icon/LoopIcon'
import ThreeDotsOutlineIcon from '@UI/Icon/ThreeDotsOutlineIcon'
import Text from '@UI/Text'
import config from '@modules/home/config'
import Home from '@modules/home/screens/Home'
import Search from '@modules/search/screens/Search'
import React from 'react'

const Label = ({ label, hasFocus }) => (
    <Text variant="body2" color={hasFocus ? 'secondary' : 'primary'}>
        {label}
    </Text>
)

export default [
    {
        name: 'Home',
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
        name: 'Search',
        component: Search,
        path: `${config.frontEndUrl}/index`,
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
    {
        name: 'Downloads',
        component: Home,
        path: `${config.frontEndUrl}/downloads`,
        options: {
            header: () => null,
            tabBarLabel: ({ focused }) => (
                <Label hasFocus={focused} label="downloads" />
            ),
            tabBarIcon: ({ focused }) => (
                <HomeIcon color={focused ? 'secondary' : 'primary'} />
            ),
        },
    },
    {
        name: 'More',
        component: Home,
        path: `${config.frontEndUrl}/more`,
        options: {
            header: () => null,
            tabBarLabel: ({ focused }) => (
                <Label hasFocus={focused} label="mais" />
            ),
            tabBarIcon: ({ focused }) => (
                <ThreeDotsOutlineIcon
                    color={focused ? 'secondary' : 'primary'}
                />
            ),
        },
    },
]
