import grid from './grid'
import space from './space.js'
import palette from './palette'
import buttons from './buttons'
import checkbox from './checkbox'
import navigator from './navigator'
import typography, { font } from './typography'

const theme = {
    grid,
    space,
    palette,
    buttons,
    checkbox,
    navigator,
    typography,
    dark: false,
    roundness: 5,
    borderRadius: 5,
    spacing: (ft1) => {
        const space = 8
        return ft1 * space
    },
    colors: {
        primary: palette.primary.main,
        accent: palette.secondary.main,
        background: palette.background.default,
        error: palette.error.main,
        surface: palette.background.paper,
        text: palette.text.primary,
        onBackground: palette.text.primary,
        onSurface: palette.text.primary,
        disabled: palette.action.disabled,
        placeholder: 'rgba(0, 0, 0, 0.54)',
        backdrop: palette.background.backdrop,
        notification: palette.secondary.light,
    },
    fonts: {
        medium: {
            fontFamily: font.family.medium,
            fontWeight: `${typography.fontWeightMedium}`,
        },
        regular: {
            fontFamily: font.family.regular,
            fontWeight: `${typography.fontWeightRegular}`,
        },
        light: {
            fontFamily: font.family.light,
            fontWeight: `${typography.fontWeightLight}`,
        },
        thin: {
            fontFamily: font.family.light,
            fontWeight: `${typography.fontWeightLight}`,
        },
    },
    animation: {
        scale: 1.0,
    },
}

export default theme
