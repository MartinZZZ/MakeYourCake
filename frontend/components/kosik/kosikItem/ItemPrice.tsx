import {Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Typography} from "@mui/material";

import React, {useState} from "react";
import {Add, Remove} from "@mui/icons-material";

export function ItemPrice(vlastny, item) {

    const [amount, setAmount] = useState(item.amount)
    const [price, setPrice] = useState(item.price*item.amount)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
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

            <Box sx={{p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',}}>
                <Box>
                    počet kusov:
                </Box>
                <Box sx={{
                    p: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '0'
                }}>
                    <Box>
                        <Button
                            onClick={onClickRemove}>
                            <Remove sx={{margin: '0'}}/>
                        </Button>
                    </Box>
                    <Box sx={{minWidth: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography minHeight={'30px'}>
                            {amount.toString()}
                        </Typography>
                    </Box>
                    <Box>
                        <Button onClick={onClickAdd}> <Add/> </Button>
                    </Box>
                </Box>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', padding: '10px'}}>
                <Typography minHeight={'25px'}>
                    {(amount > 1) ? item.price.toString() + '€/ks' : ''}
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', padding: '15px', paddingTop: '0'}}>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
                    <Typography>Cena:</Typography>
                    <Typography sx={{fontWeight: 'bold', minWidth: '50px'}}>
                        {price.toString()} €
                    </Typography>
                </Box>
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
                    <Button color='error' onClick={removeItem} autoFocus> Odobrať </Button>
                </DialogActions>
            </Dialog>
        </Box>

    )
}
