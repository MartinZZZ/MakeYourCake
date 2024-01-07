import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Tab } from '@mui/material'
import { useState } from 'react'
import { Tvar } from '../../components/tvar/Tvar'
import { Prichut } from '../../components/prichut/Prichut'
import { Poleva } from '../../components/poleva/Poleva'
import { Zhrnutie } from '../../components/zhrnutie/Zhrnutie'

const TABS = {
    tvar: <Tvar />,
    príchuť: <Prichut />,
    poleva: <Poleva />,
    zhrnutie: <Zhrnutie />,
}

export default function NovyDizajn() {
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(parseInt(newValue.toString()))
    }
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value.toString()}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'lightgoldenrodyellow'}}>
                    <TabList onChange={handleChange} aria-label="tabs" centered>
                        {Object.keys(TABS).map((label, index) => (
                            <Tab key={label} label={label} value={index.toString()} sx={{color: 'black'}}/>
                        ))}
                    </TabList>
                </Box>
                {Object.values(TABS).map((component, index) => (
                    <TabPanel
                        key={`tab-panel-${index}`}
                        sx={{ minHeight: '65vh' }}
                        value={index.toString()}
                    >
                        {component}
                    </TabPanel>
                ))}
            </TabContext>
            <Box
                px={3}
                pb={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {value === 0 ? (
                    <Box />
                ) : (
                    <Button variant="contained" onClick={() => setValue(value - 1)}>
                        Späť
                    </Button>
                )}
                {value === Object.keys(TABS).length - 1 ? (
                    <Box />
                ) : (
                    <Button variant="contained" onClick={() => setValue(value + 1)}>
                        Ďalej
                    </Button>
                )}
            </Box>
        </Box>
    )
}
