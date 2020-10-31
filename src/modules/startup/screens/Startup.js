import React from 'react'
import AppMovieSplash from '@modules/startup/components/AppMovieSplash'
import { useNavigation } from '@modules/navigation/hooks'

const Startup = () => {
    const { replace } = useNavigation()

    React.useEffect(() => {
        setTimeout(() => {
            replace('home')
        }, 3000)
    }, [])

    return <AppMovieSplash />
}

export default Startup
