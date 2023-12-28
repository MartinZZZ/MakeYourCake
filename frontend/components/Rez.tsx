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

export const Rez = (filling :string = null, dough:string = null) => {
  let selectedFilling = useAppSelector((state) => state.cakeReducer.filling)
  let selectedDough = useAppSelector((state) => state.cakeReducer.dough)

    if (filling.length>=1 && dough.length>=1 ) {
        selectedFilling = filling
        selectedDough = dough
    }

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
