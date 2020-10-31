import BackIcon from '@UI/Icon/BackIcon'
import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

const BackButton = (props) => {
    const { htmlColor, leftMargin, align, ...rest } = props
    return (
        <TouchableRipple
            {...rest}
            centered={false}
            style={[
                localStyle.button,
                { marginLeft: Platform.OS === 'ios' && leftMargin ? 10 : 0 },
                { alignItems: align },
            ]}>
            <BackIcon htmlColor={htmlColor} />
        </TouchableRipple>
    )
}

const localStyle = StyleSheet.create({
    button: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

BackButton.propTypes = {
    htmlColor: PropTypes.string,
    leftMargin: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
}

BackButton.defaultProps = {
    htmlColor: undefined,
    leftMargin: true,
    align: 'center',
}

export default BackButton
