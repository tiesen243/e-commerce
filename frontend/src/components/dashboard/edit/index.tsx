'use client'

import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'
import type { IProduct } from '@/types/product'
import { BtnLoading, FieldsLoading } from '../loading'
import { IEdit, resolver, edit } from './config'
import { useRouter } from 'next/navigation'

const FormFields = dynamic(() => import('./input'), { ssr: false, loading: FieldsLoading })
const FormBtn = dynamic(() => import('../submit'), { ssr: false, loading: BtnLoading })

const EditForm: React.FC<{ product: IProduct }> = ({ product }) => {
  const form = useForm<IEdit>({ resolver, defaultValues: { ...product, image: null } })
  const { push } = useRouter()

  const onSubmit = form.handleSubmit(async (data: IEdit) => {
    await edit(data, product)
    push('/dashboard')
  })

  const isPending = form.formState.isSubmitting
  const preview = product.image
  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <FormFields form={form} isPending={isPending} preview={preview} />

        <FormBtn btnText="Save Changes" isPending={isPending} handleReset={form.reset} />
      </form>
    </Form>
  )
}

export default EditForm
