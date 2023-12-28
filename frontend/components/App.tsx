import {Box, Card, CardMedia, Paper, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";

export const App = () => {
    return (
        <>
                <Typography variant="h3" padding='2vh' align='center'>
                    Vitajte na Make Your Cake!
                </Typography>

                <Typography variant="h6" display="block">
                    Vyskladajte si vlastnú tortu podľa Vašich predstáv, alebo si vyberte hotový dizajn z našej galérie.
                    <br/>
                    Vyberte si Vaše vysnívané príchute cesta, plnky aj polevy rýchlo a jednoducho.
                    <br/>
                    Všetky torty ponúkame aj bezlepkové, bezgluténové a vegánske.
                </Typography>

            <Paper sx={{display: 'flex', flexDirection: 'row',  width: '100%', justifyContent: 'center'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',

                }}>
                <Card sx={{maxWidth: 500 }}>
                    <Carousel
                        autoPlay={true}
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
                        {[1, 2, 3, 4, 5].map((index) => (
                            <CardMedia
                                key={index}
                                component="img"
                                height="400"
                                image={`/static/images/cakes/${index}/0.png`}
                                alt={`Cake`}
                            />
                        ))}
                    </Carousel>
                </Card>
                </Box>
            </Paper>
        </>


    )
}
