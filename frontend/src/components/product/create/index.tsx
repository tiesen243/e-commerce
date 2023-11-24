'use client'

import { Button, Form, Input, LoadingSpinner, Textarea } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Category, Tag } from '@/types/product'
import Field from './Field'

const CreateForm: React.FC = () => {
  const form = useForm<CreateFormValues>({ resolver: zodResolver(createFormSchema), defaultValues })

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

const createFormSchema = z.object({
  name: z.string().min(4).max(255),
  image: z.instanceof(File).nullable(),
  description: z.string().min(4).max(255),
  price: z.string().transform((val) => Number(val)),
  stock: z.string().transform((val) => Number(val)),
  category: z.nativeEnum(Category),
  tags: z.array(z.nativeEnum(Tag)),
})

export type CreateFormValues = z.infer<typeof createFormSchema>
const defaultValues: CreateFormValues = {
  name: '',
  image: null,
  description: '',
  price: 0,
  stock: 0,
  category: Category.Other,
  tags: [],
}
