import palette from './palette'

export default {
    default: {
        dark: false,
        colors: {
            primary: palette.primary.main,
            background: palette.background.paper,
            card: palette.background.paper,
            text: palette.primary.main,
            border: palette.background.paper,
        },
    },
    dark: {
        dark: true,
        colors: {
            primary: palette.primary.main,
            background: palette.background.paper,
            card: palette.background.paper,
            text: palette.primary.main,
            border: palette.background.paper,
        },
    },
}
