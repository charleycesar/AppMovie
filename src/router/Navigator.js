import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTheme } from '@styles/hooks'

import Home from './Home'
import Startup from './Startup'
import Search from './Search'

const Main = createStackNavigator()

const Navigator = () => {
    const theme = useTheme()
    return (
        <NavigationContainer theme={theme.navigator.default}>
            <Main.Navigator
                initialRouteName="startup"
                screenOptions={{
                    headerShown: false,
                }}>
                <Main.Screen name="home" component={Home} />
                <Main.Screen name="startup" component={Startup} />
                <Main.Screen name="search" component={Search} />
            </Main.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
