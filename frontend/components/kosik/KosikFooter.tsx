import {BottomNavigation, Box, Button, Paper, Typography} from "@mui/material";

import React from "react";


export function KosikFooter(price) {

    function NonEmptyKosikFooter() {
        return (
            <Box sx={{width: '100%', border: '3px solid green'}}>

                <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    <Typography variant="h3" component="h3">
                        cena celkom: {price} €
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'space-evenly', flex: 1}}>

                    <Button variant="outlined" href={''}>
                        Pokračovať v nákupe
                    </Button>

                    <Button variant="outlined" href={''}>
                        Pokračovať k platbe
                    </Button>

                </Box>
            </Box>

        )
    }

    function EmptyKosikFooter() {
        return (

            <Box sx={{width: '100%', border: '3px solid green'}}>
                <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    ...
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'space-evenly', flex: 1}}>

                    <Button variant="outlined" href='/objednat-vlastny-dizajn'>
                        Objednať vlastný dizajn
                    </Button>

                    <Button variant="outlined" href='/ponuka'>
                        Objednať z ponuky
                    </Button>
                </Box>
            </Box>

        )
    }

    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '150px',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center'
        }} elevation={3}>
            <BottomNavigation sx={{width: '80%',height: '100%', border: '1px solid red'}}>
                {(price <= 0) ? EmptyKosikFooter() : NonEmptyKosikFooter()}
            </BottomNavigation>
        </Paper>

    )

}