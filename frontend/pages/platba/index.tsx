import * as React from 'react'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'

import {useState} from 'react'
import {
    Box,
    Button,
    Dialog,
    FormGroup,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import {KosikItems} from '../../components/kosik/KosikItems'
import {DatePicker, TimePicker} from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import {KosikFooter} from "../../components/kosik/KosikFooter";


export default function Platba() {
    const [open, setOpen] = useState(false)

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


    if (amount() == 0) return (
        KosikFooter(0)
    )

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h4">
                    Zhrnutie objednávky
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
                        <Typography variant="h5" sx={{padding: '10px'}}>Osobné údaje</Typography>
                    </Box>

                    <Box>
                        <TextField
                            sx={{padding: '0 5px'}}
                            required id="meno"
                            label="Meno"
                            size="small"
                            variant="standard"
                        />

                        <TextField
                            sx={{padding: '0 5px'}}
                            required id="priezvisko"
                            label="Priezvisko"
                            size="small"
                            variant="standard"
                        />
                    </Box>

                    <Box>
                        <TextField
                            sx={{padding: '0 5px'}}
                            required id="email"
                            label="Email"
                            placeholder="email@email.com"
                            size="small"
                            variant="standard"
                        />

                        <TextField
                            sx={{padding: '0 5px'}}
                            id="phone"
                            label="Tel. č."
                            placeholder="+421 912 345 678"
                            size="small"
                            variant="standard"
                        />
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{padding: '10px'}}>Adresa</Typography>
                    </Box>

                    <Box>
                        <FormGroup id="adresa">
                            <TextField
                                required
                                id="ulica"
                                label="Názov a číslo ulice"
                                size="small"
                                variant="standard"
                            />

                            <Box>
                                <TextField
                                    sx={{padding: '0 5px'}}
                                    required
                                    id="mesto"
                                    label="Mesto"
                                    size="small"
                                    variant="standard"
                                />

                                <TextField
                                    sx={{padding: '0 5px'}}
                                    required
                                    type="number"
                                    id="psc"
                                    label="PSČ"
                                    size="small"
                                    variant="standard"
                                />
                            </Box>
                        </FormGroup>
                    </Box>

                    <Box>

                        <Box>
                            <Typography variant="h5" sx={{padding: '10px'}}>Dátum a čas doručenia:</Typography>
                        </Box>

                        <FormGroup
                            id="datumcas"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        sx={{padding: '5px'}}
                                        minDate={dayjs().add(1, 'd')}
                                        defaultValue={dayjs().add(1, 'd')}
                                    />
                                </LocalizationProvider>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                        sx={{padding: '5px'}}
                                        ampm={false}
                                        defaultValue={dayjs('2024-01-01T12:00')}
                                        timeSteps={{minutes: 15}}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </FormGroup>
                    </Box>
                </Box>

                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        height: '100%'
                    }}
                >
                    <Typography variant="h6" sx={{padding: '10px'}}>
                        Počet položiek: {amount()}
                    </Typography>
                    <Typography variant="h6" sx={{padding: '10px'}}>
                        Cena objednávky: {price()}€
                    </Typography>
                </Paper>
            </Grid>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button size="large" variant="outlined" onClick={() => setOpen(true)}>
                    ODOSLAŤ FORMULÁR
                </Button>
            </Box>

            <Dialog open={open}>
                <Box sx={{display: 'flex', justifyContent: 'center', flexDirection:'column'}} >
                    <Typography sx={{p: 3, display: 'flex', justifyContent: 'center'}} variant="h5">Ďakujeme za objednávku!</Typography>
                    <Typography sx={{p: 2}} >O stave objednávky Vás budeme informovať emailom.</Typography>
                </Box>
                <Button href={'/'}>Zavrieť</Button>
            </Dialog>
        </Box>
    )
}
