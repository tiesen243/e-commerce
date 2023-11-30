import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import DragAndDrop from '@/components/DragAndDrop'
import { Button, Checkbox, Form, Input, LoadingSpinner, Textarea, useToast } from '@/components/ui'
import { deleteImage, uploadImage } from '@/lib/firebase'
import { UpdateFormValues, defaultValues, resolver } from './config'

import Fields, { FieldsProps } from '@/components/Fields'
const UpdateField = Fields as React.FC<FieldsProps<UpdateFormValues>>

import SelectCate from './SelectCate'
import SelectTags from './SelectTags'

interface Props {
  data: UpdateFormValues
}

const UpdateForm: React.FC<Props> = ({ data }) => {
  const toast = useToast().toast
  const { push } = useRouter()

  const form = useForm<UpdateFormValues>({ resolver, defaultValues: data })

  const onSubmit = async (values: UpdateFormValues) => {
    const name = ''
    try {
      const image = await uploadImage(values.image, name, 'product')
      await axios.post('/api/product/create', { ...values, image })
      toast({ description: 'Product created successfully', variant: 'success' })
      push('/management/products')
    } catch (err: any) {
      const message = err.response.data.message
      await deleteImage(name, 'product')
      toast({ description: message, variant: 'destructive' })
    }
  }
  const isDisabled: boolean = form.formState.isSubmitting

  console.log(data.image)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <UpdateField name="available" control={form.control}>
          {(field) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange as any}
              className="ml-4"
            />
          )}
        </UpdateField>

        <UpdateField name="description" control={form.control}>
          {(field) => (
            <Textarea
              {...field}
              placeholder={`Enter product's ${field.name}`}
              disabled={isDisabled}
            />
          )}
        </UpdateField>

        <UpdateField name="image" control={form.control}>
          {(field) => <DragAndDrop field={field} previewImg={String(data.image)} />}
        </UpdateField>

        <UpdateField name="price" control={form.control}>
          {(field) => (
            <Input
              {...field}
              type="number"
              placeholder={`Enter product's ${field.name}`}
              disabled={isDisabled}
            />
          )}
        </UpdateField>

        <UpdateField name="stock" control={form.control}>
          {(field) => (
            <Input
              {...field}
              type="number"
              placeholder={`Enter product's ${field.name}`}
              disabled={isDisabled}
            />
          )}
        </UpdateField>

        <UpdateField name="category" control={form.control}>
          {(field) => <SelectCate field={field} disabled={isDisabled} />}
        </UpdateField>

        <SelectTags control={form.control} disabled={isDisabled} />

        <Button type="submit" disabled={isDisabled} className="flex w-full justify-center gap-2">
          {isDisabled && <LoadingSpinner />}
          Update
        </Button>
      </form>
    </Form>
  )
}

export default UpdateForm
