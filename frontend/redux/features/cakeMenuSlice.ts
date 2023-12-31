import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CakeDetails = {
  id?: number
  name?: string
  description?: string
  price?: number
  finalPrice?: number
  size?: number
  flavour?: string
  restrictions?: Array<string>
}

const initialState: CakeDetails = {
  id: undefined,
  name: undefined,
  description: undefined,
  price: undefined,
  finalPrice: undefined,
  size: undefined,
  flavour: undefined,
  restrictions: undefined,
}

export const cakeMenuSlice = createSlice({
  name: 'cakeMenu',
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
    },
    setFinalPrice: (state, action: PayloadAction<number>) => {
      state.finalPrice = action.payload
    },
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload
    },
    setFlavour: (state, action: PayloadAction<string>) => {
      state.flavour = action.payload
    },
    setRestrictions: (state, action: PayloadAction<Array<string>>) => {
      state.restrictions = action.payload
    }
  },
})

export const { setId, setName, setDescription, setPrice, setFinalPrice, setSize, setFlavour, setRestrictions } = cakeMenuSlice.actions
export default cakeMenuSlice.reducer
