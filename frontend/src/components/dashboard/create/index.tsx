'use client'

import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { BtnLoading, FieldsLoading } from '../loading'
import { create, defaultValues, resolver, type ICreate } from './config'

const FormFields = dynamic(() => import('./input'), { ssr: false, loading: FieldsLoading })
const FormBtn = dynamic(() => import('../submit'), { ssr: false, loading: BtnLoading })

const CreateForm: React.FC = () => {
  const form = useForm<ICreate>({ resolver, defaultValues })
  const isPending = form.formState.isSubmitting
  const { push } = useRouter()

  const handleReset = () => form.reset(defaultValues)
  const handleSubmit = form.handleSubmit((data: ICreate) =>
    create(data)
      .then(() => {
        handleReset()
        push('/dashboard')
      })
      .catch(console.error)
  )

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <FormFields form={form} isPending={isPending} />

        <FormBtn btnText="Create" isPending={isPending} handleReset={handleReset} />
      </form>
    </Form>
  )
}

export default CreateForm
