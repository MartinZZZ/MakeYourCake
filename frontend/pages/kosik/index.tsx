import {Box, Button, Paper, Tab, TextField, Typography} from '@mui/material'
import {Section} from "../../components/Section";
import {Torta} from "../../components/Torta";
import {Rez} from "../../components/Rez";
import {LabelTextPair} from "../../components/LabelTextPair";
import {useAppSelector} from "../../redux/store";
import {getTranslation} from "../../helpers/getTranslation";

export default function Kosik() {
    const {limitations, ...rest} = useAppSelector((state) => state.cakeReducer)

    const limitationText = Object.entries(limitations)
        .reduce((acc, [key, value]) => {
            if (value) {
                return `${acc} ${getTranslation(key)},`
            }
            return acc
        }, '')
        .slice(0, -1)

    const isSubmitButtonDisabled = Object.values(rest).some(
        (value) => value === undefined
    )

    const leftSideElement = (
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 1, width: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                <Torta/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', height: '20%'}}>
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
                <LabelTextPair label="Cena" text='50€'/>

            </Box>
        </Paper>
    )
    if (isSubmitButtonDisabled) {
        return (

            <Box sx={{width: '100%', typography: 'body1'}}>
                <Typography variant="h2" component="h2">
                    V košíku sa nič nenachádza
                </Typography>

                <Button variant="contained" href='/objednat-vlastny-dizajn'>
                    Objednať vlastný dizajn
                </Button>

            </Box>
        )
    } else

        return (<Box sx={{width: '100%', typography: 'body1'}}>

            <Typography variant="h2" component="h2">
                Košík
            </Typography>
            <Section
                leftSideElement={leftSideElement}
                rightSideElement={rightSideElement}
            />

            <Box sx={{
                display: 'flex', justifyContent: 'center', minHeight: '10vh'
            }}>
                <Button variant="contained">
                    Prejsť k platbe
                </Button>
            </Box>

        </Box>)
}
