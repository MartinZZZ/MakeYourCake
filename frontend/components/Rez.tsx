import { Box } from '@mui/material'
import { useAppSelector } from '../redux/store'
import { Dough, Filling } from '../types/cake'
import { cakeSlice, setFilling } from '../redux/features/cake-slice'

const fillingColor: Record<Filling | "none", string> = {
  chocolate: "#9C4E16",
  strawberry: "#FF4D4D",
  vanilla: "#fff5bf",
  none: "#D9D9D9",
};

const doughColor: Record<Dough | "none", string> = {
  chocolate: "#703810",
  nuts: "#b1a567",
  vanilla: "#f5e9a3",
  none: "#C3C3C0",
};

type Props = {
  filling?: Filling
  dough?: Dough
}

export const Rez = ({ filling, dough }: Props) => {
  const check = filling !== undefined && dough !== undefined

  const selectedFilling = check
    ? (filling as Filling)
    : useAppSelector((state) => state.cakeReducer.filling)
  const selectedDough = check
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
