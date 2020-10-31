import PropTypes from 'prop-types'

export const propTypes = {
    statusBarColor: PropTypes.string,
    fullScreen: PropTypes.bool,
    statusBarStyle: PropTypes.oneOf([
        'default',
        'light-content',
        'dark-content',
    ]),
}

export const defaultProps = {
    statusBarColor: '#FFFFFF',
    statusBarStyle: 'dark-content',
    fullScreen: false,
}
