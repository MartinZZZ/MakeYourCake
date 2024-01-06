import {Box, Button, Typography} from '@mui/material'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from "react";

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
            marginLeft: '5px',
            marginRight: '5px',
            padding: 1,
            backgroundColor: isCurrentTab ? 'deeppink' : 'transparent',
            color: isCurrentTab ? 'white' : 'black',
            borderRadius: 1,
            '&:hover': {
              backgroundColor: 'deeppink',
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
          py={1}
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
      </Box>
  )
}
