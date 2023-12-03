'use client'

import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

import { toast } from '@/components/ui/use-toast'
import { uploadImage } from '@/lib/firebase'
import nextImport from '@/lib/nextImport'
import { FormValues, Props, defaultValues, resolver } from './config'

import { DragAndDrop } from '@/components/DragAndDrop'
import { FieldsProps } from '@/components/fields'
import { Button, DialogFooter, Form, Input } from '@/components/ui'

const Fields = nextImport('Fields')
const UpdateFields = Fields as React.FC<FieldsProps<FormValues>>

const UpdateForm: React.FC<Props> = ({ user, update, setIsOpen }) => {
  const form = useForm<FormValues>({ resolver, defaultValues: defaultValues(user) })

  const onSubmit = async (data: FormValues) => {
    try {
      let url: string = user.avatar
      if (data.avatar) url = await uploadImage(data.avatar, user._id, 'avatar')
      await axios.patch('/api/auth/updateInfo', { userName: data.userName, avatar: url })
      update({})
      setIsOpen && setIsOpen(false)
      toast({ title: 'Success', description: 'Your profile has been updated.', variant: 'success' })
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' })
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
