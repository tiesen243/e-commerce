import { MenuItem, TextField, TextFieldProps } from '@mui/material'

interface Props {
  data: string[]
  label: string
  name: string
  setValue: (value: any[]) => void
}

const MultipleSelectChip: React.FC<Props & TextFieldProps> = ({ data, label, name, value, setValue }) => (
  <TextField
    select
    fullWidth
    label={label}
    name={name}
    value={value}
    color="secondary"
    SelectProps={{
      multiple: true,
      onChange: (e) => setValue(e.target.value as string[]),
    }}
  >
    {data.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ))}
  </TextField>
)

export default MultipleSelectChip
