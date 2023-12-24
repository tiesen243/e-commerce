import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface Props {
  onValueChange: () => void
  value: string
  data: string[]
  disabled: boolean
}

const CustomSelect: React.FC<Props> = ({ value, onValueChange, data, disabled }) => (
  <Select onValueChange={onValueChange} value={value} disabled={disabled}>
    <SelectTrigger>
      <SelectValue placeholder="Select Category..." />
    </SelectTrigger>

    <SelectContent>
      {data.map((item) => (
        <SelectItem key={item} value={item}>
          {item}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

export default CustomSelect
