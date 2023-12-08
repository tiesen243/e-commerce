import { Checkbox } from '@/components/ui/checkbox'
import { FormLabel } from '@/components/ui/form'
import { Tag } from '@/interfaces/product.interface'
import IFields from '@/types/fields.type'

const ChooseTags: React.FC<IFields> = (fields) => (
  <section className="grid grid-cols-4 gap-2">
    {Object.values(Tag).map((tag: string) => (
      <div key={tag} className="flex items-center gap-2">
        <Checkbox
          checked={fields.value.includes(tag)}
          onCheckedChange={(checked) => {
            return checked
              ? fields.onChange([...fields.value, tag] as any)
              : fields.onChange(fields.value?.filter((value: string) => value !== tag))
          }}
        />
        <FormLabel>{tag}</FormLabel>
      </div>
    ))}
  </section>
)

export default ChooseTags
