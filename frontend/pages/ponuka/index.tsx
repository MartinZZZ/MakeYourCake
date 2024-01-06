import * as React from 'react';
import { Autocomplete, Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, TextField, Typography, Stack } from '@mui/material'
import { Torta } from "../../components/torta/Torta"

// filter
// const category = [
//   { title: 'Narodeninová'},
//   { title: 'Svadobná'}
// ];

const cakes = [
    { id: 0, name: 'Makrónková torta', description: 'Torta s lahodnými makrónkami, čokoládovou polevou a maslovým krémom.', price: 40 },
    { id: 1, name: 'Čokoládová torta', description: 'Čokoládová torta s bohatou chuťou, dozdobená kúskami čokolády a jedlým zlatom.', price: 35},
    { id: 2, name: 'Narodeninová torta', description: 'Minimalistická narodeninová torta pre dvoch s farebnou posýpkou.', price: 25 },
    { id: 3, name: 'Torta Jednorožec', description: 'Torta Jednorožec zdobená farebným krémom a dominantným zlatým rohom.', price: 55 },
];

export default function Ponuka() {
    return (
        <Box my={5} sx={{backgroundColor: 'lightgoldenrodyellow', margin: '25px'}}>
            {/* <Stack spacing={3} sx={{ width: 450 }} my={3} display="flex"> // TODO filter
        <Autocomplete
          multiple
          id="tags-outlined"
          options={category}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="filtuj kategóriu torty"
              placeholder="kategória torty"
            />
          )}
        />fdx
      </Stack> */}
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {cakes.map((cake) => (
                    <Grid item xs={4} sm={4} md={4} key={cake.id}>
                        <Torta id={cake.id} name={cake.name} description={cake.description} price={cake.price}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
