import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from '@styles/hooks'
import { propTypes, defaultProps } from './propTypes'

const Icon = ({ color, htmlColor }) => {
    const theme = useTheme()
    const hxColor = htmlColor || theme.palette[color].main

    return (
        <Svg
            height={25}
            viewBox="0 0 25 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M21.3211 11H7.15111L10.7311 7.41L9.32111 6L3.32111 12L9.32111 18L10.7311 16.59L7.15111 13H21.3211V11Z"
                fill={hxColor}
            />
        </Svg>
    )
}

Icon.displayName = 'BackIcon'

Icon.propTypes = {
    ...propTypes,
}

Icon.defaultProps = {
    ...defaultProps,
}

export default React.memo(Icon)
