import { Box, MenuItem, TextField, TextFieldProps } from '@mui/material'

interface Props {
  data: string[]
  label: string
  value: string[]
  setValue: (value: any[]) => void
}

export const MultiSelect: React.FC<Props & TextFieldProps> = ({ data, label, value, setValue, ...rest }) => (
  <TextField
    select
    fullWidth
    label={label}
    value={value}
    color="secondary"
    SelectProps={{
      multiple: true,
      onChange: (e) => setValue(e.target.value as string[]),
      renderValue: (selected) => <Box className="overflow-x-auto">{(selected as string[]).join(', ')}</Box>,
    }}
    {...rest}
  >
    {data.map((item) => (
      <MenuItem key={item} value={item} className={value.includes(item) ? 'bg-blue-light dark:bg-blue-dark' : ''}>
        {item}
      </MenuItem>
    ))}
  </TextField>
)
