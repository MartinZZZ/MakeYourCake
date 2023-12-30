import { Box } from '@mui/material'
import { useState } from 'react'
import Draggable from 'react-draggable'
import { Torta } from '../Torta'

export const Dragg = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  console.log(position)
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <Box sx={{ m: 4 }}>
        <Torta />
      </Box>
      <Draggable
        onStop={(_, data) => setPosition({ x: data.x, y: data.y })}
        defaultPosition={position}
        bounds="parent"
      >
        <div
          style={{
            zIndex: 100,
            position: 'relative',
            width: 'fit-content',
          }}
        >
          XD
        </div>
      </Draggable>
    </Box>
  )
}
