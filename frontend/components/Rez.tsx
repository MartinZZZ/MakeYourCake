import { Box } from '@mui/material'
import { useAppSelector } from '../redux/store'
import { Dough, Filling } from '../types/cake'
import { cakeSlice, setFilling } from '../redux/features/cake-slice'

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

type Props = {
  filling?: Filling
  dough?: Dough
}

export const Rez = ({ filling, dough }: Props) => {
  const selectedFilling =
    filling.length >= 1 && dough.length >= 1
      ? (filling as Filling)
      : useAppSelector((state) => state.cakeReducer.filling)
  const selectedDough =
    filling.length >= 1 && dough.length >= 1
      ? (dough as Dough)
      : useAppSelector((state) => state.cakeReducer.dough)

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
