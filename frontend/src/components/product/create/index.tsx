import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import DragAndDrop from '@/components/DragAndDrop'
import { Button, Form, Input, LoadingSpinner, Textarea, useToast } from '@/components/ui'
import { uploadImage } from '@/lib/firebase'
import { CreateFormValues, defaultValues, resolver } from './config'

import Fields, { FieldsProps } from '@/components/Fields'
const CreateField = Fields as React.FC<FieldsProps<CreateFormValues>>

import SelectCate from './SelectCate'
import SelectTags from './SelectTags'

const CreateForm: React.FC = () => {
  const toast = useToast().toast
  const { push } = useRouter()
  const form = useForm<CreateFormValues>({ resolver, defaultValues })

  const onSubmit = async (values: CreateFormValues) => {
    try {
      const image = await uploadImage(
        values.image,
        values.name.toLowerCase().replace(/\s/g, '-'),
        'product'
      )
      await axios.post('/api/product/create', { ...values, image })

      toast({ description: 'Product created successfully', variant: 'success' })
      push('/management/products')
    } catch (err: any) {
      const message = err.response.data.message

      toast({ description: message, variant: 'destructive' })
    }
  }
  const isDisabled: boolean = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CreateField name="name" control={form.control}>
          {(field) => (
            <Input {...field} placeholder={`Enter product's ${field.name}`} disabled={isDisabled} />
          )}
        </CreateField>

        <CreateField name="description" control={form.control}>
          {(field) => (
            <Textarea
              {...field}
              placeholder={`Enter product's ${field.name}`}
              disabled={isDisabled}
            />
          )}
        </CreateField>

        <CreateField name="image" control={form.control}>
          {(field) => <DragAndDrop field={field} />}
        </CreateField>

        <CreateField name="price" control={form.control}>
          {(field) => (
            <Input
              {...field}
              type="number"
              placeholder={`Enter product's ${field.name}`}
              disabled={isDisabled}
            />
          )}
        </CreateField>

        <CreateField name="stock" control={form.control}>
          {(field) => (
            <Input
              {...field}
              type="number"
              placeholder={`Enter product's ${field.name}`}
              disabled={isDisabled}
            />
          )}
        </CreateField>

        <CreateField name="category" control={form.control}>
          {(field) => <SelectCate field={field} disabled={isDisabled} />}
        </CreateField>

        <SelectTags control={form.control} disabled={isDisabled} />

        <Button type="submit" disabled={isDisabled} className="flex w-full justify-center gap-2">
          {isDisabled && <LoadingSpinner />}
          Create
        </Button>
      </form>
    </Form>
  )
}

export default CreateForm
