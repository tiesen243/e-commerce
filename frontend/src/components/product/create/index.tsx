'use client'

import { Button, Form, Input, LoadingSpinner, Textarea } from '@/components/ui'
import { useForm } from 'react-hook-form'

import DragAndDrop from '@/components/DragAndDrop'
import { CreateFormValues, defaultValues, resolver } from './config'
import Fields, { FieldsProps } from '@/components/Fields'

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

        <CreateField name="price" control={form.control}>
          {(field) => <Input type="number" placeholder={`input your ${field.name}`} {...field} />}
        </CreateField>

        <CreateField name="stock" control={form.control}>
          {(field) => <Input type="number" placeholder={`input your ${field.name}`} {...field} />}
        </CreateField>

        <Button variant="outline" type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <LoadingSpinner />} Create
        </Button>
      </form>
    </Form>
  )
}

export default CreateForm
