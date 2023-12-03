import { Box, Typography } from '@mui/material'
import { getTranslation } from '../helpers/getTranslation'

type Props = {
  label: string
  text?: string
}

export const LabelTextPair = ({ label, text }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Typography>{`${getTranslation(label)}:`}</Typography>
      <Typography sx={{ fontWeight: 'bold' }}>
        {text ? getTranslation(text) : 'Nezadané'}
      </Typography>
    </Box>
  )
}
