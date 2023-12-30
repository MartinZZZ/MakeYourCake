import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

import {useState} from "react";
import {
    Box,
    Button,
    Dialog,
    FormControl,
    FormControlLabel,
    FormLabel, Paper,
    Radio,
    RadioGroup, TextField,
    Typography
} from "@mui/material";
import {KosikItems} from "../../components/kosik/KosikItems";
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";


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

    // todo
    // if (amount() == 0) return (
    //     <Box>nedostupna stranka!</Box>
    // )

    return (
        <Box sx={{
            width: '100%',
            typography: 'body1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/*<Box>*/}
            {/*    <Typography variant="h2" component="h2">*/}
            {/*        platba*/}
            {/*    </Typography>*/}
            {/*</Box>*/}

            <Paper>
                zhrnutie:
                počet položiek: {amount()}
                cena celkovo: {price()}

            </Paper>


            <Box>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Typ platby</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="v1"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="v1" control={<Radio/>} label="Kuriérom"/>
                        <FormControlLabel value="v2" control={<Radio/>} label="Na dobierku"/>
                        <FormControlLabel value="v3" control={<Radio/>} label="?????"/>
                    </RadioGroup>
                </FormControl>

            </Box>


            <Box>
                Osobné údaje

                <TextField
                    required
                    id="outlined-required"
                    label="Meno"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Priezvisko"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="email@email.com"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Tel.č"
                    placeholder="+421 912 345 678"
                />


            </Box>

            <Box>
                Adresa

                <TextField
                    required
                    id="outlined-required"
                    label="Mesto"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Ulica"
                />

                <TextField
                    required
                    type="number"
                    id="outlined-required"
                    label="Číslo"
                />

                <TextField
                    required
                    type="number"
                    id="outlined-required"
                    label="PSČ"
                />


            </Box>

            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Dátum doručenia"
                                minDate={dayjs().add(1, 'd')} defaultValue={dayjs().add(1, 'd')}
                    />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="Čas doručenia"
                                ampm={false} defaultValue={dayjs('2024-01-01T12:00')} timeSteps={{minutes: 15}}
                    />
                </LocalizationProvider>

            </Box>

            <Box>

            </Box>
            <Box>
                <Button
                    onClick={() => setOpen(true)}>
                    ODOSLAŤ FORMULÁR
                </Button>
            </Box>


            <Dialog open={open}>
                <Typography sx={{p: 2}}>
                    Ďakujeme za objednávku!
                </Typography>
                <Button href={'/'}>Zavrieť</Button>
            </Dialog>

        </Box>

    )

}
