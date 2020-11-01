import PropTypes from 'prop-types'

export const propTypes = {
    data: PropTypes.shape({
        uri: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
    }),
}

export const defaultProps = {
    data: {
        uri: '',
        title: '',
        release_date: '',
    },
}
