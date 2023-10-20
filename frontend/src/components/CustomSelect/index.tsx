import { MenuItem, TextFieldProps } from '@mui/material'
import StyledTextField from '../StyledTextField'

interface Props {
  data: string[]
}

const CustomSelect: React.FC<Props & TextFieldProps> = (props) => {
  return (
    <StyledTextField label={props.label} select {...props}>
      {props.data.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </StyledTextField>
  )
}

export default CustomSelect
