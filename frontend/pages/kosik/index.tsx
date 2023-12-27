import {Box, Button, Typography} from '@mui/material'

import {useAppSelector} from "../../redux/store";
import {getTranslation} from "../../helpers/getTranslation";
import {useState} from "react";

import {KosikPolozka} from "../../components/kosik/KosikPolozka";
import {UpdateKosik} from "../../components/kosik/UpdateKosik";
import {KosikItems} from "../../components/kosik/KosikItems";


export default function Kosik() {

    const {limitations, ...rest} = useAppSelector((state) => state.cakeReducer)

    console.log('test', limitations, rest);
    const limitationText = Object.entries(limitations)
        .reduce((acc, [key, value]) => {
            if (value) {
                return `${acc} ${getTranslation(key)},`
            }
            return acc
        }, '')
        .slice(0, -1)

    const isSubmitButtonDisabled = Object.values(rest).some(
        (value) => value === undefined
    )


    // if (isSubmitButtonDisabled) {
    //     return (
    //
    //         <Box sx={{width: '100%', typography: 'body1'}}>
    //             <Typography variant="h2" component="h2">
    //                 V košíku sa nič nenachádza
    //             </Typography>
    //
    //             <Button variant="contained" href='/objednat-vlastny-dizajn'>
    //                 Objednať vlastný dizajn
    //             </Button>
    //
    //         </Box>
    //     )
    // }

    return (<Box sx={{width: '100%', typography: 'body1'}}>

            <Typography variant="h2" component="h2">
                Košík
            </Typography>


            {KosikItems.zPonuky.map(function(object, i){
                return KosikPolozka(rest, limitationText);
            })}

            {KosikItems.vlastnyDizajn.map(function(object, i){
                return KosikPolozka(rest, limitationText);
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
