import PropTypes from 'prop-types'

export const propTypes = {
    uri: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    borderRadius: PropTypes.number,
}

export const defaultProps = {
    uri: '',
    width: 100,
    height: 150,
    borderRadius: 8,
    noBorderRadius: false,
}
