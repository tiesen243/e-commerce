import { Checkbox } from '../ui/checkbox'

interface Props {
  value: string[]
  data: string[]
  onChange: (value: string[]) => void
}

const CustomMultiSelect: React.FC<Props> = ({ value, data, onChange }) => (
  <section className="grid grid-cols-2 md:grid-cols-4">
    {data.map((item) => (
      <label key={item} className="flex gap-2">
        <Checkbox
          checked={value.includes(item)}
          onCheckedChange={(checked) => {
            return checked
              ? onChange([...value, item])
              : onChange(value?.filter((value) => value !== item))
          }}
        />
        {item}
      </label>
    ))}
  </section>
)

export default CustomMultiSelect
