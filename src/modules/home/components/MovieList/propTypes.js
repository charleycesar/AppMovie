import PropTypes from 'prop-types'

export const propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    onMoviePress: PropTypes.func,
}

export const defaultProps = {
    title: '',
    data: [],
    onMoviePress: () => undefined,
}
