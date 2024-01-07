import {BottomNavigation, Box, Button, Paper, Typography} from "@mui/material";
import React from "react";
import {useRouter} from "next/router";

export function KosikFooter(price) {
    const router = useRouter()

    function NonEmptyKosikFooter() {
        return (
            <Box sx={{width: '100%', padding: '10px 150px 10px 150px', backgroundColor: 'lightgoldenrodyellow'}}>

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

                    <Button size='large' variant="outlined" onClick={() => router.push({pathname: '/'})} 
                            sx={{backgroundColor: 'lightpink', outlineColor: 'deeppink', color: 'black'}}> {/*TODO MOZNO ZMENIT*/}
                        <Typography>Pokračovať v nákupe</Typography> 
                    </Button>

                    <Button size='large' variant="outlined" onClick={() => router.push({pathname: '/platba'})}
                            sx={{backgroundColor: 'lightpink', outlineColor: 'deeppink', color: 'black'}}>
                        <Typography>Pokračovať k platbe</Typography>
                    </Button>

                </Box>
            </Box>

        )
    }

    function EmptyKosikFooter() {
        return (
          <Box sx={{ width: "100%", backgroundColor: "lightgoldenrodyellow" }}>
            <Box sx={{ padding: "20px" }}></Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flex: 1,
                backgroundColor: "lightgoldenrodyellow",
              }}
            >
              <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  router.push("/ponuka");
                }}
                sx={{
                  backgroundColor: "lightpink",
                  outlineColor: "deeppink",
                  color: "black",
                }}
              >
                <Typography>Objednať z ponuky</Typography>
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  router.push("/objednat-vlastny-dizajn");
                }}
                sx={{
                  backgroundColor: "lightpink",
                  outlineColor: "deeppink",
                  color: "black",
                }}
              >
                <Typography>Objednať vlastný dizajn</Typography>
              </Button>
            </Box>
          </Box>
        );
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
            justifyContent: 'center',
            backgroundColor: 'lightgoldenrodyellow'
        }} elevation={3}>
            <BottomNavigation sx={{width: '80%', height: '100%'}}>
                {(price <= 0) ? EmptyKosikFooter() : NonEmptyKosikFooter()}
            </BottomNavigation>
        </Paper>

    )

}