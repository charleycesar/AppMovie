import { StatusBar, Platform, Dimensions } from 'react-native'

export const getScreenHeight = () =>
    Platform.OS !== 'ios' &&
    Dimensions.get('screen').height !== Dimensions.get('window').height &&
    StatusBar.currentHeight > 24
        ? Dimensions.get('screen').height - StatusBar.currentHeight
        : Dimensions.get('window').height

export const getScreenDimensions = () => ({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
})
