import * as React from 'react';
import { Autocomplete, Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, TextField, Typography, Stack } from '@mui/material'
import { Torta } from "../../components/torta/Torta"

const category = [
  { title: 'Narodeninová'},
  { title: 'Svadobná'},
  { title: 'Iné'}
];
const restriction  = [
  { title: 'Bez laktózy'},
  { title: 'Bez lepku'},
  { title: 'Vegánska'}
];

const cakes = [
  { id: 0, name: 'Makrónková torta', description: 'Torta s lahodnými makrónkami, čokoládovou polevou a maslovým krémom.', price: 40, category:'Iné',  restriction:[]  },
  { id: 1, name: 'Čokoládová torta', description: 'Čokoládová torta s bohatou chuťou, dozdobená kúskami čokolády a jedlým zlatom.', price: 35, category:'Narodeninová',  restriction:['Bez lepku'] },
  { id: 2, name: 'Narodeninová torta', description: 'Minimalistická narodeninová torta pre dvoch s farebnou posýpkou.', price: 25, category:'Narodeninová',  restriction:['Bez laktózy', 'Vegánska']  },
  { id: 3, name: 'Torta Jednorožec', description: 'Torta Jednorožec zdobená farebným krémom a dominantným zlatým rohom.', price: 55, category:'Iné',  restriction:['Bez laktózy', 'Bez lepku', 'Vegánska']  },
  { id: 4, name: 'Dinosaurusová torta', description: 'Torta Jednorožec zdobená farebným krémom a dominantným zlatým rohom.', price: 55, category:'Iné',  restriction:['Bez laktózy', 'Bez lepku', 'Vegánska'] },
  { id: 5, name: 'Svadobná', description: '...', price: 0, category:'Svadobná', restriction:[] },
  { id: 6, name: 'Svadobná', description: '...', price: 0, category:'Svadobná', restriction:['Vegánska']  },
];

export default function Ponuka() {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedRestrictions, setSelectedRestrictions] = React.useState([]);
  const [filteredCakes, setFilteredCakes] = React.useState(cakes);

  const handleCategoryChange = (event, newCategories) => {
    setSelectedCategories(newCategories);
  };
  const handleRestrictionChange = (event, newRestrictions) => {
    setSelectedRestrictions(newRestrictions);
  };

  React.useEffect(() => {
    var updatedCakes = selectedCategories.length === 0
      ? cakes
      : cakes.filter(cake => selectedCategories.map(category => category.title).includes(cake.category))
      
    updatedCakes = selectedRestrictions.length === 0
      ? updatedCakes
      : updatedCakes.filter(cake => selectedRestrictions.some(restriction => cake.restriction.includes(restriction.title)))

    setFilteredCakes(updatedCakes);
  }, [selectedCategories, selectedRestrictions]);

  return (
    <Box marginBottom={3} sx={{backgroundColor: 'lightgoldenrodyellow'}}>
      <Grid container justifyContent="center" borderBottom={1}>
        <Box mx={1}>
          <Typography display="inline-block">Kategória: </Typography>
          <Stack spacing={3} sx={{ width: 380 }} my={2} mx={1} display="inline-block">
            <Autocomplete
              multiple
              id="tags-outlined"
              options={category}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              onChange={handleCategoryChange}
              renderInput={(params) => (
                <Typography variant="h4">
                  <TextField
                    {...params}
                    label="filtuj kategóriu torty"
                    placeholder="kategória torty"
                  />
                </Typography> 
              )}
            />
          </Stack>
        </Box>
        <Box mx={1}>
          <Typography display="inline-block">Obmedzenia: </Typography>
          <Stack spacing={3} sx={{ width: 380 }} my={2} mx={1} display="inline-block">
            <Autocomplete
              multiple
              id="tags-outlined"
              options={restriction}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              onChange={handleRestrictionChange}
              renderInput={(params) => (
                <Typography variant="h4">
                  <TextField
                    {...params}
                    label="filtuj obmedzenia torty"
                    placeholder="obmedzenia"
                  />
                </Typography> 
              )}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {filteredCakes.map((cake) => (
        <Grid marginTop={3} item xs={4} sm={4} md={4} key={cake.id}>
          <Torta id={cake.id} name={cake.name} description={cake.description} price={cake.price} restrictions={cake.restriction}/>
        </Grid>
      ))}
      </Grid>
    </Box>
  )
}
