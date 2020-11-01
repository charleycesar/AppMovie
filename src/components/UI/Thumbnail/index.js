import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Config } from '@/config'

const Thumbnail = ({
    uri,
    width,
    height,
    borderRadius,
    noBorderRadius,
    usePrefix,
}) => (
    <FastImage
        style={{
            width,
            height,
            borderRadius: noBorderRadius === true ? 0 : borderRadius,
        }}
        source={{
            uri: usePrefix ? `${Config.IMAGE_BASE_URL}${uri}` : uri,
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
