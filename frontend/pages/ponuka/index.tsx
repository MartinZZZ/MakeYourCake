import * as React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { Torta } from "../../components/torta/Torta";

const category = [
  { title: "Narodeninová" },
  { title: "Svadobná" },
  { title: "Iné" },
];
const restriction = [
  { title: "lactose-free", value: "Bez laktózy" },
  { title: "gluten-free", value: "Bez lepku" },
  { title: "vegie", value: "Vegánska" },
];

const cakes = [
  {
    id: 0,
    name: "Makrónková torta",
    description:
      "Torta s lahodnými makrónkami, čokoládovou polevou a maslovým krémom.",
    price: 40,
    category: "Iné",
    restriction: [],
  },
  {
    id: 1,
    name: "Čokoládová torta",
    description:
      "Čokoládová torta s bohatou chuťou, dozdobená kúskami čokolády a jedlým zlatom.",
    price: 35,
    category: "Narodeninová",
    restriction: ["gluten-free"],
  },
  {
    id: 2,
    name: "Narodeninová torta",
    description:
      "Minimalistická narodeninová torta s farebnou posýpkou.",
    price: 25,
    category: "Narodeninová",
    restriction: ["lactose-free", "vegie"],
  },
  {
    id: 3,
    name: "Torta Jednorožec",
    description:
      "Torta Jednorožec zdobená farebným krémom a dominantným zlatým rohom.",
    price: 55,
    category: "Iné",
    restriction: ["lactose-free", "gluten-free", "vegie"],
  },
  {
    id: 4,
    name: "Dinosaurová torta",
    description:
      "Torta s jedlými figúrkami dinosaurov, ktorá sa určite zapáči každému (nielen) chlapcovi.",
    price: 55,
    category: "Narodeninová",
    restriction: ["lactose-free", "gluten-free", "vegie"],
  },
  {
    id: 5,
    name: "Lotus torta",
    description: "Torta s príchuťou Lotus keksíkov.",
    price: 35,
    category: "Iné",
    restriction: [],
  },
  {
    id: 6,
    name: "Red Velvet torta",
    description:
      "Red Velvet torta zdobená jemnými kúskami sušienok, čokolády a jedlého zlata.",
    price: 40,
    category: "Iné",
    restriction: ["vegie", "lactose-free"],
  },
  {
    id: 7,
    name: "Oreo torta",
    description: "Torta s príchuťou Oreo keksíkov.",
    price: 35,
    category: "Iné",
    restriction: ["vegie"],
  },
  {
    id: 8,
    name: "Svadobná",
    description:
      "Svadobná torta s jednoduchým dizajnom. Zlatý detail a biele kvety na torte sa budú určite hodiť aj k Vašej svadobnej výzdobe.",
    price: 90,
    category: "Svadobná",
    restriction: ["vegie"],
  },
  {
    id: 9,
    name: "Svadobná",
    description: "Svadobná torta s ružovými kvetmi dozdobená jedlým zlatom.",
    price: 90,
    category: "Svadobná",
    restriction: ["lactose-free"],
  },
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
    var updatedCakes =
      selectedCategories.length === 0
        ? cakes
        : cakes.filter((cake) =>
            selectedCategories
              .map((category) => category.title)
              .includes(cake.category)
          );

    updatedCakes =
      selectedRestrictions.length === 0
        ? updatedCakes
        : updatedCakes.filter((cake) =>
            selectedRestrictions.some((restriction) =>
              cake.restriction.includes(restriction.title)
            )
          );

    setFilteredCakes(updatedCakes);
  }, [selectedCategories, selectedRestrictions]);

  return (
    <Box marginBottom={3}>
      <Grid
        container
        justifyContent="center"
        borderBottom={1}
        sx={{ backgroundColor: "lightgoldenrodyellow" }}
      >
        <Box mx={1}>
          <Typography fontSize="1.1rem" display="inline-block">
            Kategória:{" "}
          </Typography>
          <Stack
            spacing={3}
            sx={{ width: 380 }}
            my={2}
            mx={1}
            display="inline-block"
          >
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
                    label="filtruj kategóriu torty"
                    placeholder="kategória torty"
                  />
                </Typography>
              )}
            />
          </Stack>
        </Box>
        <Box mx={1}>
          <Typography fontSize="1.1rem" display="inline-block">
            Obmedzenia:{" "}
          </Typography>
          <Stack
            spacing={3}
            sx={{ width: 380 }}
            my={2}
            mx={1}
            display="inline-block"
          >
            <Autocomplete
              multiple
              id="tags-outlined"
              options={restriction}
              getOptionLabel={(option) => option.value}
              filterSelectedOptions
              onChange={handleRestrictionChange}
              renderInput={(params) => (
                <Typography variant="h4">
                  <TextField
                    {...params}
                    label="filtruj obmedzenia torty"
                    placeholder="obmedzenia"
                  />
                </Typography>
              )}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredCakes.map((cake) => (
          <Grid marginTop={3} item xs={4} sm={4} md={4} key={cake.id}>
            <Torta
              id={cake.id}
              name={cake.name}
              description={cake.description}
              price={cake.price}
              restrictions={cake.restriction}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
