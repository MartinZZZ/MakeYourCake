import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  SelectChangeEvent,
} from '@mui/material'
import { AppDispatch, useAppSelector } from '../../redux/store'
import { Dough, Filling } from '../../types/cake'
import { setDought, setFilling } from '../../redux/features/cake-slice'
import { useDispatch } from 'react-redux'
import { Section } from '../Section'
import { Select } from '../Select'
import { Limitations } from './Limitations'
import { Rez } from '../Rez'

export const Prichut = () => {
  const selectedFilling = useAppSelector((state) => state.cakeReducer.filling)
  const selectedDough = useAppSelector((state) => state.cakeReducer.dough)
  const dispatch = useDispatch<AppDispatch>()

  const handleChangeFiling = (event: SelectChangeEvent) => {
    dispatch(setFilling(event.target.value as Filling))
  }

  const handleChangeDough = (event: SelectChangeEvent) => {
    dispatch(setDought(event.target.value as Dough))
  }

  return (
    <Section
      leftSideElement={
        <Paper
          sx={{
            px: '50px',
            py: '100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Rez />
        </Paper>
      }
      rightSideElement={
        <Box
          sx={{
            width: '100%',
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Select
                label="Náplň"
                selected={selectedFilling}
                handleChange={handleChangeFiling}
                options={[
                  { label: 'Čokoládová', value: 'chocolate' },
                  { label: 'Jahodová', value: 'strawberry' },
                  { label: 'Vanilková', value: 'vanilla' },
                ]}
              />
              <Select
                label="Cesto"
                selected={selectedDough}
                handleChange={handleChangeDough}
                options={[
                  { label: 'Čokoládové', value: 'chocolate' },
                  { label: 'Orechové', value: 'nuts' },
                  { label: 'Vanilkové', value: 'vanilla' },
                ]}
              />
            </Box>
          </Paper>
          <Limitations />
        </Box>
      }
    />
  )
}
