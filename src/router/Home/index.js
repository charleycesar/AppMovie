import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTheme } from '@styles/hooks'

import routes from './routes'

const Tab = createBottomTabNavigator()
const HomeNavigator = () => {
    const theme = useTheme()

    return (
        <Tab.Navigator
            initialRouteName="home/main"
            tabBarVisible={false}
            tabBarOptions={{
                style: {
                    paddingVertical: 10,
                    paddingBottom: 25,
                    height: 85,
                    borderTopColor: theme.palette.primary.main,
                    borderBottomColor: theme.palette.primary.main,
                    borderTopWidth: 0.5,
                    shadowOpacity: 0,
                    elevation: 0,
                },
            }}>
            {routes.map((routeItem) => {
                if (!routeItem) return null

                return (
                    <Tab.Screen
                        key={routeItem.name}
                        path={routeItem.path}
                        name={routeItem.path}
                        options={routeItem.options}>
                        {(props) => <routeItem.component {...props} />}
                    </Tab.Screen>
                )
            })}
        </Tab.Navigator>
    )
}

export default HomeNavigator
