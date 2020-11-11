import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useTheme } from '@styles/hooks'

import { propTypes, defaultProps } from './propTypes'

const TheBox = (props) => {
    const {
        testID,
        m,
        mt,
        mr,
        mb,
        ml,
        mx,
        my,
        p,
        pt,
        pr,
        pb,
        pl,
        px,
        py,
        display,
        alignItems,
        justifyContent,
        flexGrow,
        flexShrink,
        direction,
        bgcolor,
        fullWidth,
        width,
        height,
        children,
        boxShadow,
        border,
        wrap,
        borderRadius,
        fullscreen,
        absolutePosition,
        animation,
    } = props

    const theme = useTheme()

    if (display === 'none') return null

    const styleObj = {
        flexGrow,
        flexShrink,
        height,
        margin: m && theme.space.default * m,
        marginTop: mt && theme.space.default * mt,
        marginRight: mr && theme.space.default * mr,
        marginBottom: mb && theme.space.default * mb,
        marginLeft: ml && theme.space.default * ml,
        marginVertical: my && theme.space.default * my,
        marginHorizontl: mx && theme.space.default * mx,

        padding: p && theme.space.default * p,
        paddingTop: pt && theme.space.default * pt,
        paddingRight: pr && theme.space.default * pr,
        paddingBottom: pb && theme.space.default * pb,
        paddingLeft: pl && theme.space.default * pl,
        paddingVertical: py && theme.space.default * py,
        paddingHorizontal: px && theme.space.default * px,

        backgroundColor: bgcolor,
        borderRadius: borderRadius ? borderRadius : 0,
    }
    if (!fullscreen && !fullWidth && width) {
        styleObj.width = width
    }

    if (wrap) {
        styleObj.flexWarp = 'wrap'
    }

    if (border) {
        styleObj.borderRadius = border.radius ? border.radius : 0
        styleObj.borderWidth = border.width ? border.width : 0
        styleObj.borderTopWidth = border.borderTopWidth
            ? border.borderTopWidth
            : styleObj.borderWidth
        styleObj.borderBottomWidth = border.borderBottomWidth
            ? border.borderBottomWidth
            : styleObj.borderWidth
        styleObj.borderColor = border.color
            ? theme.palette[border.color].main
            : theme.palette['primary'].main
    }

    if (absolutePosition) {
        absolutePosition.position = 'absolute'
    }

    return (
        <Animatable.View
            testID={testID}
            style={[
                localStyle.Box,
                localStyle[`align-${alignItems}`],
                localStyle[`justify-${justifyContent}`],
                localStyle[`direction-${direction}`],
                localStyle[`box-shadow-${boxShadow}`],
                fullWidth && localStyle.fullWidth,
                display === 'view' && localStyle.view,
                display === 'flex' && localStyle.flex,
                fullscreen && localStyle.fullscreen,
                styleObj,
                absolutePosition,
            ]}
            animation={animation}>
            {children}
        </Animatable.View>
    )
}

TheBox.propTypes = {
    ...propTypes,
}

TheBox.defaultProps = {
    ...defaultProps,
}

const localStyle = StyleSheet.create({
    Box: {
        width: 'auto',
        zIndex: 0,
    },
    fullWidth: {
        width: '100%',
    },
    view: {
        flexShrink: 1,
        flexGrow: 0,
    },
    flex: {
        flex: 1,
    },
    'align-flex-start': {
        alignItems: 'flex-start',
    },
    'align-flex-end': {
        alignItems: 'flex-end',
    },
    'align-center': {
        alignItems: 'center',
    },
    'justify-flex-start': {
        justifyContent: 'flex-start',
    },
    'justify-flex-end': {
        justifyContent: 'flex-end',
    },
    'justify-center': {
        justifyContent: 'center',
    },
    'justify-space-around': {
        justifyContent: 'space-around',
    },
    'justify-space-between': {
        justifyContent: 'space-between',
    },
    'direction-row': {
        flexDirection: 'row',
    },
    'direction-column': {
        flexDirection: 'column',
    },
    'box-shadow-0': {},
    'box-shadow-1': {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    'box-shadow-2': {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    'box-shadow-3': {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    fullscreen: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        height: 400,
    },
})

export default React.memo(TheBox)
