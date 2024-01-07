import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Decoration = {
  id?: number
  x: number
  y: number
  image: string
}

export type Decorations = {
  id: number
  decorations: Decoration[]
}

export type PositionWithId = {
  id: number
  x: number
  y: number
}

const initialState: Decorations = {
  id: 0,
  decorations: [],
}

export const decorationsSlice = createSlice({
  name: 'decorations',
  initialState,
  reducers: {
    addDercoration: (state, action: PayloadAction<{ image: string }>) => {
      state.decorations = [
        ...state.decorations,
        { x: 50, y: -50, image: action.payload.image, id: state.id++ },
      ]
    },
    removeDecoration: (state, action: PayloadAction<number>) => {
      state.decorations = state.decorations.filter(
        (decoration) => decoration.id !== action.payload
      )
    },
    updateDecorationPosition: (
      state,
      action: PayloadAction<PositionWithId>
    ) => {
      state.decorations = state.decorations.map((decoration) =>
        decoration.id === action.payload.id
          ? { ...decoration, ...action.payload }
          : decoration
      )
    },
  },
})

export const { addDercoration, removeDecoration, updateDecorationPosition } =
  decorationsSlice.actions
export default decorationsSlice.reducer
