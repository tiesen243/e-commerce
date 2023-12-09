import { FieldValues, UseFormReturn } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import type IFields from '@/interfaces/fields.interface'

export interface FieldsProps<T extends FieldValues> {
  control: UseFormReturn<T>['control']
  name: keyof T
  children: (field: IFields) => React.ReactNode
}

export const Fields: React.FC<FieldsProps<any>> = ({ children, control, name }) => (
  <FormField
    control={control}
    name={name.toString()}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="capitalize">{field.name.replace(/([A-Z])/g, ' $1')}</FormLabel>
        <FormControl>{children(field)}</FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
