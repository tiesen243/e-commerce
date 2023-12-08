'use client'

import { LockIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import Footer from '@/components/comp/form-footer'
import Header from '../header'
import Trigger from '../trigger'
import { IPass, PassFields, changePassword, defaultValues, resolver } from './config'

const EditProfile: React.FC = () => {
  const form = useForm<IPass>({ resolver, defaultValues: defaultValues })

  const isPending = form.formState.isSubmitting
  return (
    <Dialog>
      <Trigger>
        <LockIcon size={16} className="mr-2" /> Change Password
      </Trigger>

      <DialogContent>
        <Header title="Change Password" description="Change your password on this page." />

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(changePassword)}>
            {Object.keys(defaultValues).map((key) => (
              <PassFields key={key} name={key as keyof IPass} control={form.control}>
                {(fields) => <Input {...fields} type="password" disabled={isPending} />}
              </PassFields>
            ))}

            <Footer btnText="Save Changes" isPending={isPending} cancel />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditProfile
