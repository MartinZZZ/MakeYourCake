import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from '@mui/material'
import { Option } from '../types/cake'

type Props = {
  label: string
  options: Option[]
  selected: string
  handleChange: (event: SelectChangeEvent) => void
}

export const Select = ({ label, options, selected, handleChange }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <MuiSelect
        labelId={label}
        id={`${label}-select`}
        value={selected ?? ''}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}
