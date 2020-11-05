import PropTypes from 'prop-types'

export const propTypes = {
    message: PropTypes.string,
    description: PropTypes.string,
}

export const defaultProps = {
    title: 'Ops. Não encontramos nada.',
    description: 'Tente buscar por outro termo.',
}
