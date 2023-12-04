import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Box, Button, Card, CardMedia, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ShoppingCartOutlined } from '@mui/icons-material';

const CakeDetail = () => {
    const router = useRouter();
    const { id, name, description, price: priceFromUrl } = router.query;

    const priceFromString = Array.isArray(priceFromUrl) ? priceFromUrl[0] : priceFromUrl;
    const initialPrice = parseFloat(priceFromString) || 0;
    const [additionalPrice, setAdditionalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(initialPrice);

    // const selectedId = useAppSelector((state) => state.cakeInfoReducer.id)
    // const selectedName = useAppSelector((state) => state.cakeInfoReducer.name)
    // const selectedDescription = useAppSelector((state) => state.cakeInfoReducer.description)
    // const selectedPrice = useAppSelector((state) => state.cakeInfoReducer.price)  
    // const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        setTotalPrice(initialPrice + additionalPrice);
    }, [additionalPrice, initialPrice]);

    const [size, setSize] = useState('12');
    const [flavour, setFlavour] = useState('');
    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const newSize = (event.target as HTMLInputElement).value;
        setSize((prevSize) => {
            setAdditionalPrice((prevAdditionalPrice) => {
            if (newSize === '17') {
                return 20;
            } else {
                return 0;
            }
            });
            return newSize;
        });
    };
    const handleFlavourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const newFlavour = (event.target as HTMLInputElement).value;
        setFlavour(newFlavour);
    };

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
                                indicatorContainerProps={{style: {position: 'absolute', bottom: 16, textAlign: 'center'}}}
                                navButtonsAlwaysVisible={true}
                                navButtonsProps={{style: {backgroundColor: 'transparent', color: 'black', borderRadius: 0}}}
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
                        <Typography variant="h5" my={1}>{description}</Typography>
                        <Box>
                            <FormControl>
                                <Typography variant="h6" my={1}>Veľkosť</Typography>
                                <RadioGroup
                                    name="controlled-radio-buttons-group"
                                    value={size}
                                    onChange={handleSizeChange}
                                >
                                    <FormControlLabel value="12" control={<Radio />} label="12cm (8-12 porcií)" />
                                    <FormControlLabel value="17" control={<Radio />} label="17cm (12-18 porcií) +20€" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <Typography variant="h6" my={1}>Príchuť</Typography>
                                <RadioGroup
                                    name="controlled-radio-buttons-group"
                                    value={flavour}
                                    onChange={handleFlavourChange}
                                >
                                    <FormControlLabel value="choco" control={<Radio />} label="čokoládová" />
                                    <FormControlLabel value="vanilla" control={<Radio />} label="vanilková" />
                                    <FormControlLabel value="strawberry" control={<Radio />} label="jahodová" />
                                    <FormControlLabel value="coffee" control={<Radio />} label="kávová" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            m={2}
                        >                        
                            <Typography variant="h6" my={2}>Cena: {totalPrice}€</Typography>
                            <Button
                                variant="contained" 
                                endIcon={<ShoppingCartOutlined/>}
                                onClick={() => {
                                    console.log('klikol si na kupit')
                                    console.log('id: ', id, 'name: ', name, 'description: ', description, 'size:', size, 'flavour:', flavour, 'price: ', totalPrice)
                                    // dispatch(setCakeInfo({id: selectedId, name: selectedName, description: selectedDescription, price: selectedPrice}))
                                    // dispatch(setCakeInfo({id: id, name: name, description: description, price: totalPrice}))
                                    // router.push({
                                    //     pathname: '/kosik',
                                    //     query: {id: id, name: name, description: description, price: totalPrice}
                                    // })
                                }}
                            > Kúpiť
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CakeDetail;
