'use client'

import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { create, defaultValues, resolver, type ICreate } from './config'
import { Skeleton } from '@/components/ui/skeleton'

const FormFields = dynamic(() => import('./input'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      {Array.from({ length: 7 }).map((_, i) => (
        <section key={i}>
          <Skeleton className="mb-2 h-6 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </section>
      ))}
    </div>
  ),
})
const FormBtn = dynamic(() => import('./submit'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-end gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-20" />
      ))}
    </div>
  ),
})

const CreateForm: React.FC = () => {
  const form = useForm<ICreate>({ resolver, defaultValues })
  const isPending = form.formState.isSubmitting

  const handleReset = () => form.reset(defaultValues)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(create)}>
        <CardContent className="space-y-4">
          <FormFields form={form} isPending={isPending} />
        </CardContent>

        <FormBtn isPending={isPending} handleReset={handleReset} />
      </form>
    </Form>
  )
}

export default CreateForm
