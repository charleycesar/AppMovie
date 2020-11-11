import PropTypes from 'prop-types'

export const propTypes = {
    testID: PropTypes.string,
    bgcolor: PropTypes.string,
    display: PropTypes.oneOf(['none', 'view', 'flex']),
    direction: PropTypes.oneOf(['row', 'column']),
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    justifyContent: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-around',
        'space-between',
        'space-evenly',
    ]),

    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fullWidth: PropTypes.bool,

    m: PropTypes.number,
    mt: PropTypes.number,
    mr: PropTypes.number,
    mb: PropTypes.number,
    ml: PropTypes.number,

    mx: PropTypes.number,
    my: PropTypes.number,

    p: PropTypes.number,
    pt: PropTypes.number,
    pr: PropTypes.number,
    pb: PropTypes.number,
    pl: PropTypes.number,

    px: PropTypes.number,
    py: PropTypes.number,

    boxShadow: PropTypes.oneOf([0, 1, 2, 3]),

    borderRadius: PropTypes.number,
    absolutePosition: PropTypes.object,
    animation: PropTypes.string,
}

export const defaultProps = {
    testID: '',
    bgcolor: undefined,
    display: 'view',
    alignItems: 'flex-start',
    flexGrow: undefined,
    flexShrink: undefined,
    direction: 'column',
    fullWidth: true,
    width: undefined,
    height: undefined,
    absolutePosition: undefined,

    m: undefined,
    mt: undefined,
    mr: undefined,
    mb: undefined,
    ml: undefined,

    mx: undefined,
    my: undefined,

    p: undefined,
    pt: undefined,
    pr: undefined,
    pb: undefined,
    pl: undefined,

    px: undefined,
    py: undefined,

    boxShadow: 0,
    borderRadius: 0,
    animation: '',
}
