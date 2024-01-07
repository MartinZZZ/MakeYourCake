import { Card, Grid, Paper } from '@mui/material'
import React from 'react'
import { ItemImage } from './ItemImage'
import { ItemDetail } from './ItemDetail'
import { ItemPrice } from './ItemPrice'

export function KosikItem(vlastny, item) {
  return (
    <Card
      sx={{
        topography: 'body1',
        margin: '5px',
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{ minHeight: '250px', maxHeight: '250px' }}
      >
        <Grid
          item
          xs={7}
          sx={{
            minHeight: '250px',
            maxHeight: '250px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ItemImage vlastny={vlastny} item={item} />
        </Grid>
        <Grid item xs={2} sx={{ minHeight: '250px', maxHeight: '250px' }}>
          {ItemDetail(vlastny, item)}
        </Grid>
        <Grid item xs={3} sx={{ minHeight: '250px', maxHeight: '250px' }}>
          {ItemPrice(vlastny, item)}
        </Grid>
      </Grid>
    </Card>
  )
}
