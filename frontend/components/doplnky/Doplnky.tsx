import { Box, Paper } from '@mui/material'
import { useState } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'
import { Section } from '../Section'
import { Dragg } from './Dragg'
import { VyberDoplnkov } from './VyberDoplnkov'

export const Doplnky = () => {
  return (
    <Section
      leftSideElement={
        <Paper
          sx={{
            px: '50px',
            py: '100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Dragg />
        </Paper>
      }
      rightSideElement={<VyberDoplnkov />}
    />
  )
}
