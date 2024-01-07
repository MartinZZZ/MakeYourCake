import { Box } from '@mui/material'
import { Cream, Frosting } from '../types/cake'
import { useAppSelector } from '../redux/store'

const creamColor: Record<Cream | "none", string> = {
  white: "#F2F2F2",
  yellow: "#ffff99",
  brown: "#9C4E16",
  red: "#FF3333",
  pink: "#FF99AA",
  blue: "#aed8ff",
  none: "#D9D9D9",
};

const frostingColor: Record<Frosting | "none", string> = {
  chocolate: "#6d3d0f",
  vanilla: "#FFFF80",
  strawberry: "#FF6680",
  blueberry: "#6666FF",
  none: "#C3C3C0",
};

type Props = {
  cream?: Cream
  frosting?: Frosting
}

export const Torta = ({ cream, frosting }: Props) => {
  const check = cream !== undefined && frosting !== undefined

  const selectedCream = check
    ? (cream as Cream)
    : useAppSelector((state) => state.cakeReducer.cream)
  const selectedFrosting = check
    ? (frosting as Frosting)
    : useAppSelector((state) => state.cakeReducer.frosting)

  return (
    <>
      <Box
        sx={{
          backgroundColor: frostingColor[selectedFrosting ?? 'none'],
          width: '100%',
          height: '10vh',
          borderRadius: '50%',
          mb: '-5vh',
          zIndex: 3,
          border: 'solid 1px black',
        }}
      />
      <Box
        sx={{
          backgroundColor: creamColor[selectedCream ?? 'none'],
          width: '100%',
          height: '15vh',
          border: 'solid 1px black',
          borderBottomColor: 'transparent',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          backgroundColor: creamColor[selectedCream ?? 'none'],
          width: '100%',
          height: '10vh',
          borderRadius: '50%',
          mt: '-5vh',
          border: 'solid 1px black',
        }}
      />
    </>
  )
}
