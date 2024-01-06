import {Box, Typography, Card, CardMedia} from '@mui/material'
import React, { useState } from 'react'
import { KosikItems } from '../../components/kosik/KosikItems'
import { KosikItem } from '../../components/kosik/kosikItem/KosikItem'
import { KosikFooter } from '../../components/kosik/KosikFooter'
import {ShoppingCartOutlined} from "@mui/icons-material";

export default function Kosik() {
    const [price, setPrice] = useState(getPrice);

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

    function updatePrice() {
        setPrice(getPrice)
    }

    function prazdnyKosikText() {
        if (price <= 0)
            return (

                <Typography variant="h3" component="h4" sx={{ padding: '50px', color:'black'}}>
                    {<ShoppingCartOutlined/>} Košík je prázdny.
                </Typography>
            )

        return <></>
    }

    // funkcia na skryvanie objektov v kosiku kde pocet je 0
    function displayItemBox(vlastny, name) {
        let zoz = vlastny ? KosikItems.ItemsVlastnyDizajn : KosikItems.ItemsZPonuky
        return zoz[name].amount > 0 ? 'show' : 'none'
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
            onClick={updatePrice}
        >

            <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightgoldenrodyellow'}}>
                {prazdnyKosikText()}
            </Box>

            <Box style={{backgroundColor: 'lightgoldenrodyellow'}}>
                {Object.keys(KosikItems.ItemsZPonuky).map((name) => (
                    <Box display={displayItemBox(false, name)}>
                        {KosikItem(false, KosikItems.ItemsZPonuky[name])}
                    </Box>
                ))}

                {Object.keys(KosikItems.ItemsVlastnyDizajn).map((name) => (
                    <Box display={displayItemBox(true, name)}>
                        {KosikItem(true, KosikItems.ItemsVlastnyDizajn[name])}
                    </Box>
                ))}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '10vh',
                    padding: '0 0 100px 0',
                }}
                style={{backgroundColor: 'lightgoldenrodyellow'}}
            >
                {KosikFooter(price)}
            </Box>
        </Box>
    )
}
