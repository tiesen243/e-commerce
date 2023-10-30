import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel, FormGroup } from '@mui/material'

interface Props {
  label: string
}

export const Checkbox: React.FC<Props & CheckboxProps> = (props) => (
  <FormGroup>
    <FormControlLabel control={<MuiCheckbox {...props} color="info" />} label={props.label} />
  </FormGroup>
)
