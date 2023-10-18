import { TextField, TextFieldProps } from '@mui/material'
import { NextPage } from 'next'

const StyledTextField: NextPage<TextFieldProps> = ({ ...props }) => {
  return (
    <TextField
      sx={{
        '& label.Mui-focused': {
          color: 'primary.main',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'primary.sub',
          },
          '&:hover fieldset': {
            borderColor: 'primary.hover',
            transition: 'border-color 0.3s ease-in-out',
          },
          '&.Mui-focused fprimt': {
            borderColor: 'secondary.main',
          },
          '&:hover input': {
            backgroundColor: 'primary.hover',
            borderRadius: '0.5rem',
            transition: 'background-color 0.3s ease-in-out',
          },
          '&.Mui-focused input': {
            backgroundColor: 'secondary.main',
          },
        },
      }}
      autoComplete='off'
      autoCorrect='off'
      variant="outlined"
      {...(props.type === 'number' && { inputProps: { min: 0 } })}
      InputProps={{
        className: 'text-primary-dark dark:text-primary-light',
      }}
      {...props}
    />
  )
}

export default StyledTextField
