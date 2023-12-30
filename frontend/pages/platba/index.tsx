import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { KosikItems } from '../../components/kosik/KosikItems'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Label, TextFields } from '@mui/icons-material'

function StyledInput(props: { placeholder: string }) {
  return null
}

export default function Platba() {
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    // todo?
    console.log('value is:', event.target.value)
    event.target.helperText = 'error'
  }

  const price = () => {
    let sum = 0
    Object.entries(KosikItems.ItemsZPonuky).map(([key, value]) => {
      sum += value.price * value.amount
    })
    Object.entries(KosikItems.ItemsVlastnyDizajn).map(([key, value]) => {
      sum += value.price * value.amount
    })
    return sum
  }

  const amount = () => {
    let sum = 0
    Object.entries(KosikItems.ItemsZPonuky).map(([key, value]) => {
      sum += value.amount
    })
    Object.entries(KosikItems.ItemsVlastnyDizajn).map(([key, value]) => {
      sum += value.amount
    })
    return sum
  }

  // todo
  // if (amount() == 0) return (
  //     <Box>nedostupna stranka!</Box>
  // )

  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h2" component="h2">
          Zhrnutie nákupu
        </Typography>
      </Box>

      <Grid
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Box>
          <Box>
            <Typography variant="h3">Osobné údaje</Typography>
          </Box>

          <Box>
            <TextField required id="meno" label="Meno" size="small" />

            <TextField
              required
              id="priezvisko"
              label="Priezvisko"
              size="small"
            />
          </Box>

          <Box>
            <TextField
              required
              id="email"
              label="Email"
              placeholder="email@email.com"
              size="small"
            />

            <TextField
              required
              id="phone"
              label="Tel.č"
              placeholder="+421 912 345 678"
              onChange={handleChange}
              size="small"
            />
          </Box>

          <Box>
            <Typography variant="h3">Doručenie</Typography>
          </Box>

          <Box>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Typ platby
              </FormLabel>
              <RadioGroup
                row={true}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="v1"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="v1"
                  control={<Radio />}
                  label="Kuriérom"
                />
                <FormControlLabel
                  value="v2"
                  control={<Radio />}
                  label="Na dobierku"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>
            <FormLabel id="adresa">Adresa</FormLabel>

            <FormGroup id="adresa">
              <TextField
                required
                id="mesto"
                label="Mesto"
                size="small"
                variant="standard"
              />

              <TextField
                required
                id="ulica"
                label="Ulica"
                size="small"
                variant="standard"
              />

              <TextField
                required
                type="number"
                id="cislo"
                label="Číslo"
                size="small"
                variant="standard"
              />

              <TextField
                required
                type="number"
                id="psc"
                label="PSČ"
                size="small"
                variant="standard"
              />
            </FormGroup>
          </Box>

          <Box>
            <FormLabel id="datumcas">Dátum a čas doručenia</FormLabel>

            <FormGroup
              id="datumcas"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: '45%' }}
                  minDate={dayjs().add(1, 'd')}
                  defaultValue={dayjs().add(1, 'd')}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  sx={{ width: '45%' }}
                  ampm={false}
                  defaultValue={dayjs('2024-01-01T12:00')}
                  timeSteps={{ minutes: 15 }}
                />
              </LocalizationProvider>
            </FormGroup>
          </Box>
        </Box>

        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
          {/*zhrnutie:*/}
          <Typography variant="h6" sx={{ padding: '10px' }}>
            Počet položiek: {amount()}
          </Typography>
          <Typography variant="h6" sx={{ padding: '10px' }}>
            Cena objednávky: {price()}€
          </Typography>
        </Paper>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          ODOSLAŤ FORMULÁR
        </Button>
      </Box>

      <Dialog open={open}>
        <Typography sx={{ p: 2 }}>Ďakujeme za objednávku!</Typography>
        <Button href={'/'}>Zavrieť</Button>
      </Dialog>
    </Box>
  )
}
