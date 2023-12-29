import {Box, Button} from "@mui/material";
import {LabelTextPair} from "../LabelTextPair";
import React, {useState} from "react";
import {UpdateKosik} from "./UpdateKosik";

export function ItemPrice(vlastny, item) {

    const [amount, setAmount] = useState(item.amount)
    const [price, setPrice] = useState(item.price)


    function updateAmount(add: boolean) {
        add ? item.amount++ : item.amount--
        setAmount(item.amount)

        setPrice(item.amount * item.price)

        UpdateKosik(vlastny, item)
    }

    const onClickAdd = () => {
        updateAmount(true)
    }

    const onClickRemove = () => {
        updateAmount(false)
    }


    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>

            <Box sx={{p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

                <Button onClick={onClickRemove} disabled={amount <= 1}>
                    -
                </Button>
                {amount.toString()}
                <Button onClick={onClickAdd}>
                    +
                </Button>

            </Box>
            <Box sx={{p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
                {amount > 1 ?
                    (<LabelTextPair label="Cena" text={item.price.toString() + '€'}/>) : ''
                }

                <LabelTextPair label="Cena" text={price.toString() + '€'}/>
            </Box>
        </Box>


    )

}
