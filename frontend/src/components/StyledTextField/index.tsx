import { NextPage } from 'next'
import { TextField, TextFieldProps } from '@mui/material'

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
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
          '&:hover input': {
            backgroundColor: 'primary.hover',
            borderRadius: '0.5rem',
            transition: 'background-color 0.3s ease-in-out',
          },
          '&.Mui-focused input': {
            backgroundColor: 'secondary.sub',
          },
        },
      }}
      variant="outlined"
      InputProps={{
        className: 'text-primary-dark dark:text-primary-light',
      }}
      {...props}
    />
  )
}

export default StyledTextField
