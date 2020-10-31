import React from 'react'
import { useTheme } from 'react-native-paper'
import { Text, StyleSheet } from 'react-native'
import { propTypes, defaultProps } from './propTypes'

const TheText = ({
    underline,
    variant,
    color,
    weight,
    overflowEllipsis,
    gutterBottom,
    children,
    style,
    paragraph,
    align,
    fullWidth,
    ...rest
}) => {
    const theme = useTheme()
    const classes = localStyle(theme, fullWidth)
    let fontStyle
    let fontWeight
    let fontColor = classes.defaultColor
    const underlined = underline && classes.underline
    switch (variant) {
        case 'body1':
            fontStyle = classes.body1
            break
        case 'body2':
            fontStyle = classes.body2
            break
        case 'body3':
            fontStyle = classes.body3
            break
        case 'h1':
            fontStyle = classes.h1
            break
        case 'h2':
            fontStyle = classes.h2
            break
        case 'h3':
            fontStyle = classes.h3
            break
        case 'h4':
            fontStyle = classes.h4
            break
        case 'h5':
            fontStyle = classes.h5
            break
        case 'h6':
            fontStyle = classes.h6
            break
        case 'caption':
            fontStyle = classes.caption
            break
        case 'overline':
            fontStyle = classes.overline
            break
        case 'button':
            fontStyle = classes.button
            break
        case 'subtitle1':
            fontStyle = classes.subtitle1
            break
        case 'subtitle2':
            fontStyle = classes.subtitle2
            break
        case 'customNumber':
            fontStyle = classes.customNumber
            break
        default:
    }
    switch (weight) {
        case 'bold':
            fontWeight = classes.bold
            break
        case 'medium':
            fontWeight = classes.medium
            break
        case 'regular':
            fontWeight = classes.regular
            break
        case 'light':
            fontWeight = classes.light
            break
        default:
    }
    switch (color) {
        case 'primary':
            fontColor = classes.primary
            break
        case 'secondary':
            fontColor = classes.secondary
            break
        case 'accent':
            fontColor = classes.accent
            break
        case 'error':
            fontColor = classes.error
            break
        case 'grey':
            fontColor = classes.grey
            break
        case 'greymedium':
            fontColor = classes.mediumgrey
            break
        case 'greylight':
            fontColor = classes.lightgrey
            break
        case 'greydark':
            fontColor = classes.darkgrey
            break
        case 'textPrimary':
            fontColor = classes.textPrimary
            break
        case 'textSecondary':
            fontColor = classes.textSecondary
            break
        case 'textGrey':
            fontColor = classes.textGrey
            break
        case 'black':
            fontColor = classes.black
            break
        case 'white':
            fontColor = classes.white
            break
        case 'warn':
            fontColor = classes.warn
            break
        default:
    }

    const titleVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    if (!color && titleVariants.includes(variant)) {
        fontColor = 'undefined'
    }
    if (titleVariants.includes(variant)) {
        fontWeight = classes.medium
    }

    return (
        <Text
            ellipsizeMode={overflowEllipsis ? 'tail' : undefined}
            {...rest}
            style={[
                classes.root,
                fontStyle,
                fontWeight,
                fontColor,
                underlined,
                align && classes[align],
                paragraph && classes.paragraph,
                gutterBottom && classes.gutterBottom,
                style,
            ]}>
            {children}
        </Text>
    )
}

