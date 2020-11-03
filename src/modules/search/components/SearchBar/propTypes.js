import PropTypes from 'prop-types'

export const propTypes = {
    placeholder: PropTypes.string,
    btnText: PropTypes.string,
    onChangeText: PropTypes.func,
    onBlur: PropTypes.func,
    onSearchPress: PropTypes.func,
}

export const defaultProps = {
    btnText: '',
    placeholder: 'Pesquise por ...',
    onChangeText: () => undefined,
    onBlur: () => undefined,
    onSearchPress: () => undefined,
}
