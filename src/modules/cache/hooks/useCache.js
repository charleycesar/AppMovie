import React from 'react'
import { useDispatch } from 'react-redux'
import useConnection from '@modules/connection/hooks/useConnection'

const useCache = () => {
    const dispatch = useDispatch()
    const { connected } = useConnection()

    const getRequest = (store, params) => {
        if (!connected) {
            return 'offlineResult'
        }
        dispatch(store.action(params))
    }

    return { getRequest }
}

export default useCache
