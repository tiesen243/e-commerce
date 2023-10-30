import { MenuItem, TextField, TextFieldProps } from '@mui/material'

interface Props {
  data: string[]
  setValue: (value: any) => void
}

const Select: React.FC<Props & TextFieldProps> = ({ data, value, setValue, ...rest }) => (
  <TextField select fullWidth color="secondary" value={value} onChange={(e) => setValue(e.target.value)} {...rest}>
    {data.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ))}
  </TextField>
)

export default Select
