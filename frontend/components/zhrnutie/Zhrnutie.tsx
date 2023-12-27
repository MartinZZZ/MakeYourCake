import {Box, Button, Dialog, Paper, Typography} from '@mui/material'
import {Section} from '../Section'
import {useAppSelector} from '../../redux/store'
import {LabelTextPair} from '../LabelTextPair'
import {Torta} from '../Torta'
import {Rez} from '../Rez'
import {getTranslation} from '../../helpers/getTranslation'
import {SubmitButton} from './SubmitButton'
import {useState} from 'react'
import {UpdateKosik} from "../kosik/UpdateKosik";

export const Zhrnutie = () => {
    const {limitations, ...rest} = useAppSelector((state) => state.cakeReducer)

    const [open, setOpen] = useState(false)

    const isSubmitButtonDisabled = Object.values(rest).some(
        (value) => value === undefined
    )

    const onSubmit = () => {
        console.log("...!!!!!!!!!!");
        setOpen(true);
        UpdateKosik(true);



    }

    const limitationText = Object.entries(limitations)
        .reduce((acc, [key, value]) => {
            if (value) {
                return `${acc} ${getTranslation(key)},`
            }
            return acc
        }, '')
        .slice(0, -1)

    const leftSideElement = (
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Torta/>
            </Box>
            <Box>
                <Typography sx={{fontWeight: 'bold'}}>Rez:</Typography>
                <Rez/>
            </Box>
        </Paper>
    )
    const rightSideElement = (
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 4}}>
            <Box>
                {Object.entries(rest).map(([key, value]) => (
                    <LabelTextPair key={key} label={key} text={value?.toString()}/>
                ))}
                <LabelTextPair label="Obmedzenia" text={limitationText}/>
            </Box>
            <SubmitButton
                disabled={isSubmitButtonDisabled}
                text="Vložiť do košíka"
                onClick={onSubmit}
            />
        </Paper>
    )
    return (
        <>
            <Section
                leftSideElement={leftSideElement}
                rightSideElement={rightSideElement}
            />
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Typography sx={{p: 2}}>
                    Torta bola úspešne vložená do košíka
                </Typography>
                <Button onClick={() => setOpen(false)}>Zavrieť</Button>
            </Dialog>
        </>
    )
}