const localStyle = (theme, fullWidth) =>
    StyleSheet.create({
        root: {
            maxWidth: '100%',
            flexShrink: 1,
        },
        left: {
            textAlign: 'left',
        },
        right: {
            textAlign: 'right',
        },
        center: {
            textAlign: 'center',
            width: '100%',
        },
        justify: {
            textAlign: 'justify',
        },
        body1: {
            fontSize: theme.typography.body1.fontSize,
        },
        body2: {
            fontSize: theme.typography.body2.fontSize,
        },
        body3: {
            fontSize: theme.typography.fontSizeSmaller,
        },
        h1: {
            width: fullWidth ? '100%' : 'auto',
            color: theme.typography.h1.color,
            fontSize: theme.typography.h1.fontSize,
            lineHeight: theme.typography.h1.lineHeight,
            fontWeight: `${theme.typography.h1.fontWeight}`,
        },
        h2: {
            width: fullWidth ? '100%' : 'auto',
            color: theme.typography.h2.color,
            fontSize: theme.typography.h2.fontSize,
            lineHeight: theme.typography.h2.lineHeight,
            fontWeight: `${theme.typography.h2.fontWeight}`,
        },
        h3: {
            width: fullWidth ? '100%' : 'auto',
            color: theme.typography.h3.color,
            fontSize: theme.typography.h3.fontSize,
            lineHeight: theme.typography.h3.lineHeight,
            fontWeight: `${theme.typography.h3.fontWeight}`,
        },
        h4: {
            width: fullWidth ? '100%' : 'auto',
            color: theme.typography.h4.color,
            fontSize: theme.typography.h4.fontSize,
            lineHeight: theme.typography.h4.lineHeight,
            fontWeight: `${theme.typography.h4.fontWeight}`,
        },
        h5: {
            width: fullWidth ? '100%' : 'auto',
            color: theme.typography.h5.color,
            fontSize: theme.typography.h5.fontSize,
            lineHeight: theme.typography.h5.lineHeight,
            fontWeight: `${theme.typography.h5.fontWeight}`,
        },
        h6: {
            width: fullWidth ? '100%' : 'auto',
            color: theme.typography.h6.color,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            fontWeight: `${theme.typography.h6.fontWeight}`,
        },
        caption: {
            color: theme.typography.caption.color,
            fontSize: theme.typography.caption.fontSize,
            fontWeight: `${theme.typography.caption.fontWeight}`,
        },
        overline: {
            fontSize: theme.typography.overline.fontSize,
            fontWeight: `${theme.typography.overline.fontWeight}`,
            lineHeight: theme.typography.overline.lineHeight,
            letterSpacing: theme.typography.overline.letterSpacing,
            textTransform: theme.typography.overline.textTransform,
        },
        button: {
            color: theme.typography.button.fontSize,
            fontSize: theme.typography.button.fontSize,
            fontWeight: `${theme.typography.button.fontWeight}`,
        },
        subtitle1: {
            fontSize: theme.typography.subtitle1.fontSize,
            fontWeight: `${theme.typography.subtitle1.fontWeight}`,
        },
        customNumber: {
            fontSize: theme.typography.customNumber.fontSize,
        },
        subtitle2: {
            fontSize: theme.typography.subtitle2.fontSize,
            fontWeight: `${theme.typography.subtitle2.fontWeight}`,
        },
        bold: {
            fontFamily: theme.typography.fontFamilyBold,
            fontWeight: `${theme.typography.fontWeightBold}`,
        },
        medium: {
            fontFamily: theme.typography.fontFamilyMedium,
            fontWeight: `${theme.typography.fontWeightMedium}`,
        },
        regular: {
            fontFamily: theme.typography.fontFamilyRegular,
            fontWeight: `${theme.typography.fontWeightRegular}`,
        },
        light: {
            fontFamily: theme.typography.fontFamilyLight,
            fontWeight: `${theme.typography.fontWeightLight}`,
        },
        paragraph: {
            width: '100%',
            marginBottom: theme.space.margin.verticalLarge,
        },
        defaultColor: {
            color: theme.typography.color,
        },
        textSecondary: {
            color: theme.palette.text.secondary,
        },
        textGrey: {
            color: theme.palette.grey.lightGrey,
        },
        textPrimary: {
            color: theme.palette.text.primary,
        },
        primary: {
            color: theme.palette.primary.main,
        },
        secondary: {
            color: theme.palette.secondary.main,
        },
        accent: {
            color: theme.palette.accent.main,
        },
        grey: {
            color: theme.palette.grey.main,
        },
        greymedium: {
            color: theme.palette.grey.light,
        },
        greylight: {
            color: theme.palette.grey.light,
        },
        greydark: {
            color: theme.palette.grey.dark,
        },
        error: {
            color: theme.palette.error.main,
        },
        black: {
            color: theme.palette.common.black,
        },
        white: {
            color: theme.palette.common.white,
        },
        warn: {
            color: theme.palette.warning.main,
        },
        gutterBottom: {
            marginBottom: theme.space.padding.verticalLarge,
        },
        underline: {
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
        },
    })

TheText.propTypes = {
    ...propTypes,
}

TheText.defaultProps = {
    ...defaultProps,
}

export default React.memo(TheText)
