import { Box, Typography } from '@mui/material'
import { Navbar } from './Navbar'
import { usePathname } from 'next/navigation'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from "next/link";

const theme = createTheme({
    typography: {
        fontFamily: 'Bagel Fat One, serif',
    }
});

export const Header = () => {
    var pathName = ''
    if (usePathname() != null)
        pathName = usePathname().substring(1)
    const trimTo =
        pathName.indexOf('/') < 0 ? pathName.length : pathName.indexOf('/')
    const currentTab = pathName.substring(0, trimTo)

    return (
        <>
            <Box width="100%" style={{backgroundColor: 'lightpink', paddingTop: '5px'}}>
                <Link  href={'/'} passHref style={{textDecoration: 'none', color: 'black'}}>
                    <ThemeProvider theme={theme}>
                        <Typography align="center" variant="h1">
                            MAKE YOUR CAKE
                        </Typography>
                    </ThemeProvider>
                </Link>
                <Navbar currentTab={currentTab} />
            </Box>
        </>
    )
}
