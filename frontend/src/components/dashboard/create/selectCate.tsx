import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Category } from '@/interfaces/product.interface'
import IFields from '@/interfaces/fields.interface'

interface Props extends IFields {
  disabled: boolean
}
const SelectCate: React.FC<Props> = (fields) => (
  <Select
    disabled={fields.disabled}
    onValueChange={() => fields.onChange}
    defaultValue={fields.value}
  >
    <SelectTrigger>
      <SelectValue placeholder="Select product's category" />
    </SelectTrigger>

    <SelectContent>
      {Object.values(Category).map((cate) => (
        <SelectItem key={cate} value={cate}>
          {cate}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

export default SelectCate
