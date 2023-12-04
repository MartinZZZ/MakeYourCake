import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CakeDetails = {
  id?: number
  name?: string
  description?: string
  price?: number
}

const initialState: CakeDetails = {
  id: undefined,
  name: undefined,
  description: undefined,
  price: undefined,
}

export const cakeInfoSlice = createSlice({
  name: 'cakeInfo',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload
    }
  },
})

export const { setId, setName, setDescription, setPrice } = cakeInfoSlice.actions
export default cakeInfoSlice.reducer
