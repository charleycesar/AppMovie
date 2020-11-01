import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import FastImage from 'react-native-fast-image'

const Thumbnail = ({ uri, width, height, borderRadius, noBorderRadius }) => (
    <FastImage
        style={{
            width,
            height,
            borderRadius: noBorderRadius === true ? 0 : borderRadius,
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
