import { FieldsProps } from '@/components/Fields'
import Tooltip from '@/components/Tooltip'
import { Checkbox, FormControl, FormField, FormItem, FormLabel } from '@/components/ui'
import { tags } from '@/lib/constants'
import { Tag } from '@/types/product'
import { UpdateFormValues } from './config'

interface Props {
  control: FieldsProps<UpdateFormValues>['control']
  disabled?: boolean
}

const SelectTags: React.FC<Props> = ({ control, disabled = false }) => (
  <section className="grid grid-cols-4 gap-1">
    {tags.map((tag: string, idx: number) => (
      <FormField
        key={idx}
        control={control}
        name="tags"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                disabled={disabled}
                checked={field.value.includes(tag as Tag)}
                onCheckedChange={(checked) => {
                  return checked
                    ? field.onChange([...field.value, tag])
                    : field.onChange(field.value?.filter((value) => value !== tag))
                }}
              />
            </FormControl>

            <Tooltip text={tag}>
              <FormLabel>{tag.length > 10 ? tag.slice(0, 10) + '...' : tag}</FormLabel>
            </Tooltip>
          </FormItem>
        )}
      />
    ))}
  </section>
)

export default SelectTags
