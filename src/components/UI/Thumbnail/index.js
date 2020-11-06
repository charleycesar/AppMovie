import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Config } from '@/config'
import { ActivityIndicator } from 'react-native'

const Thumbnail = ({
    uri,
    width,
    height,
    borderRadius,
    noBorderRadius,
    usePrefix,
    fileSize,
}) => {
    const [loading, setLoading] = React.useState(false)
    const fullUrl = usePrefix
        ? `${Config.IMAGE_BASE_URL}${fileSize}${uri}`
        : uri
    return (
        <FastImage
            style={{
                width,
                height,
                borderRadius: noBorderRadius === true ? 0 : borderRadius,
            }}
            source={{
                uri: fullUrl,
                priority: FastImage.priority.normal,
            }}
            fallback
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            defaultSource={require('@assets/images/placeholder.png')}
            onError={(response) => console.log('Deu erro')}
            resizeMode={FastImage.resizeMode.contain}>
            <ActivityIndicator animating={loading} />
        </FastImage>
    )
}

Thumbnail.propTypes = {
    ...propTypes,
}

Thumbnail.defaultProps = {
    ...defaultProps,
}

export default React.memo(Thumbnail)
