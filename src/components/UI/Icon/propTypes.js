import PropTypes from 'prop-types'

export const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'accent',
        'grey',
        'white',
    ]),
    htmlColor: PropTypes.string,
    strokeWidth: PropTypes.number,
}

export const defaultProps = {
    width: 16,
    height: 16,
    color: 'default',
    htmlColor: '',
    strokeWidth: 0,
}
