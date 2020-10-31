import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'

import startup from './Startup'

const reducers = combineReducers({
    startup,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(createDebugger()),
})

const persistor = persistStore(store)

export { store, persistor }