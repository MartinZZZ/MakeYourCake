import { Box, Button, Paper, Typography } from '@mui/material'
import { Section } from '../Section'
import { useAppSelector } from '../../redux/store'
import { LabelTextPair } from '../LabelTextPair'
import { Torta } from '../Torta'
import { Rez } from '../Rez'
import { getTranslation } from '../../helpers/getTranslation'
import { SubmitButton } from './SubmitButton'

export const Zhrnutie = () => {
  const { limitations, ...rest } = useAppSelector((state) => state.cakeReducer)

  const isSubmitButtonDisabled = Object.values(rest).some(
    (value) => value === undefined
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
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Torta />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 'bold' }}>Rez:</Typography>
        <Rez />
      </Box>
    </Paper>
  )
  const rightSideElement = (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        {Object.entries(rest).map(([key, value]) => (
          <LabelTextPair key={key} label={key} text={value?.toString()} />
        ))}
        <LabelTextPair label="Obmedzenia" text={limitationText} />
      </Box>
      <SubmitButton disabled={isSubmitButtonDisabled} text="Vložiť do košíka" />
    </Paper>
  )
  return (
    <Section
      leftSideElement={leftSideElement}
      rightSideElement={rightSideElement}
    />
  )
}
