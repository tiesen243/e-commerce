import { DragAndDrop } from '@/components/drag-drop'
import { Fields } from '@/components/fields'
import MultiSelect from '@/components/multi-select'
import Select from '@/components/select'
import { CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { Category, Tag } from '@/types/enum'
import { UseFormReturn } from 'react-hook-form'

import { type IEdit } from './config'

interface Props {
  form: UseFormReturn<IEdit>
  isPending: boolean
  preview: string
}

const EditFields = Fields<IEdit>
const FormFields: React.FC<Props> = ({ form, isPending, preview }) => (
  <CardContent className="space-y-4">
    <EditFields name="description" control={form.control}>
      {(field) => <Textarea {...field} disabled={isPending} />}
    </EditFields>

    <EditFields name="available" control={form.control}>
      {(field) => <Checkbox className="ml-2" checked={field.value} disabled={isPending} />}
    </EditFields>

    <EditFields name="saleOffPercent" control={form.control}>
      {({ value, onChange }) => (
        <Slider
          min={0}
          max={100}
          step={1}
          defaultValue={[value]}
          onValueChange={(vals) => {
            onChange(vals[0] as any)
          }}
          disabled={isPending}
        />
      )}
    </EditFields>

    <EditFields name="image" control={form.control}>
      {(field) => <DragAndDrop {...field} previewImg={preview} disabled={isPending} />}
    </EditFields>

    <EditFields name="price" control={form.control}>
      {(field) => <Input {...field} type="number" disabled={isPending} />}
    </EditFields>

    <EditFields name="stock" control={form.control}>
      {(field) => <Input {...field} type="number" disabled={isPending} />}
    </EditFields>

    <EditFields name="category" control={form.control}>
      {(field) => (
        <Select
          onValueChange={field.onChange as () => void}
          value={field.value}
          data={Object.values(Category)}
          disabled={isPending}
        />
      )}
    </EditFields>

    <EditFields name="tags" control={form.control}>
      {(field) => (
        <MultiSelect
          onChange={field.onChange as () => void}
          value={field.value}
          data={Object.values(Tag)}
        />
      )}
    </EditFields>
  </CardContent>
)

export default FormFields
