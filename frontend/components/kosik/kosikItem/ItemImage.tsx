import { Box, Card, CardMedia, Paper } from '@mui/material'

import React from 'react'
import { Torta } from '../../Torta'
import { Rez } from '../../Rez'
import { ItemToString } from '../KosikItems'

type Props = {
  vlastny: any
  item: any
}

export function ItemImage({ vlastny, item }: Props) {
  if (vlastny) {
    const properties = item.properties

    console.log('PROPS', properties, ItemToString(properties))

    return (
      <Card
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          {/* <Torta cream={properties.cream} frosting={properties.frosting} /> */}
          <img
            src={`data:image/jpeg;base64,${localStorage.getItem(
              ItemToString(properties)
            )}`}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '90%',
          }}
        >
          <Rez filling={properties.filling} dough={properties.dough} />
        </Box>
      </Card>
    )
  }

  return (
    <Card
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <CardMedia
        key={item.id}
        component="img"
        image={`/static/images/cakes/${item.id}/0.png`}
        sx={{ maxWidth: '200px' }}
      />
    </Card>
  )
}
