'use client'

import { Button, Form, Input, LoadingSpinner, Textarea } from '@/components/ui'
import { useForm } from 'react-hook-form'

import Field from './Field'
import { CreateFormValues, defaultValues, resolver } from './utils'
import { PlusIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const CreateForm: React.FC = () => {
  const form = useForm<CreateFormValues>({ resolver, defaultValues })

  const onSubmit = async (values: CreateFormValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Field name="name" control={form.control}>
          {(field) => <Input placeholder={`input your ${field.name}`} {...field} />}
        </Field>

        <Field name="image" control={form.control}>
          {(field) => <Input type="file" accept="image/*" onChange={(e: any) => field.onChange(e.target.files[0])} />}
        </Field>

        <Field name="description" control={form.control}>
          {(field) => <Textarea placeholder={`input your ${field.name}`} {...field} />}
        </Field>

        <Field name="price" control={form.control}>
          {(field) => <Input type="number" placeholder={`input your ${field.name}`} {...field} />}
        </Field>

        <Field name="stock" control={form.control}>
          {(field) => <Input type="number" placeholder={`input your ${field.name}`} {...field} />}
        </Field>

        <Button variant="outline" type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <LoadingSpinner />} Create
        </Button>
      </form>
    </Form>
  )
}

export default CreateForm
