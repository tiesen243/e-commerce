'use client'

import { useForm } from 'react-hook-form'

import { DragAndDrop } from '@/components/comp/dragndrop'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import IUser from '@/interfaces/user.interface'
import { EditFields, Footer, Header, IEdit, Trigger, defaultValues, resolver } from './config'
import { delay } from '@/lib/utils'

const EditProfile: React.FC<{ user: IUser }> = ({ user }) => {
  const form = useForm<IEdit>({ resolver, defaultValues: defaultValues(user) })
  const onSubmit = async (data: IEdit) => {
    await delay(1000)
    console.log(data)
  }

  const isPending = form.formState.isSubmitting
  return (
    <Dialog>
      <Trigger />

      <DialogContent>
        <Header />

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <EditFields name="userName" control={form.control}>
              {(fields) => <Input {...fields} disabled={isPending} />}
            </EditFields>

            <EditFields name="avatar" control={form.control}>
              {(fields) => (
                <DragAndDrop {...fields} previewImg={user.avatar} disabled={isPending} />
              )}
            </EditFields>

            <Footer disabled={isPending} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditProfile
