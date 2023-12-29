import {Grid, Paper} from "@mui/material";
import React from "react";
import {ItemImage} from "./ItemImage";
import {ItemDetail} from "./ItemDetail";
import {ItemPrice} from "./ItemPrice";

export function KosikItem(vlastny, item) {
    return (
        <Paper sx={{width: '100%', typography: 'body1', padding: '20px', margin:'20px'}}>
            <Grid container spacing={2} sx={{border: '1px solid black', minHeight: '200px', maxHeight: '200px'}}>
                <Grid xs={4}
                      sx={{
                          border: '1px solid black',
                          minHeight: '200px',
                          maxHeight: '200px',
                          display: 'flex',
                          justifyContent: 'center'
                      }}>
                    {ItemImage(vlastny, item)}
                </Grid>
                <Grid xs={4} sx={{border: '1px solid black', minHeight: '200px', padding: '10px'}}>
                    {ItemDetail(vlastny, item)}
                </Grid>
                <Grid xs={4} sx={{border: '1px solid black', minHeight: '200px'}}>
                    {/*<Box>xs=4</Box>*/}
                    {ItemPrice(vlastny, item)}
                </Grid>

            </Grid>
        </Paper>
    )
}
