import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { useTheme } from '@styles/hooks'
import { propTypes, defaultProps } from './propTypes'

const Icon = ({ color, htmlColor }) => {
    const theme = useTheme()
    const hxColor = htmlColor || theme.palette[color].main

    return (
        <Svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg">
            <Rect
                width="24"
                height="24"
                transform="rotate(-90 12 12)"
                opacity="0"
            />
            <Path
                fill={hxColor}
                d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"
            />
        </Svg>
    )
}

Icon.displayName = 'ArrowDownIcon'

Icon.propTypes = {
    ...propTypes,
}

Icon.defaultProps = {
    ...defaultProps,
}

export default React.memo(Icon)
