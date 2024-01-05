import {Grid, Paper} from "@mui/material";
import React from "react";
import {ItemImage} from "./ItemImage";
import {ItemDetail} from "./ItemDetail";
import {ItemPrice} from "./ItemPrice";

export function KosikItem(vlastny, item) {
    return (
        <Paper sx={{width: '100%', typography: 'body1', marginTop: '40px', marginBottom: '40px'}}>
            <Grid container spacing={2} sx={{minHeight: '200px', maxHeight: '200px'}}>
                <Grid xs={4}
                      sx={{minHeight: '200px', maxHeight: '200px', display: 'flex', justifyContent: 'center'}}>
                    {ItemImage(vlastny, item)}
                </Grid>
                <Grid xs={4} sx={{minHeight: '200px', padding: '10px'}}>
                    {ItemDetail(vlastny, item)}
                </Grid>
                <Grid xs={4} sx={{minHeight: '200px'}}>
                    {ItemPrice(vlastny, item)}
                </Grid>

            </Grid>
        </Paper>
    )
}
