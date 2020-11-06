import Box from '@UI/Box'
import React from 'react'
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native'
import { useTheme } from '@styles/hooks'

const Loading = ({ fullScreen, size, zIndex }) => {
    const theme = useTheme()
    const sizeLoading = size ? size : 'large'
    const classes = localStyle(theme)

    return fullScreen ? (
        <View style={[classes.root, { zIndex }]}>
            <StatusBar backgroundColor="transparent" translucent />
            <ActivityIndicator size={sizeLoading} />
        </View>
    ) : (
        <Box alignItems="center" justifyContent="center">
            <ActivityIndicator size={sizeLoading} color={'white'} />
        </Box>
    )
}

const localStyle = (theme) =>
    StyleSheet.create({
        root: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.backdrop,
        },
    })

export default Loading
