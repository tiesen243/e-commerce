import { FieldValues, UseFormReturn } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { IFields } from '@/types/fields'

export interface FieldsProps<T extends FieldValues> {
  control: UseFormReturn<T>['control']
  name: keyof T
  children: (field: IFields) => React.ReactNode
}

export const Fields = <T extends FieldValues>({ children, control, name }: FieldsProps<T>) => (
  <FormField
    control={control}
    name={name as any}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="capitalize">{field.name.replace(/([A-Z])/g, ' $1')}</FormLabel>
        <FormControl>{children(field)}</FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
