import PropTypes from 'prop-types'

export const propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
}

export const defaultProps = {
    label: '',
    onPress: () => undefined,
}
