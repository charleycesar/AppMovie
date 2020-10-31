import {
    useIsFocused as useNativeIsFocused,
    useNavigation as useNativeNavigation,
    useRoute as useNativeRoute,
    useFocusEffect,
} from '@react-navigation/native'

const useNavigation = () => {
    const {
        navigate,
        replace,
        goBack,
        getParam,
        openDrawer,
        closeDrawer,
    } = useNativeNavigation()

    return {
        goBack,
        replace,
        getParam,
        navigate,
        openDrawer,
        closeDrawer,
    }
}

const useRoute = () => {
    const { name, params } = useNativeRoute()

    const route = {
        name,
        path: name,
        params,
    }

    return route
}

const useIsFocused = () => {
    const isFocused = useNativeIsFocused()
    return isFocused
}

export { useNavigation, useRoute, useIsFocused, useFocusEffect }
