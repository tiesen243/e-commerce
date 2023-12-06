'use client'

import { useForm } from 'react-hook-form'
import axios from 'axios'

import { DragAndDrop } from '@/components/comp/dragndrop'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { toast } from '@/components/ui/use-toast'
import IUser from '@/interfaces/user.interface'
import { deleteImage, uploadImage } from '@/lib/firebase'
import { EditFields, Footer, Header, IEdit, Trigger, defaultValues, resolver } from './config'

interface Props {
  user: IUser
  update: ({}) => void
}
const EditProfile: React.FC<Props> = ({ user, update }) => {
  const form = useForm<IEdit>({ resolver, defaultValues: defaultValues(user) })
  const onSubmit = async (data: IEdit) => {
    try {
      let url: string = user.avatar
      if (typeof data.avatar !== 'string') url = await uploadImage(data.avatar, user._id, 'avatar')

      await axios.patch('/api/user/edit', { userName: data.userName, avatar: url })
      update({})
      toast({
        title: 'Update Success',
        description: 'Your profile has been updated',
        variant: 'success',
      })
    } catch (e: any) {
      await deleteImage(user._id, 'avatar')
      toast({ title: 'Update Fail', description: e.response.data.message, variant: 'destructive' })
    }
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
