import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui'
import Field from '@/types/field'
import { UseFormReturn } from 'react-hook-form'
import { CreateFormValues } from './utils'

interface FieldProps {
  control: UseFormReturn<CreateFormValues>['control']
  name: keyof CreateFormValues
  children: (field: Field) => React.ReactNode
}

const Field: React.FC<FieldProps> = ({ children, control, name }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="capitalize">{field.name}</FormLabel>
        <FormControl>{children(field)}</FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default Field
