import { Box, Button } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

type Props = {
  text: string
  disabled: boolean
  onClick?: () => void
}

export const SubmitButton = ({ text, disabled, onClick }: Props) => {
  if (!disabled) {
    return (
      <Button
        fullWidth
        variant="contained"
        disabled={disabled}
        onClick={onClick}
      >
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
