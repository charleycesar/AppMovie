import Box from '@UI/Box'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { useTheme } from '@styles/hooks'

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3
const AppMovieSplash = () => {
    const animation = require('./startup-loading.json')
    const theme = useTheme()

    return (
        <Box
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            testID="AppMovieSplash-component"
            bgcolor={theme.palette.primary.main}
            height="100%"
            animation="bounceInUp">
            <LottieView
                style={{ width: imageSize }}
                autoPlay
                loop
                source={animation}
                testID={'AppMovieSplash-animation'}
            />
        </Box>
    )
}

export default React.memo(AppMovieSplash)
