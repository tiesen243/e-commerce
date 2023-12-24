import { UseFormReturn } from 'react-hook-form'

import { DragAndDrop } from '@/components/drag-drop'
import { Fields } from '@/components/fields'
import MultiSelect from '@/components/multi-select'
import CustomSelect from '@/components/select'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Category, Tag } from '@/types/enum'
import { ICreate } from './config'

interface Props {
  form: UseFormReturn<ICreate>
  isPending: boolean
}

const CreateFields = Fields<ICreate>
const FormFields: React.FC<Props> = ({ form, isPending }) => (
  <CardContent className="space-y-4">
    <CreateFields name="name" control={form.control}>
      {(field) => <Input {...field} disabled={isPending} />}
    </CreateFields>

    <CreateFields name="description" control={form.control}>
      {(field) => <Textarea {...field} disabled={isPending} />}
    </CreateFields>

    <CreateFields name="image" control={form.control}>
      {(field) => <DragAndDrop {...field} disabled={isPending} />}
    </CreateFields>

    <CreateFields name="price" control={form.control}>
      {(field) => <Input {...field} type="number" disabled={isPending} />}
    </CreateFields>

    <CreateFields name="stock" control={form.control}>
      {(field) => <Input {...field} type="number" disabled={isPending} />}
    </CreateFields>

    <CreateFields name="category" control={form.control}>
      {(field) => (
        <CustomSelect
          onValueChange={field.onChange as () => void}
          value={field.value}
          data={Object.values(Category)}
          disabled={isPending}
        />
      )}
    </CreateFields>

    <CreateFields name="tags" control={form.control}>
      {(field) => (
        <MultiSelect
          onChange={field.onChange as () => void}
          value={field.value}
          data={Object.values(Tag)}
        />
      )}
    </CreateFields>
  </CardContent>
)

export default FormFields
