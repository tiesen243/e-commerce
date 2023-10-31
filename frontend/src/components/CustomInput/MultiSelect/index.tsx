import { Box, MenuItem, TextField, TextFieldProps } from '@mui/material'

interface Props {
  data: string[]
  label: string
  name: string
  value: string[]
  setValue: (value: any[]) => void
}

export const MultiSelect: React.FC<Props & TextFieldProps> = ({ data, label, name, value, setValue }) => (
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
      renderValue: (selected) => (
        <Box className="flex flex-wrap max-h-10 overflow-y-auto">
          {(selected as string[]).map((tag) => (
            <Box key={tag} className="m-1 rounded-md bg-secondary-light dark:bg-secondary-dark px-2 py-1 shadow">
              {tag}
            </Box>
          ))}
        </Box>
      ),
    }}
  >
    {data.map((item) => (
      <MenuItem key={item} value={item} className={value.includes(item) ? 'bg-blue-light dark:bg-blue-dark' : ''}>
        {item}
      </MenuItem>
    ))}
  </TextField>
)
