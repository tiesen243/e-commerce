import { Fields } from '@/components/comp/fields'
import { CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { UseFormReturn } from 'react-hook-form'
import { type IEdit } from './config'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { DragAndDrop } from '@/components/comp/drag-drop'
import { Input } from '@/components/ui/input'
import CustomSelect from '@/components/comp/customSelect'
import CustomMultiSelect from '@/components/comp/customMultiSelect'
import { Category, Tag } from '@/types/enum'

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
        <CustomSelect
          onValueChange={field.onChange as () => void}
          value={field.value}
          data={Object.values(Category)}
          disabled={isPending}
        />
      )}
    </EditFields>

    <EditFields name="tags" control={form.control}>
      {(field) => (
        <CustomMultiSelect
          onChange={field.onChange as () => void}
          value={field.value}
          data={Object.values(Tag)}
        />
      )}
    </EditFields>
  </CardContent>
)

export default FormFields
