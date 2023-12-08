'use client'

import { useForm } from 'react-hook-form'

import { DragAndDrop } from '@/components/comp/drag-drop'
import Footer from '@/components/comp/form-footer'
import Header from '@/components/dashboard/header'
import { Card, CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CreateFields, ICreate, create, defaultValues, resolver } from './config'
import SelectCate from './selectCate'
import ChooseTags from './chooseTags'

const CreateProduct: React.FC = () => {
  const form = useForm<ICreate>({ resolver, defaultValues })

  const isPending = form.formState.isSubmitting
  return (
    <Card>
      <Header title="Create product" description="Create a new product" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(create)} autoFocus={false}>
          <CardContent className="mb-4 space-y-4">
            <CreateFields name="name" control={form.control}>
              {(fields) => <Input {...fields} disabled={isPending} />}
            </CreateFields>

            <CreateFields name="description" control={form.control}>
              {(fields) => <Textarea {...fields} disabled={isPending} />}
            </CreateFields>

            <CreateFields name="image" control={form.control}>
              {(fields) => <DragAndDrop {...fields} disabled={isPending} />}
            </CreateFields>

            <CreateFields name="price" control={form.control}>
              {(fields) => <Input {...fields} type="number" disabled={isPending} />}
            </CreateFields>

            <CreateFields name="stock" control={form.control}>
              {(fields) => <Input {...fields} type="number" disabled={isPending} />}
            </CreateFields>

            <CreateFields name="category" control={form.control}>
              {(fields) => <SelectCate {...fields} disabled={isPending} />}
            </CreateFields>

            <CreateFields name="tags" control={form.control}>
              {(fields) => <ChooseTags {...fields} disabled={isPending} />}
            </CreateFields>
          </CardContent>

          <Footer btnText="Create" isPending={isPending} cancel />
        </form>
      </Form>
    </Card>
  )
}

export default CreateProduct
