import React from 'react'
import AppMovieSplash from '@modules/startup/components/AppMovieSplash'
import { useNavigation } from '@modules/navigation/hooks'
import useGenres from '@modules/search/hooks/useGenres'

const Startup = () => {
    const { replace } = useNavigation()
    const { populateRealm } = useGenres()

    React.useEffect(() => {
        setTimeout(() => {
            populateRealm()
            replace('home')
        }, 3000)
    }, [])

    return <AppMovieSplash />
}

export default Startup
