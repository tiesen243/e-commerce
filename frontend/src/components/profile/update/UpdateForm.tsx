import { Button, DialogFooter, Form, Input, useToast } from '@/components/ui'
import React from 'react'
import { useForm } from 'react-hook-form'

import { FormValues, Props, resolver } from './config'
import Fields, { FieldsProps } from '@/components/Fields'
import DragAndDrop from '@/components/DragAndDrop'
import { uploadImage } from '@/lib/firebase'
import axios from 'axios'

const UpdateFields = Fields as React.FC<FieldsProps<FormValues>>

const UpdateForm: React.FC<Props & { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  user,
  update,
  setIsOpen,
}) => {
  const toast = useToast().toast
  const form = useForm<FormValues>({
    resolver,
    defaultValues: {
      userName: user.userName,
      avatar: null,
    },
  })
  const onSubmit = async (data: FormValues) => {
    try {
      let url: string = user.avatar
      if (data.avatar) url = await uploadImage(data.avatar, user._id, 'avatar')

      await axios.patch('/api/auth/updateInfo', { userName: data.userName, avatar: url })
      update({})
      setIsOpen(false)
      toast({
        title: 'Success',
        description: 'Your profile has been updated.',
        variant: 'success',
      })
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <UpdateFields name="userName" control={form.control}>
          {(field) => <Input placeholder={`input your ${field.name}`} {...field} />}
        </UpdateFields>

        <UpdateFields name="avatar" control={form.control}>
          {(field) => <DragAndDrop field={field} />}
        </UpdateFields>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export default UpdateForm
