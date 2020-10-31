import React from 'react'
import AppMovieSplash from '@modules/startup/components/AppMovieSplash'
import { useNavigation } from '@modules/navigation/hooks'

const Startup = () => {
    const { navigate } = useNavigation()

    React.useEffect(() => {
        setTimeout(() => {
            navigate('home')
        }, 3000)
    }, [])

    return <AppMovieSplash />
}

export default Startup
