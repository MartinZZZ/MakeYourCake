import {Box, Button, Typography} from '@mui/material'

import {getTranslation} from "../../helpers/getTranslation";
import React from "react";

import {KosikItemVlastny} from "../../components/kosik/KosikItemVlastny";
import {KosikItems} from "../../components/kosik/KosikItems";
import {KosikItemZPonuky} from "../../components/kosik/KosikItemZPonuky";
import {Section} from "../../components/Section";


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


    if (KosikItems.zPonuky.length == 0 && KosikItems.vlastnyDizajn.length == 0) {
        return (
            <Box sx={{width: '100%', typography: 'body1'}}>
                <Typography variant="h2" component="h2">
                    V košíku sa nič nenachádza
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


            {KosikItems.zPonuky.map(function (object, i) {
                return KosikItemZPonuky(object.rest, 'limitations', object.id);
            })}

            {KosikItems.vlastnyDizajn.map(function (object, i) {
                // console.log('OBJECT', object)
                return KosikItemVlastny(object.rest, '...'); //todo limitationstext
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
