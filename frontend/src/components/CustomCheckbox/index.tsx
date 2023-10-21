import { Checkbox, CheckboxProps, FormControlLabel, FormGroup } from '@mui/material'

interface Props {
  label: string
}

const CustomCheckbox: React.FC<Props & CheckboxProps> = (props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...props} color="info" />} label={props.label} />
    </FormGroup>
  )
}

export default CustomCheckbox
