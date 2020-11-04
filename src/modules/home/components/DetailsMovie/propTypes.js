import PropTypes from 'prop-types'

export const propTypes = {
    movie: PropTypes.object,
    size: PropTypes.oneOf([
        'w92',
        'w154',
        'w185',
        'w342',
        'w500',
        'w780',
        'original',
    ]),
}

export const defaultProps = {
    movie: {},
    size: 'w154',
}
