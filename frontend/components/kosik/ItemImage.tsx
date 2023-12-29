import {Box, Card, CardMedia, Paper} from "@mui/material";

import React from "react";
import {Torta} from "../Torta";
import {Rez} from "../Rez";

export function ItemImage(vlastny, item) {

    if (vlastny) {
        const properties = item.properties

        return (<Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 1, width: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                {Torta(properties.cream, properties.frosting)}
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', height: '90%'}}>
                {Rez(properties.filling, properties.dough)}
            </Box>
        </Paper>)
    }

    return (
        <Box sx={{width: '50%'}}>
            <Card sx={{maxWidth: 500}}>
                <CardMedia
                    key={item.id}
                    component="img"
                    height="190"
                    image={`/static/images/cakes/${item.id}/0.png`}
                />
            </Card>
        </Box>
    )
}
