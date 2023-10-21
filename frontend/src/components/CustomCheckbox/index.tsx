import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

interface CheckboxProps {
  label: string
  value: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox: React.FC<CheckboxProps> = (props) => {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox {...props} color="info" />} label={props.label} />
    </FormGroup>
  )
}

export default CustomCheckbox
