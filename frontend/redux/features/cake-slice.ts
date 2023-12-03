import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  Limitation,
  CakeShape,
  Cream,
  Dough,
  Filling,
  Frosting,
} from '../../types/cake'

type InitialStateType = {
  shape?: CakeShape
  portions?: number
  filling?: Filling
  dough?: Dough
  frosting?: Frosting
  cream?: Cream
  limitations: Record<Limitation, boolean>
}

const initialState: InitialStateType = {
  shape: undefined,
  portions: undefined,
  filling: undefined,
  limitations: {
    'lactose-free': false,
    'gluten-free': false,
    vegie: false,
  },
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
    setFilling: (state, action: PayloadAction<Filling>) => {
      state.filling = action.payload
    },
    setDought: (state, action: PayloadAction<Dough>) => {
      state.dough = action.payload
    },
    setFrosting: (state, action: PayloadAction<Frosting>) => {
      state.frosting = action.payload
    },
    setCream: (state, action: PayloadAction<Cream>) => {
      state.cream = action.payload
    },
    addLimitation: (state, action: PayloadAction<Limitation>) => {
      state.limitations[action.payload] = true
    },
    removeLimitation: (state, action: PayloadAction<Limitation>) => {
      state.limitations[action.payload] = false
    },
  },
})

export const {
  setShape,
  setPortions,
  setFilling,
  setDought,
  setCream,
  setFrosting,
  addLimitation,
  removeLimitation,
} = cakeSlice.actions
export default cakeSlice.reducer
