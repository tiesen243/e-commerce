import { TextField, TextFieldProps } from '@mui/material'

const CustomTextField: React.FC<TextFieldProps> = ({ ...props }) => (
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
