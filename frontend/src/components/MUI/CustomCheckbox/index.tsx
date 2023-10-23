import { Checkbox, CheckboxProps, FormControlLabel, FormGroup } from '@mui/material'

interface Props {
  label: React.ReactNode
}

const CustomCheckbox: React.FC<Props & CheckboxProps> = (props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...props} className="accent-blue-light" />} label={props.label} />
    </FormGroup>
  )
}

export default CustomCheckbox
