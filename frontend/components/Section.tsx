import { Box } from '@mui/material'

type Props = {
  leftSideElement: React.ReactNode
  rightSideElement: React.ReactNode
}

export const Section = ({ leftSideElement, rightSideElement }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: '100%',
        }}
      >
        {leftSideElement}
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100%',
        }}
      >
        {rightSideElement}
      </Box>
    </Box>
  )
}
