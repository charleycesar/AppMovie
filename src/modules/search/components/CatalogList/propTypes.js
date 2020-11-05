import PropTypes from 'prop-types'

export const propTypes = {
    data: PropTypes.array,
    onPressItem: PropTypes.func,
    loading: PropTypes.bool,
    discoverMovies: PropTypes.func,
    onScroll: PropTypes.func,
}

export const defaultProps = {
    data: [],
    onPressItem: () => undefined,
    loading: false,
    discoverMovies: () => undefined,
    onScroll: () => undefined,
}
