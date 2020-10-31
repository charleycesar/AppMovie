import palette from './palette'

export default {
    borderWidth: 1,
    contained: {
        elevation: 0,
    },
    small: {
        size: 13,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    medium: {
        size: 16,
        paddingVertical: 2,
        paddingHorizontal: 2,
    },
    large: {
        size: 19,
        paddingVertical: 4,
        paddingHorizontal: 4,
    },
    xl: {
        size: 26,
        paddingVertical: 6,
        paddingHorizontal: 6,
    },
    colors: {
        default: {
            background: palette.grey.main,
            backgroundDisabled: palette.grey.light,
            label: palette.grey.dark,
            labelContrast: palette.common.white,
            labelDisabledContrast: palette.grey.light,
            labelDisabled: palette.grey.light,
        },
        accent: {
            background: palette.accent.main,
            backgroundDisabled: palette.accent.light,
            label: palette.accent.main,
            labelContrast: palette.accent.contrastText,
            labelDisabledContrast: palette.common.white,
            labelDisabled: palette.accent.light,
        },
        primary: {
            background: palette.primary.main,
            backgroundDisabled: palette.primary.light,
            label: palette.primary.main,
            labelContrast: palette.primary.contrastText,
            labelDisabledContrast: palette.common.white,
            labelDisabled: palette.primary.light,
        },
        secondary: {
            background: palette.secondary.main,
            backgroundDisabled: palette.secondary.light,
            label: palette.secondary.main,
            labelContrast: palette.secondary.contrastText,
            labelDisabledContrast: palette.common.white,
            labelDisabled: palette.secondary.light,
        },
        white: {
            background: palette.common.white,
            backgroundDisabled: palette.grey.light,
            label: palette.primary.main,
            labelContrast: palette.primary.main,
            labelDisabledContrast: palette.primary.light,
            labelDisabled: palette.primary.light,
        },
    },
}
