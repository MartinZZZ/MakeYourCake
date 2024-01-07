import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cakeReducer from './features/cake-slice'
import decorationsReducer from './features/decorations-slice'
import cakeMenuReducer from './features/cakeMenuSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedCakeMenuReducer = persistReducer(persistConfig, cakeMenuReducer)

export const store = configureStore({
  reducer: {
    cakeReducer,
    decorationsReducer,
    cakeMenu: persistedCakeMenuReducer,
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
