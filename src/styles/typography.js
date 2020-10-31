import palette from './palette'

export const font = {
    family: {
        main: 'Arial',
        bold: 'Arial',
        medium: 'Arial',
        regular: 'Arial',
        light: 'Arial',
    },
    weight: {
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300,
    },
    size: {
        extraSmall: 11,
        smaller: 12,
        small: 14,
        regular: 16,
        large: 18,
        custom: 24,
        xlarge: 64,
    },
}

export default {
    htmlFontSize: 16,

    fontSize: 16,
    fontFamily: `${font.family.main}, sans-serif`,

    fontWeightBold: font.weight.bold,
    fontWeightMedium: font.weight.medium,
    fontWeightRegular: font.weight.regular,
    fontWeightLight: font.weight.light,

    fontFamilyBold: font.family.bold,
    fontFamilyMedium: font.family.medium,
    fontFamilyRegular: font.family.regular,
    fontFamilyLight: font.family.light,

    fontSizeExtraSmall: font.size.extraSmall,
    fontSizeSmaller: font.size.smaller,
    fontSizeLarge: font.size.large,

    color: palette.text.primary,
    h1: {
        fontSize: 64,
        color: palette.text.secondary,
        fontWeight: font.weight.medium,
        lineHeight: 83,
    },
    h2: {
        fontSize: 48,
        color: palette.text.secondary,
        fontWeight: font.weight.medium,
        lineHeight: 62,
    },
    h3: {
        fontSize: 32,
        color: palette.text.secondary,
        fontWeight: font.weight.regular,
        lineHeight: 42,
    },
    h4: {
        fontSize: 20,
        color: palette.text.secondary,
        fontWeight: font.weight.medium,
        lineHeight: 26,
    },
    h5: {
        fontSize: 16,
        color: palette.text.secondary,
        fontWeight: font.weight.medium,
    },
    h6: {
        fontSize: 14,
        color: palette.text.secondary,
        fontWeight: font.weight.medium,
    },
    body1: {
        fontSize: font.size.regular,
        lineHeight: 21,
    },
    body2: {
        fontSize: font.size.small,
        fontWeight: font.weight.regular,
    },
    caption: {
        color: palette.secondary.main,
        fontWeight: font.weight.regular,
        fontSize: font.size.smaller,
        lineHeight: 20,
        letterSpacing: 0.39996,
    },
    overline: {
        fontWeight: font.weight.regular,
        textTransform: 'uppercase',
        fontSize: font.size.smaller,
        lineHeight: 31,
        letterSpacing: 0.99996,
    },
    button: {
        fontWeight: font.weight.bold,
        fontSize: font.size.regular,
        lineHeight: 24,
        letterSpacing: 0,
        textTransform: 'uppercase',
    },
    subtitle1: {
        fontWeight: font.weight.regular,
        fontSize: font.size.regular,
        lineHeight: 24,
        letterSpacing: 0.15008,
    },
    subtitle2: {
        fontWeight: font.weight.medium,
        fontSize: font.size.small,
        lineHeight: 20,
        letterSpacing: 0.09996,
    },
    customNumber: {
        fontWeight: font.weight.medium,
        fontSize: font.size.custom,
        lineHeight: 31,
    },
}
