import { Box } from '@mui/material'
import { useAppSelector } from '../redux/store'
import { Dough, Filling } from '../types/cake'

const fillingColor: Record<Filling | 'none', string> = {
  chocolate: '#422503',
  strawberry: 'red',
  vanilla: 'yellow',
  none: '#D9D9D9',
}

const doughColor: Record<Dough | 'none', string> = {
  chocolate: 'brown',
  nuts: 'green',
  vanilla: 'yellow',
  none: '#C3C3C0',
}

export const Rez = () => {
  const selectedFilling = useAppSelector((state) => state.cakeReducer.filling)
  const selectedDough = useAppSelector((state) => state.cakeReducer.dough)
  return (
    <>
      <Box
        sx={{
          backgroundColor: doughColor[selectedDough ?? 'none'],
          height: '6vh',
        }}
      />
      <Box
        sx={{
          backgroundColor: fillingColor[selectedFilling ?? 'none'],
          height: '3vh',
        }}
      />
      <Box
        sx={{
          backgroundColor: doughColor[selectedDough ?? 'none'],
          height: '6vh',
        }}
      />
      <Box
        sx={{
          backgroundColor: fillingColor[selectedFilling ?? 'none'],
          height: '3vh',
        }}
      />
      <Box
        sx={{
          backgroundColor: doughColor[selectedDough ?? 'none'],
          height: '6vh',
        }}
      />
      <Box
        sx={{
          backgroundColor: fillingColor[selectedFilling ?? 'none'],
          height: '3vh',
        }}
      />
      <Box
        sx={{
          backgroundColor: doughColor[selectedDough ?? 'none'],
          height: '6vh',
        }}
      />
    </>
  )
}
