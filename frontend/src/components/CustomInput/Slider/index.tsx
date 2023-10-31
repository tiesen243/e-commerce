import { Slider as MuiSiler, SliderProps, Stack, Typography } from '@mui/material'

interface Props extends SliderProps {
  label: string
}
export const Slider: React.FC<Props> = (props) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Typography gutterBottom>{props.label}</Typography>
      <MuiSiler size="small" aria-label={props.label} valueLabelDisplay="auto" {...props} />
    </Stack>
  )
}
