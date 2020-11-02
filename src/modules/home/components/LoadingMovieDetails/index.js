import Box from '@UI/Box'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { useTheme } from '@styles/hooks'

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3
const LoadingMovieDetails = () => {
    const animation = require('./loading-movie-details.json')
    const theme = useTheme()

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
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

export default React.memo(LoadingMovieDetails)
