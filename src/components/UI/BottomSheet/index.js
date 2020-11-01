import Box from '@UI/Box'
import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native'
import RBottomSheet from 'reanimated-bottom-sheet'
import { useTheme } from '@styles/hooks'

import { propTypes, defaultProps } from './propTypes'

const sizes = {
    small: [150, 100, 0],
    'small-regular': [250, 150, 0],
    regular: [300, 200, 0],
    medium: [400, 300, 0],
    'medium-large': [520, 350, 0],
    large: [600, 400, 0],
}

const localStyle = (theme) =>
    StyleSheet.create({
        drag: {
            width: 48,
            height: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.grey.darkest,
        },
        header: {
            backgroundColor: theme.palette.grey.dark,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            padding: 0,
            minHeight: 14,
        },
        baseContentContainer: {
            height: '100%',
        },
        baseContent: {
            marginTop: 10,
            backgroundColor: theme.palette.grey.dark,
            padding: 0,
            flexGrow: 1,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,

            shadowColor: theme.palette.grey.darkest,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 6,

            elevation: 10,
        },
        backdrop: {
            backgroundColor: theme.palette.background.backdrop,
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
        },
    })

const BottomSheet = ({
    show,
    onClose,
    header,
    children,
    size,
    showBackDrop,
    showDrag,
}) => {
    const theme = useTheme()
    const bottomSheetRef = React.useRef()

    React.useEffect(() => {
        if (bottomSheetRef.current) {
            if (show) {
                bottomSheetRef.current.snapTo(0)
            } else {
                bottomSheetRef.current.snapTo(2)
            }
        }
    }, [bottomSheetRef, show])

    const classes = localStyle(theme)

    const Header = () => {
        if (!showDrag) return null
        return (
            <View style={classes.header}>
                <Box display="flex" alignItems="center" pt={1.5}>
                    <View style={classes.drag} />
                </Box>
                {header}
            </View>
        )
    }

    const renderContent = () => {
        if (!show) return null
        return (
            <KeyboardAvoidingView style={classes.baseContentContainer}>
                <View style={classes.baseContent}>
                    <Header />
                    {children}
                </View>
            </KeyboardAvoidingView>
        )
    }

    const Shadow = () => {
        return (
            <TouchableOpacity
                onPress={onClose}
                pointerEvents="none"
                style={classes.backdrop}
            />
        )
    }

    return (
        <>
            <RBottomSheet
                ref={bottomSheetRef}
                enabledContentTapInteraction={false}
                enabledInnerScrolling
                enabledGestureInteractions
                enabledHeaderGestureInteractions
                enabledContentGestureInteraction
                enabledManualSnappings={false}
                onCloseEnd={onClose}
                snapPoints={sizes[size]}
                renderContent={renderContent}
                initialSnap={0}
            />
            {show && showBackDrop && <Shadow />}
        </>
    )
}

BottomSheet.propTypes = {
    ...propTypes,
}

BottomSheet.defaultProps = {
    ...defaultProps,
}

export default React.memo(BottomSheet)
