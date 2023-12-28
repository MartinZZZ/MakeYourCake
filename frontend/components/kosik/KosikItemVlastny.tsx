import {Box, Button, Paper} from "@mui/material";
import {Torta} from "../Torta";
import {Rez} from "../Rez";
import {LabelTextPair} from "../LabelTextPair";
import {Section} from "../Section";
import React, {useState} from "react";
import {UpdateKosik} from "./UpdateKosik";

export function KosikItemVlastny(item) {

    const [amount, setAmount] = useState(item.amount)
    const properties = item.properties


    function updateAmount(add: boolean) {
        add ? item.amount++ : item.amount--
        setAmount(item.amount)

        UpdateKosik(true, item)
    }

    const onClickAdd = () => {
        updateAmount(true)
    }

    const onClickRemove = () => {
        updateAmount(false)
    }


    const leftSideElement = (
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 1, width: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                {Torta(properties.cream, properties.frosting)}
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', height: '20%'}}>
                {Rez(properties.filling, properties.dough)}
            </Box>
        </Paper>
    )

    const rightSideElement = (
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 4}}>
            <Box>
                {Object.entries(properties).map(([key, value]) => (
                    <LabelTextPair key={key} label={key} text={value?.toString()}/>
                ))}
                <LabelTextPair label="Obmedzenia" text={'limitationText'}/>
                <LabelTextPair label="Cena" text='50€'/>

            </Box>

            <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                <Button onClick={onClickAdd}>
                    +
                </Button>

                {amount.toString()}

                <Button onClick={onClickRemove}>
                    -
                </Button>
            </Box>

        </Paper>
    )

    if (amount > 0) { //todo upravit, pridat X na odstranenie

        return (<Box sx={{width: '100%', typography: 'body1'}}>

                <Section
                    leftSideElement={leftSideElement}
                    rightSideElement={rightSideElement}
                /></Box>
        )
    }

    return <></>
}
