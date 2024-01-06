
import { RootState } from '../../redux/store'
import React from 'react'
import router from 'next/router'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'
import {
    Box,
    Button,
    Card,
    CardMedia,
    Dialog,
    DialogActions,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { ShoppingCartOutlined, ShoppingCart } from '@mui/icons-material'
import { setFinalPrice, setSize, setFlavour } from '../../redux/features/cakeMenuSlice'; 
import {AddToKosik} from "../../components/kosik/UpdateKosik";


const Restrictions = ({restrictions}) => {
    if (restrictions.length > 0) {
        //TODO radio buttons
        const restrictionOption = restrictions.map((r) => (
                <Typography>
                    {r}
                {/* <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={restrictions}
                  onChange={() => {}}
                >
                  <FormControlLabel
                    value={r}
                    control={<Radio />}
                    label={r}
                  /> 
                  </RadioGroup>*/}
                </Typography>
        ))
        return (
            <Typography variant="h6" my={1}>
                Obmedzenia:
                {restrictionOption}
            </Typography>
        )
    }
  } 

const CakeDetail = () => {
    useEffect(() => {
        dispatch(setFinalPrice(price))
        dispatch(setSize(12))
        dispatch(setFlavour(''))
    }, [])

  const dispatch = useDispatch();

  const { id, name, description, price, finalPrice, size, flavour, restrictions} = useSelector((state: RootState) => state.cakeMenu)
  const [flavourError, setFlavourError] = useState(false)
  const [open, setOpen] = React.useState(false)

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = (event.target as HTMLInputElement).value
    dispatch(setSize(Number(newSize)))
    if (newSize === '17') {
        dispatch(setFinalPrice(price+20))
    } else if (newSize === '25') {
        dispatch(setFinalPrice(price+50))
    } else {
        dispatch(setFinalPrice(price))
    }
  }

  const handleFlavourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFlavour = (event.target as HTMLInputElement).value
    dispatch(setFlavour(newFlavour))
    setFlavourError(false)    
  }

  const handleClickOpen = () => {
    if (!flavour) {
      setFlavourError(true)
      return
    }
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
      <Box my={5}>
          <Typography variant="h4">{name}</Typography>

      <Box mt={3}>
        <Grid container spacing={1}>
          <Grid item sm={12} md={6}>
            <Card sx={{ maxWidth: 500 }}>
              <Carousel
                autoPlay={false}
                indicators={true}
                indicatorContainerProps={{
                  style: {
                    position: 'absolute',
                    bottom: 16,
                    textAlign: 'center',
                  },
                }}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderRadius: 0,
                  },
                }}
              >
                {[0, 1].map((index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    height="500"
                    image={`/static/images/cakes/${id}/${index}.png`}
                    alt={`Cake ${name} image ${index + 1}`}
                  />
                ))}
              </Carousel>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="h5" my={1}>
              {description}
            </Typography>
            <Box>
              <FormControl>
                <Typography variant="h6" my={1}>
                  Veľkosť
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={size}
                  onChange={handleSizeChange}
                >
                  <FormControlLabel
                    value="12"
                    control={<Radio />}
                    label="12cm (8-12 porcií)"
                  />
                  <FormControlLabel
                    value="17"
                    control={<Radio />}
                    label={
                        <Typography>
                        17cm (12-18 porcií)  <i>+20€</i>
                        </Typography>
                    }
                    />
                  <FormControlLabel
                    value="25"
                    control={<Radio />}
                    label={
                        <Typography>
                        25cm (25-30 porcií)  <i>+50€</i>
                        </Typography>
                    }
                    />
                </RadioGroup>
                </Typography>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <Typography variant="h6" my={1}>
                  Príchuť
                </Typography>
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={flavour}
                  onChange={handleFlavourChange}
                >
                  <FormControlLabel
                    value="chocolate"
                    control={<Radio />}
                    label="čokoládová"
                  />
                  <FormControlLabel
                    value="vanilla"
                    control={<Radio />}
                    label="vanilková"
                  />
                  <FormControlLabel
                    value="strawberry"
                    control={<Radio />}
                    label="jahodová"
                  />
                  <FormControlLabel
                    value="coffee"
                    control={<Radio />}
                    label="kávová"
                  />
                </RadioGroup>
                {flavourError && (
                    <Typography variant="body2" color="error">
                        Vyberte príchuť pred pridaním do košíka.
                    </Typography>
                )}
              </FormControl>
            </Box>
            <Restrictions restrictions={restrictions}/>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              m={2}
            >
              <Typography variant="h6" my={2}>
                Cena: {finalPrice}€
              </Typography>
              <Button
                variant="contained"
                endIcon={<ShoppingCartOutlined />}
                onClick={handleClickOpen}
              >
                {' '}
                Kúpiť
              </Button>
              <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
              >
                  <DialogTitle id="alert-dialog-title">
                      <Typography variant="h6" my={2}>
                      Zvolená pololožka bola pridaná do košíka.
                      </Typography>
                  </DialogTitle>
                  <DialogActions style={{ justifyContent: 'space-between' }}>
                      <Button onClick={handleClose}>Pokračovať v nákupe</Button>
                      <Button
                        onClick={() => {
                            handleClose();
                            router.push('/kosik');
                        }}
                        endIcon={<ShoppingCart />}
                        autoFocus
                      >
                      Do košíka
                      </Button>
                  </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CakeDetail
