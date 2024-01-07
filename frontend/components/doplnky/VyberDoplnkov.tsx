import { Box, Grid, Paper, Typography } from '@mui/material'
import Emoji from 'react-emojis'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { addDercoration } from '../../redux/features/decorations-slice'

const doplnky = [
  'man-in-tuxedo',
  'bride-with-veil',
  'hibiscus',
  'mango',
  'cherries',
  'strawberry',
  'chocolate-bar',
  'unicorn',
  'keycap-0',
  'keycap-1',
  'keycap-2',
  'keycap-3',
  'keycap-4',
  'keycap-5',
  'keycap-6',
  'keycap-7',
  'keycap-8',
  'keycap-9',
]

export const VyberDoplnkov = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = (doplnok: string) => {
    dispatch(addDercoration({ image: doplnok }))
  }

  return (
    <Paper sx={{ p: 6 }}>
      <Typography variant="h4" align="center">
        Výber doplnkov
      </Typography>
      <Grid container gap={1} mt={2}>
        {doplnky.map((doplnok, index) => (
          <Grid
            item
            // xs={4}
            // md={2}
            key={doplnok}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => handleClick(doplnok)}
          >
            <Emoji emoji={doplnok} size={50} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
