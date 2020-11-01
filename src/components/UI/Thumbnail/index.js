import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import FastImage from 'react-native-fast-image'

const Thumbnail = ({ uri, width, height }) => (
    <FastImage
        style={{
            width,
            height,
        }}
        source={{
            uri: uri,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
)

Thumbnail.propTypes = {
    ...propTypes,
}

Thumbnail.defaultProps = {
    ...defaultProps,
}

export default React.memo(Thumbnail)
