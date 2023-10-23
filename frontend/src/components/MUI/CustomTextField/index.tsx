import { TextField, TextFieldProps } from '@mui/material'
import { NextPage } from 'next'

const CustomTextField: NextPage<TextFieldProps> = ({ ...props }) => (
  <TextField
    fullWidth
    autoComplete="off"
    autoCorrect="off"
    variant="outlined"
    className="shadow-lg"
    {...(props.type === 'number' && { inputProps: { min: 0 } })}
    {...props}
  />
)

export default CustomTextField
