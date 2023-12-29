import {Box, Button, Dialog, DialogActions, DialogTitle, Typography} from "@mui/material";

import React, {useState} from "react";
import {LabelTextPair} from "../../LabelTextPair";


export function ItemPrice(vlastny, item) {

    const [amount, setAmount] = useState(getAmount)
    const [price, setPrice] = useState(item.price)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    function getAmount() {
        return item.amount
    }


    function updateAmount(add: boolean) {
        add ? item.amount++ : item.amount--

        setAmount(item.amount)
        setPrice(item.amount * item.price)

    }

    const onClickAdd = () => {
        updateAmount(true)
    }

    const onClickRemove = () => {

        if (item.amount - 1 == 0) {
            setOpen(true)
        } else {
            removeItem()
        }

    }

    const removeItem = () => {
        handleClose()
        updateAmount(false)
    }


    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>

            <Box sx={{p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

                <Button onClick={onClickRemove}>
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h6" my={2}>
                        Naozaj chcete odobrať tovar z košíka?
                    </Typography>
                </DialogTitle>
                <DialogActions style={{justifyContent: 'space-between'}}>
                    <Button onClick={handleClose}>Neodobrať</Button>
                    <Button
                        onClick={removeItem}
                        autoFocus
                    >
                        Odobrať
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>

    )
}
