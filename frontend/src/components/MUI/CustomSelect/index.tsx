import { MenuItem, TextFieldProps } from '@mui/material'
import CustomTextField from '../CustomTextField'

interface Props {
  data: string[]
}

const CustomSelect: React.FC<Props & TextFieldProps> = (props) => {
  return (
    <CustomTextField label={props.label} select {...props}>
      {props.data.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </CustomTextField>
  )
}

export default CustomSelect
