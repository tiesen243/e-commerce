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

const CreateField = Fields as React.FC<FieldsProps<CreateFormValues>>

const CreateForm: React.FC = () => {
  const form = useForm<CreateFormValues>({ resolver, defaultValues })

  const onSubmit = async (values: CreateFormValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CreateField name="name" control={form.control}>
          {(field) => <Input placeholder={`input your ${field.name}`} {...field} />}
        </CreateField>

        <CreateField name="image" control={form.control}>
          {(field) => <DragAndDrop field={field} />}
        </CreateField>

        <CreateField name="description" control={form.control}>
          {(field) => <Textarea placeholder={`input your ${field.name}`} {...field} />}
        </CreateField>

        <CreateField name="category" control={form.control}>
          {(field) => (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="m@example.com">m@example.com</SelectItem>
                <SelectItem value="m@google.com">m@google.com</SelectItem>
                <SelectItem value="m@support.com">m@support.com</SelectItem>
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
  )
}

export default CreateForm
