import { Box, Typography } from '@mui/material'
import { Navbar } from './Navbar'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathName = usePathname().substring(1)
  const trimTo =
    pathName.indexOf('/') < 0 ? pathName.length : pathName.indexOf('/')
  const currentTab = pathName.substring(0, trimTo)

  return (
    <Box width="100%">
      <Typography align="center" variant="h1">
        Make your cake
      </Typography>
      <Navbar currentTab={currentTab} />
    </Box>
  )
}
