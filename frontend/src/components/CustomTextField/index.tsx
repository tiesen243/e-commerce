import { TextField, TextFieldProps } from '@mui/material'
import { NextPage } from 'next'

const CustomTextField: NextPage<TextFieldProps> = ({ ...props }) => (
  <TextField
    autoComplete="off"
    autoCorrect="off"
    variant="outlined"
    fullWidth
    className="shadow-lg"
    InputLabelProps={{
      sx: {
        '&.Mui-focused': { color: 'text.primary' },
      },
    }}
    InputProps={{
      sx: {
        backgroundColor: 'secondary.sub',
        '&:hover': { backgroundColor: 'secondary.hover', transition: 'background-color 0.3s ease' },
        '&.Mui-focused': { backgroundColor: 'secondary.sub' },
        color: 'text.primary',
      },
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'secondary.focus',
        },
      },
    }}
    {...(props.type === 'number' && { inputProps: { min: 0 } })}
    {...props}
  />
)

export default CustomTextField
