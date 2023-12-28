import {Box, Button, Card, CardMedia, Paper} from "@mui/material";
import {LabelTextPair} from "../LabelTextPair";
import {Section} from "../Section";
import React from "react";
import {onClickAddToKosik, onClickRemoveFromKosik} from "./UpdateKosik";


export function KosikItemZPonuky(rest, limitationText, id) {

    const onClickAdd = () => {
        // onClickAddToKosik(false,item);
    }

    const onClickRemove = () => {
        // onClickRemoveFromKosik(false, item);
    }

    const leftSideElement = (
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 1, width: '100%', justifyContent: 'center'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
            }}>
                <Card sx={{maxWidth: 500}}>
                    <CardMedia
                        key={id}
                        component="img"
                        height="200"
                        image={`/static/images/cakes/${id}/0.png`}
                    />

                </Card>
            </Box>
        </Paper>
    )

    const rightSideElement = (

        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 4}}>

            <Box>
                {Object.entries(rest).map(([key, value]) => (
                    <LabelTextPair key={key} label={key} text={value?.toString()}/>
                ))}
                {/*<LabelTextPair label="Obmedzenia" text={limitationText}/>*/}
                <LabelTextPair label="Cena" text='50€'/>
                {/* todo cena a popisy*/}

            </Box>

            <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                <Button onClick={onClickAdd}>
                    +
                </Button>

                5

                <Button onClick={onClickRemove}>
                    -
                </Button>
            </Box>
        </Paper>
    )


    return (<Box sx={{width: '100%', typography: 'body1'}}>
            <Section
                leftSideElement={leftSideElement}
                rightSideElement={rightSideElement}
            /></Box>
    )
}
