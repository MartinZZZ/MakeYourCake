import { Box, Button } from '@mui/material'
import { useState } from 'react'
import Draggable from 'react-draggable'
import { Torta } from '../Torta'
import html2canvas from 'html2canvas'

const handleDownloadImage = async () => {
  const element = document.getElementById('draggArea')
  const canvas = await html2canvas(element)
  const [_, base64Image] = canvas.toDataURL().split(';base64,')
  console.log(base64Image)
  // let link = document.createElement('a')

  // link.href = base64Image
  // link.download = 'downloaded-image.jpg'

  // document.body.appendChild(link)
  // link.click()
  // document.body.removeChild(link)
}

export const Dragg = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  console.log(position)

  return (
    <>
      <Box
        id="draggArea"
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
      <Button onClick={handleDownloadImage}>Download</Button>
    </>
  )
}
