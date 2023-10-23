import { type Prod } from '@/types/product.type'
import { FormControl, FormLabel, Slider, SliderProps } from '@mui/material'

interface Props extends SliderProps {
  label: string
  prod: Prod
  setProd: React.Dispatch<React.SetStateAction<Prod>>
}
const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 30,
    label: '30%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 70,
    label: '70%',
  },
  {
    value: 100,
    label: '100%',
  },
]

const CustomSlider: React.FC<Props> = (props) => {
  const { prod, setProd, label, ...rest } = props
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Slider
        {...rest}
        className="mx-auto w-11/12"
        color="info"
        min={0}
        max={100}
        marks={marks}
        valueLabelDisplay="auto"
        value={prod.saleOffPercent}
        onChange={(e, value) => setProd({ ...prod, saleOffPercent: value as number })}
      />
    </FormControl>
  )
}

export default CustomSlider
