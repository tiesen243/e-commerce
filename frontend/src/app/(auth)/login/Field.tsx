import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'

interface Field {
  control: any
  item: string
}
export const Field: React.FC<Field> = ({ control, item }) => (
  <FormField
    name={item}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="capitalize">{item}</FormLabel>
        <FormControl>
          <Input placeholder={`Enter your ${item}`} type={item} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
