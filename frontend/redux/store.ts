import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from './features/cake-slice'
import cakeInfoReducer from './features/cake-info'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    cakeReducer,
    cakeInfoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
