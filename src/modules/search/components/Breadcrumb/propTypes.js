import PropTypes from 'prop-types'

export const propTypes = {
    onPressGoBack: PropTypes.func,
    onPressChoose: PropTypes.func,
    onPressGenre: PropTypes.func,
    choose: PropTypes.object,
    genre: PropTypes.object,
}

export const defaultProps = {
    onPressGoBack: () => undefined,
    onPressChoose: () => undefined,
    onPressGenre: () => undefined,
    choose: { name: '', value: '' },
    genre: { name: '', id: '' },
}