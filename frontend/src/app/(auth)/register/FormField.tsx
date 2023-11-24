import { Checkbox, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Label } from '@/components/ui'
import { RegisterType } from './utils'

interface FormChildProps {
  item: string
  label: string
  control: any
  type: string
}

export const FormChild: React.FC<FormChildProps> = ({ item, label, control, type }) => (
  <FormField
    name={item as keyof RegisterType}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...field} type={type} placeholder={`Enter your ${label.toLowerCase()}`} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export const AcceptTerms: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" required />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
)
