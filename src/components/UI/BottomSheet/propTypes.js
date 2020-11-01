import PropTypes from 'prop-types'

export const propTypes = {
    show: PropTypes.bool.isRequired,
    size: PropTypes.oneOf([
        'small',
        'small-regular',
        'regular',
        'medium',
        'medium-large',
        'large',
    ]),
    header: PropTypes.element,
    onClose: PropTypes.func,
    showBackDrop: PropTypes.bool,
    showDrag: PropTypes.bool,
}

export const defaultProps = {
    show: false,
    header: null,
    size: 'regular',
    onClose: () => undefined,
    showBackDrop: true,
    showDrag: false,
}
