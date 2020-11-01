import Box from '@UI/Box'
import { getScreenHeight } from '@helpers/screen'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import useConnectionListener from '@modules/connection/hooks/useConnection'
import { Snackbar } from 'react-native-paper'

import { propTypes, defaultProps } from './propTypes'

const HEIGHT = getScreenHeight()

const Screen = ({
    children,
    statusBarColor,
    statusBarStyle,
    fullScreen,
    statusBarTranslucent,
    bgcolor,
}) => {
    const { connected } = useConnectionListener()
    const [toast, setToast] = React.useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
            <StatusBar
                barStyle={statusBarStyle}
                translucent={statusBarTranslucent}
                backgroundColor={statusBarColor}
            />
            {!connected ? (
                <Snackbar
                    visible={!toast}
                    onDismiss={() => setToast(!toast)}
                    duration={3000}>
                    Não há conexão com internet.
                </Snackbar>
            ) : null}
            {fullScreen ? (
                <Box
                    display="flex"
                    bgcolor={bgcolor}
                    height={statusBarTranslucent ? HEIGHT : undefined}>
                    {children}
                </Box>
            ) : (
                <Box
                    px={2}
                    pb={2}
                    display="flex"
                    bgcolor={bgcolor}
                    height={statusBarTranslucent ? HEIGHT : undefined}>
                    {children}
                </Box>
            )}
        </SafeAreaView>
    )
}

Screen.propTypes = {
    ...propTypes,
}

Screen.defaultProps = {
    ...defaultProps,
}

export default React.memo(Screen)
