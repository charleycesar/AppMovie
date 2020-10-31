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
                <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                    <StatusBar barStyle="dark-content" />
                    <Navigator />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    </ThemeProvider>
)

export default App
