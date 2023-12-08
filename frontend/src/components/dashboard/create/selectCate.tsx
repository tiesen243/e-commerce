import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Category } from '@/interfaces/product.interface'
import IFields from '@/types/fields.type'

const SelectCate: React.FC<IFields> = (props) => (
  <Select onValueChange={() => props.onChange} defaultValue={props.value}>
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
