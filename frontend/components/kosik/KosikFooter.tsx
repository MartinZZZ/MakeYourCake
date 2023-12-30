import {BottomNavigation, Box, Button, Paper, Typography} from "@mui/material";
import React from "react";
import {useRouter} from "next/router";

export function KosikFooter(price) {
    const router = useRouter()

    function NonEmptyKosikFooter() {
        return (
            <Box sx={{width: '100%', padding: '10px 150px 10px 150px'}}>

                <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    <Box sx={{padding: '10px'}}>
                        <Typography variant="h5" component="h5">
                            Cena celkom:
                        </Typography>
                    </Box>
                    <Box sx={{padding: '10px'}}>
                        <Typography variant="h5" component="h5" sx={{fontWeight: 'bold', minWidth: '50px'}}>
                            {price.toString()} €
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'space-evenly', flex: 1}}>

                    <Button size='large' variant="outlined" onClick={() => router.push({pathname: '/'})}>
                        Pokračovať v nákupe
                    </Button>

                    <Button size='large' variant="outlined" onClick={() => router.push({pathname: '/platba'})}>
                        Pokračovať k platbe
                    </Button>

                </Box>
            </Box>

        )
    }

    function EmptyKosikFooter() {
        return (
            <Box sx={{width: '100%'}}>
                <Box sx={{padding: '20px'}}>

                </Box>

                <Box sx={{display: 'flex', justifyContent: 'space-evenly', flex: 1}}>

                    <Button size='large' variant="outlined" href='/objednat-vlastny-dizajn'>
                        Objednať vlastný dizajn
                    </Button>

                    <Button size='large' variant="outlined" href='/ponuka'>
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
            <BottomNavigation sx={{width: '80%', height: '100%'}}>
                {(price <= 0) ? EmptyKosikFooter() : NonEmptyKosikFooter()}
            </BottomNavigation>
        </Paper>

    )

}