import Box from '@UI/Box'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3
const AppMovieSplash = () => {
    const animation = require('./startup-loading.json')

    return (
        <Box
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            bgcolor={'#00BCD6'}
            height="100%"
            animation="bounceInUp">
            <LottieView
                style={{ width: imageSize }}
                autoPlay
                loop
                source={animation}
            />
        </Box>
    )
}

export default React.memo(AppMovieSplash)
