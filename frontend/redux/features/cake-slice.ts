import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CakeShape } from '../../types/cake'
import { stat } from 'fs'

type InitialStateType = {
  shape?: CakeShape
  portions?: number
}

const initialState: InitialStateType = {
  shape: undefined,
  portions: undefined,
}

export const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    setShape: (state, action: PayloadAction<CakeShape>) => {
      state.shape = action.payload
    },
    setPortions: (state, action: PayloadAction<number>) => {
      state.portions = action.payload
    },
  },
})

export const { setShape, setPortions } = cakeSlice.actions
export default cakeSlice.reducer
