import PropTypes from 'prop-types'

export const propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    openDetailBottomSheet: PropTypes.func,
}

export const defaultProps = {
    title: '',
    data: [],
    openDetailBottomSheet: () => undefined,
}
