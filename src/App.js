import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/store'
import { SafeAreaView, StatusBar } from 'react-native'
import Navigator from '@router/Navigator'
import ThemeProvider from '@styles/ThemeProvider'

const App = () => (
    <ThemeProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar
                    backgroundColor={'transparent'}
                    barStyle="dark-content"
                />
                <Navigator />
            </PersistGate>
        </Provider>
    </ThemeProvider>
)

export default App
