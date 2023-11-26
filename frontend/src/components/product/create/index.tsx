import {
  Button,
  Form,
  Input,
  LoadingSpinner,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components/ui'
import { useForm } from 'react-hook-form'

import DragAndDrop from '@/components/DragAndDrop'
import Fields, { FieldsProps } from '@/components/Fields'
import { SelectContent } from '@radix-ui/react-select'
import { CreateFormValues, defaultValues, resolver } from './config'
import { Category } from '@/types/product'

const CreateField = Fields as React.FC<FieldsProps<CreateFormValues>>

const CreateForm: React.FC = () => {
  const form = useForm<CreateFormValues>({ resolver, defaultValues })

  const onSubmit = async (values: CreateFormValues) => {
    console.log(values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="z-10 space-y-4">
          <CreateField name="name" control={form.control}>
            {(field) => <Input placeholder={`input your ${field.name}`} {...field} />}
          </CreateField>
          Other
          <CreateField name="image" control={form.control}>
            {(field) => <DragAndDrop field={field} />}
          </CreateField>
          <CreateField name="description" control={form.control}>
            {(field) => <Textarea placeholder={`input your ${field.name}`} {...field} />}
          </CreateField>
          <CreateField name="category" control={form.control}>
            {(field) => (
              <Select onValueChange={() => field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product category" />
                </SelectTrigger>
                <SelectContent className="z-50">
                  {Object.keys(Category).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </CreateField>
          <CreateField name="price" control={form.control}>
            {(field) => (
              <Input type="number" placeholder={`input your ${field.name}`} {...field} />
            )}
          </CreateField>
          <CreateField name="stock" control={form.control}>
            {(field) => (
              <Input type="number" placeholder={`input your ${field.name}`} {...field} />
            )}
          </CreateField>
          <Button
            variant="outline"
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && <LoadingSpinner />} Create
          </Button>
        </form>
      </Form>
    </>
  )
}

export default CreateForm
