import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'

interface Props extends SelectProps {
  label: string
  data: string[]
}

const CustomSelect: React.FC<Props> = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select {...props}>
        {props.data.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
