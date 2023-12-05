import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../redux/store'
import { Section } from '../Section'
import { Select } from '../Select'
import { Box, Paper, SelectChangeEvent } from '@mui/material'
import { setCream, setFrosting } from '../../redux/features/cake-slice'
import { Cream, Frosting, Option } from '../../types/cake'
import { Torta } from '../Torta'

const creamOptions: Option[] = [
  { value: 'white', label: 'Biely' },
  { value: 'yellow', label: 'Žltý' },
  { value: 'brown', label: 'Hnedý' },
  { value: 'red', label: 'Červený' },
]

const frostingOptions: Option[] = [
  { value: 'chocolate', label: 'Čokoládová' },
  { value: 'vanilla', label: 'Vanilková' },
]

export const Poleva = () => {
  const selectedCream = useAppSelector((state) => state.cakeReducer.cream)
  const selectedFrosting = useAppSelector((state) => state.cakeReducer.frosting)
  const dispatch = useDispatch<AppDispatch>()

  const handleChangeCream = (event: SelectChangeEvent) => {
    dispatch(setCream(event.target.value as Cream))
  }

  const handleChangeFrosting = (event: SelectChangeEvent) => {
    dispatch(setFrosting(event.target.value as Frosting))
  }

  const leftElement = (
    <Paper
      sx={{
        px: '50px',
        py: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Torta />
    </Paper>
  )
  const rightElement = (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Select
          handleChange={handleChangeFrosting}
          label="Poleva"
          selected={selectedFrosting}
          options={frostingOptions}
        />
        <Select
          handleChange={handleChangeCream}
          label="Krém"
          selected={selectedCream}
          options={creamOptions}
        />
      </Box>
    </Paper>
  )
  return (
    <Section leftSideElement={leftElement} rightSideElement={rightElement} />
  )
}
