import {Box, Card, CardMedia, Paper, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";
import {Favorite} from '@mui/icons-material'
import styled from 'styled-components';
import Link from "next/link";

const Container = styled.div`
  display: flex;
`;

export const App = () => {
    return (
        <>
            <Typography variant="h3"  padding='40px' align='center' style={{backgroundColor:'lightgoldenrodyellow', color:'black'}}>
                Vitajte na Make Your Cake!
            </Typography>

            <Container style={{backgroundColor:'lightgoldenrodyellow'}}>
                <Typography display="block" align='center' maxWidth={'50%'} padding='20px 50px 150px 50px' style={{backgroundColor:'lightgoldenrodyellow', fontSize:'20px'}}>
                    <em style={{fontSize:'20px', color:'black'}}>{<Favorite/>}  Objednajte si svoju vysnívanú tortu online.</em ><br/><br/>
                    <Link href={`/objednat-vlastny-dizajn`} passHref style={{color: 'mediumvioletred'}}>Vyskladajte si vlastnú tortu</Link> podľa Vašich predstáv, od príchute a plnky až po sladkú polevu s dekoráciami.             
                    Prejdite všetkými krokmi a vytvorte nádhernú tortu na mieru rýchlo a jednoducho!
                    <br/><br/>
                    <em>Nemáte chuť tvoriť?</em> Žiadny problém, v našej ponuke sú pripravené <Link href={`/ponuka`} passHref style={{color: 'mediumvioletred'}}>hotové torty</Link> s objednaním na pár klikov.
                    <br/><br/>
                    Všetky vlastné dizajny tort ponúkame aj <u>bezlepkové, bezlaktózové a vegánske</u>.
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',

                }}>
                    <Card sx={{maxWidth: 400}}>
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
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
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
            </Container>
        </>
    )
}