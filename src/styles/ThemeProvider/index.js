import React from 'react'
import { Provider } from 'react-native-paper'
import theme from '@styles/theme'

const ThemeProvider = ({ children }) => (
    <Provider theme={theme}>{children}</Provider>
)

export default ThemeProvider
