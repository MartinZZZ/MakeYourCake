import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../redux/store'
import { CakeShape } from '../../types/cake'
import { setPortions, setShape } from '../../redux/features/cake-slice'
import { useState } from 'react'

const HIGHLIGHT_COLOR = 'green'
const BORDER_THICKNESS = 10

const ROUND_SIZES = [
  { size: 20, portions: 20 },
  { size: 25, portions: 28 },
  { size: 30, portions: 36 },
]

const SQUARE_SIZES = [
  { size: 20, portions: 20 },
  { size: 25, portions: 30 },
  { size: 30, portions: 48 },
]

const HIGLIGHTED_STYLES = {
  border: `solid ${BORDER_THICKNESS}px ${HIGHLIGHT_COLOR}`,
}

const STYLES = {
  width: '30%',
  paddingTop: '30%',
  backgroundColor: 'secondary.main',
  border: `solid ${BORDER_THICKNESS}px white`,
  '&:hover': {
    cursor: 'pointer',
  },
}

type PortionButtonProps = {
  size: number
  portions: number
  selectedShape: CakeShape
  shape: CakeShape
  selectedPortions: number
  handlePortionsChange: (portions: number) => void
}

const PortionButton = ({
  size,
  portions,
  selectedPortions,
  shape,
  selectedShape,
  handlePortionsChange,
}: PortionButtonProps) => {
  const isContained = selectedPortions == portions && selectedShape == shape
  const isDisabled = selectedShape !== shape
  return (
    <Button
      variant={isContained ? 'contained' : 'outlined'}
      disabled={isDisabled}
      onClick={() => handlePortionsChange(portions)}
    >
      {shape === 'round'
        ? `Ø${size}\xa0cm ${portions}\xa0porcií`
        : `${size}x${size}\xa0cm ${portions}\xa0porcií`}
    </Button>
  )
}

export const Tvar = () => {
  const selectedShape = useAppSelector((state) => state.cakeReducer.shape)
  const selectedPortions = useAppSelector((state) => state.cakeReducer.portions)

  const dispatch = useDispatch<AppDispatch>()

  const handleShapeChange = (shape: CakeShape) => {
    dispatch(setPortions(undefined))
    dispatch(setShape(shape))
  }

  const handlePortionsChange = (portions: number) => {
    dispatch(setPortions(portions))
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '5%' }}>
        <Box
          onClick={() => handleShapeChange('round')}
          sx={{
            borderRadius: '50%',
            ...STYLES,
            ...(selectedShape === 'round' ? HIGLIGHTED_STYLES : {}),
          }}
        />
        <Box
          onClick={() => handleShapeChange('square')}
          sx={{
            ...STYLES,
            ...(selectedShape === 'square' ? HIGLIGHTED_STYLES : {}),
          }}
        />
      </Box>
      <Box
        sx={{
          pt: 10,
          display: 'flex',
          gap: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
          }}
        >
          {ROUND_SIZES.map(({ size, portions }) => (
            <PortionButton
              size={size}
              portions={portions}
              selectedPortions={selectedPortions}
              selectedShape={selectedShape}
              shape="round"
              handlePortionsChange={handlePortionsChange}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            gap: 5,
          }}
        >
          {SQUARE_SIZES.map(({ size, portions }) => (
            <PortionButton
              size={size}
              portions={portions}
              selectedPortions={selectedPortions}
              selectedShape={selectedShape}
              shape="square"
              handlePortionsChange={handlePortionsChange}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
