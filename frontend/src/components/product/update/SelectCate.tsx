import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'
import { categories } from '@/lib/constants'
import IField from '@/types/field'

interface Props {
  field: IField
  disabled?: boolean
}
const SelectCate: React.FC<Props> = ({ field, disabled = true }) => (
  <Select onOpenChange={() => field.onChange} defaultValue={field.value} disabled={disabled}>
    <SelectTrigger>
      <SelectValue placeholder={`Enter product's ${field.name}`} />
    </SelectTrigger>
    <SelectContent>
      {categories.map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

export default SelectCate
