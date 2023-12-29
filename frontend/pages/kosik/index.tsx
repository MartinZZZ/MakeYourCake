import {BottomNavigation, Box, Button, Paper, Typography} from '@mui/material'

import {getTranslation} from "../../helpers/getTranslation";
import React, {useState} from "react";

import {KosikItems} from "../../components/kosik/KosikItems";
import {Section} from "../../components/Section";
import {KosikItem} from "../../components/kosik/KosikItem";


export default function Kosik() {

    const [price, setPrice] = useState(getPrice)

    function updatePrice(){
        setPrice(getPrice)
    }

    function getPrice() {
        let sum = 0

        Object.entries(KosikItems.ItemsZPonuky).map(([key, value]) => {
            sum += value.price * value.amount
        })

        Object.entries(KosikItems.ItemsVlastnyDizajn).map(([key, value]) => {
            sum += value.price * value.amount
        })
        return sum
    }


    // const {limitations, ...rest} = useAppSelector((state) => state.cakeReducer)


    // const limitationText = Object.entries(limitations)
    //     .reduce((acc, [key, value]) => {
    //         if (value) {
    //             return `${acc} ${getTranslation(key)},`
    //         }
    //         return acc
    //     }, '')
    //     .slice(0, -1)


    // let limText = (l) => {
    //     Object.entries(l)
    //         .reduce((acc, [key, value]) => {
    //             if (value) {
    //                 return `${acc} ${getTranslation(key)},`
    //             }
    //             return acc
    //         }, '')
    //         .slice(0, -1)
    // }


    if (Object.keys(KosikItems.ItemsZPonuky).length + Object.keys(KosikItems.ItemsVlastnyDizajn).length === 0) {
        return (
            <Box sx={{width: '100%', typography: 'body1'}}>
                <Typography variant="h3" component="h2">
                    Košík je prázdny
                </Typography>

                <Section
                    leftSideElement={
                        <Button href='/objednat-vlastny-dizajn'>
                            Objednať vlastný dizajn
                        </Button>
                    }
                    rightSideElement={
                        <Button href='/ponuka'>
                            Objednať z ponuky
                        </Button>
                    }
                />


            </Box>
        )
    }

    return (<Box sx={{width: '100%', typography: 'body1'}} onClick={updatePrice}>

            <Typography variant="h2" component="h2">
                Košík
            </Typography>

            {Object.entries(KosikItems.ItemsZPonuky).map(([key, value]) => {
                return KosikItem(false, value);
            })}

            {Object.entries(KosikItems.ItemsVlastnyDizajn).map(([key, value]) => {
                return KosikItem(true, value);
            })}


            <Box sx={{
                display: 'flex', justifyContent: 'center', minHeight: '10vh',
                padding: '0 0 100px 0'
            }}>

            </Box>


            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '150px', zIndex:999}} elevation={3}>
                <BottomNavigation>
                    <Box>
                        <p>cena celkom: {price} € </p>
                        <Button variant="contained">
                            Späť k nákupu
                        </Button>
                        <Button variant="contained">
                            Prejsť k platbe
                        </Button>
                    </Box>
                </BottomNavigation>
            </Paper>

        </Box>


    )

}
