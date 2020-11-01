import React from 'react'
import NetInfo from '@react-native-community/netinfo'

const useConnectionListener = () => {
    const [connected, setConnected] = React.useState(true)

    React.useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setConnected(state.isConnected)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return { connected }
}

export default useConnectionListener
