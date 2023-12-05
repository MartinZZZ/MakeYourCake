import { Box, Button } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

type Props = {
  text: string
  disabled: boolean
}

export const SubmitButton = ({ text, disabled }: Props) => {
  if (!disabled) {
    return (
      <Button fullWidth variant="contained" disabled={disabled}>
        {text}
      </Button>
    )
  }

  return (
    <Tooltip title="Najprv vyplňte všetky polia">
      <Box>
        <Button fullWidth variant="contained" disabled={disabled}>
          {text}
        </Button>
      </Box>
    </Tooltip>
  )
}
