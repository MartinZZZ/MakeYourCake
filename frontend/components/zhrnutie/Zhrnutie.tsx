import { Box, Button, Dialog, Paper, Typography } from '@mui/material'
import { Section } from '../Section'
import Emoji from 'react-emojis'
import { useAppSelector } from '../../redux/store'
import { LabelTextPair } from '../LabelTextPair'
import { Torta } from '../Torta'
import { Rez } from '../Rez'
import html2canvas from 'html2canvas'
import { getTranslation } from '../../helpers/getTranslation'
import { SubmitButton } from './SubmitButton'
import { useState } from 'react'
import { AddToKosik } from '../kosik/UpdateKosik'
import Draggable from 'react-draggable'
import { ItemToString } from '../kosik/KosikItems'

const handleSaveImage = async (rest) => {
  const element = document.getElementById('draggArea')
  const canvas = await html2canvas(element)
  const [_, base64Image] = canvas.toDataURL().split(';base64,')
  const key = ItemToString(rest)
  localStorage.setItem(key, base64Image)
}

export const Zhrnutie = () => {
  const { limitations, ...rest } = useAppSelector((state) => state.cakeReducer)

  const [open, setOpen] = useState(false)

  const isSubmitButtonDisabled = Object.values(rest).some(
    (value) => value === undefined
  )

  const onSubmit = () => {
    handleSaveImage(rest)
    setOpen(true)
    AddToKosik(true, rest, limitations)
  }

  const decorations = useAppSelector(
    (state) => state.decorationsReducer.decorations
  )

  const limitationText = Object.entries(limitations)
    .reduce((acc, [key, value]) => {
      if (value) {
        return `${acc} ${getTranslation(key)},`
      }
      return acc
    }, '')
    .slice(0, -1)

  const leftSideElement = (
    <Paper
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      <Box
        id="draggArea"
        sx={{
          position: 'relative',
          height: '100%',
        }}
      >
        <Box sx={{ m: 2 }}>
          <Torta />
        </Box>
        {decorations.map(({ x, y, image, id }) => (
          <Draggable position={{ x, y }} bounds="parent">
            <div
              style={{
                zIndex: 100,
                position: 'absolute',
                width: 'fit-content',
              }}
            >
              <Emoji emoji={image} size={50} />
            </div>
          </Draggable>
        ))}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 'bold' }}>Rez:</Typography>
        <Rez />
      </Box>
    </Paper>
  )
  const rightSideElement = (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',
      }}
    >
      <Box>
        {Object.entries(rest).map(([key, value]) => (
          <LabelTextPair key={key} label={key} text={value?.toString()} />
        ))}
        <LabelTextPair label="Obmedzenia" text={limitationText} />
      </Box>
      <SubmitButton
        disabled={isSubmitButtonDisabled}
        text="Vložiť do košíka"
        onClick={onSubmit}
      />
    </Paper>
  )
  return (
    <>
      <Section
        leftSideElement={leftSideElement}
        rightSideElement={rightSideElement}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Typography sx={{ p: 2 }}>
          Torta bola úspešne vložená do košíka
        </Typography>
        <Button onClick={() => setOpen(false)}>Zavrieť</Button>
      </Dialog>
    </>
  )
}
