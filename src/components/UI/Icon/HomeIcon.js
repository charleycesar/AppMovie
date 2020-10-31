import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { useTheme } from '@styles/hooks'

import { propTypes, defaultProps } from './propTypes'

const Icon = ({ color, width, height, htmlColor }) => {
    const theme = useTheme()
    const hxColor = htmlColor || theme.palette[color].main

    return (
        <Svg
            height={height}
            viewBox="0 0 16 18"
            width={width}
            xmlns="http://www.w3.org/2000/svg">
            <G
                id="Home"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <Path
                    d="M5 10H11V16H14V7L8 2.5L2 7V16H5V10ZM0 18V6L8 0L16 6V18H0Z"
                    fill={hxColor}
                />
            </G>
        </Svg>
    )
}

Icon.displayName = 'HomeIcon'

Icon.propTypes = {
    ...propTypes,
}

Icon.defaultProps = {
    ...defaultProps,
}

export default React.memo(Icon)
