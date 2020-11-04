import PropTypes from 'prop-types'

export const propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    onPress: PropTypes.func,
}

export const defaultProps = {
    title: '',
    data: [],
    onPress: () => undefined,
}
