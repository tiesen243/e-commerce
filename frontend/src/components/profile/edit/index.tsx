'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { DragAndDrop } from '@/components/comp/dragndrop'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import Footer from '../footer'
import Header from '../header'
import Trigger from '../trigger'
import { EditFields, IEdit, Props, defaultValues, resolver, updateProfile } from './config'
import { EditIcon } from 'lucide-react'

const EditProfile: React.FC<Props> = ({ user, update }) => {
  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<IEdit>({ resolver, defaultValues: defaultValues(user) })
  const onSubmit = async (data: IEdit) => await updateProfile({ data, user, update, setOpen })

  const isPending = form.formState.isSubmitting
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Trigger>
        <EditIcon size={16} className="mr-2" /> Edit Profile
      </Trigger>

      <DialogContent>
        <Header
          title="Edit Profile"
          description="Change information about yourself on this page."
        />

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
