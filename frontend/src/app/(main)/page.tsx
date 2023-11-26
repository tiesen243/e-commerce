'use client'
import {
  Form,
  FormField,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'
import { type NextPage } from 'next'
import { useForm } from 'react-hook-form'

const Page: NextPage = () => {
  const form = useForm()
  return (
    <div>
      <h1>Page</h1>
      <Form {...form}>
        <form>
          <FormField
            name="name"
            render={() => (
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
                <SelectContent className="z-50">
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default Page
