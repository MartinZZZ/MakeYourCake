import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

type Props = {
  currentTab: string
}

const TABS = {
  '': 'O nás',
  ponuka: 'Ponuka',
  'objednat-vlastny-dizajn': 'Objednať vlastný dizajn',
}

type NavbarItemProps = {
  tab: string
  label: string
  isCurrentTab: boolean
}

const NavbarItem = ({ tab, label, isCurrentTab }: NavbarItemProps) => {
  const router = useRouter()
  return (
    <Box
      key={tab}
      onClick={() => {
        router.push(`/${tab}`)
      }}
      sx={{
        display: 'inline-block',
        marginRight: 2,
        padding: 1,
        backgroundColor: isCurrentTab ? 'primary.main' : 'transparent',
        color: isCurrentTab ? 'white' : 'black',
        borderRadius: 1,
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'white',
          cursor: 'pointer',
        },
      }}
    >
      <Typography>{label}</Typography>
    </Box>
  )
}
export const Navbar = ({ currentTab }: Props) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      display="flex"
      width="100%"
    >
      <Box maxWidth="70%">
        {Object.entries(TABS).map(([tab, label]) => (
          <NavbarItem
            key={tab}
            tab={tab}
            label={label}
            isCurrentTab={tab === currentTab}
          />
        ))}
      </Box>
       <NavbarItem
        tab="kosik"
        label="Košík"
        isCurrentTab={currentTab === 'kosik'}
      />
      <Box />
    </Box>
  )
}
