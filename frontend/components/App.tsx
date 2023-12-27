import {Card, CardMedia, Grid, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";

export const App = () => {
    return (
        <>

            <Typography variant="h2" padding='5vh' align='center'>
                Vitajte na Make Your Cake!
            </Typography>

            <Typography variant="h5" display="block">
                Vyskladajte si vlastnú tortu podľa Vašich predstáv, alebo si vyberte hotový dizajn z našej galérie.
                <br/>
                <br/>
                Vyberte si Vaše vysnívané príchute cesta, plnky aj polevy rýchlo a jednoducho.
                <br/>
                Všetky torty ponúkame aj bezlepkové, bezgluténové a vegánske.
            </Typography>

            <Grid item sm={12} md={12}>
                <Card sx={{maxWidth: 500, position: 'center'}}>
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
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <CardMedia
                                key={index}
                                component="img"
                                height="250"
                                image={`/static/images/cakes/${index}/0.png`}
                                alt={`Cake`}
                            />
                        ))}
                    </Carousel>
                </Card>
            </Grid>
        </>


    )
}
