import {Box, Paper} from "@mui/material";
import {Torta} from "../Torta";
import {Rez} from "../Rez";
import {LabelTextPair} from "../LabelTextPair";
import {Section} from "../Section";

export function KosikPolozka(rest, limitationText) {

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


    return (<Box sx={{width: '100%', typography: 'body1'}}>

        <Section
            leftSideElement={leftSideElement}
            rightSideElement={rightSideElement}
        /></Box>
        )
    }
