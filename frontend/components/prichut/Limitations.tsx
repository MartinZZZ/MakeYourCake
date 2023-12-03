import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from '@mui/material'
import {
  Limitation,
  limitationTranslations,
  limitations,
} from '../../types/cake'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../redux/store'
import {
  addLimitation,
  removeLimitation,
} from '../../redux/features/cake-slice'

export const Limitations = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedLimitations = useAppSelector(
    (state) => state.cakeReducer.limitations
  )

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    limitation: Limitation
  ) => {
    const isChecked = event.target.checked
    if (isChecked) {
      dispatch(addLimitation(limitation))
      return
    }
    dispatch(removeLimitation(limitation))
  }
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Obmedzenia</Typography>
      {limitations.map((limitation) => (
        <FormControlLabel
          sx={{ width: '100%' }}
          key={limitation}
          checked={selectedLimitations[limitation]}
          control={
            <Checkbox
              key={limitation}
              onChange={(e) => handleChange(e, limitation)}
            />
          }
          label={limitationTranslations[limitation]}
        />
      ))}
    </Paper>
  )
}
