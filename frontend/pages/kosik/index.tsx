import {Box, Button, Typography} from '@mui/material'

import {getTranslation} from "../../helpers/getTranslation";
import React from "react";

import {KosikItems} from "../../components/kosik/KosikItems";
import {Section} from "../../components/Section";
import {KosikItem} from "../../components/kosik/KosikItem";


export default function Kosik() {

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

    return (<Box sx={{width: '100%', typography: 'body1'}}>

            <Typography variant="h2" component="h2">
                Košík
            </Typography>

            {Object.entries(KosikItems.ItemsZPonuky).map(([key, value]) => {
                // return KosikItemZPonuky(value);
                return KosikItem(false, value);
            })}

            {Object.entries(KosikItems.ItemsVlastnyDizajn).map(([key, value]) => {
                // return KosikItemVlastny(value);
                return KosikItem(true, value);

            })}


            <Box sx={{
                display: 'flex', justifyContent: 'center', minHeight: '10vh'
            }}>
                <Button variant="contained">
                    Prejsť k platbe
                </Button>
            </Box>


        </Box>
    )

}
