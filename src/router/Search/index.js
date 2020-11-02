import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack'
import BackButton from '@modules/navigation/BackButton'
import React from 'react'
import { useTheme } from '@styles/hooks'

import routes from './routes'

const Stack = createStackNavigator()

const SearchNavigator = () => {
    const theme = useTheme()
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: '',
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    backgroundColor: theme.navigator.default.background,
                },
                headerBackImage: ({ tintColor }) => (
                    <BackButton htmlColor={tintColor} />
                ),
                headerBackTitleVisible: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}
            initialRouteName="search/index">
            {routes.map((route) => {
                if (!route) return null
                return (
                    <Stack.Screen
                        key={route.name}
                        path={route.path}
                        name={route.path}
                        options={route.options}>
                        {(props) => <route.component {...props} />}
                    </Stack.Screen>
                )
            })}
        </Stack.Navigator>
    )
}

export default SearchNavigator
