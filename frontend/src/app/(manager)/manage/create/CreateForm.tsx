'use client'

import { DragAndDrop } from '@/components/DragAndDrop'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components/ui'
import { Category, Tag } from '@/types/product'
import { useForm } from 'react-hook-form'
import { CreateFormValues, defaultValues, resolver } from './utils'

const CreateForm: React.FC = () => {
  const form = useForm<CreateFormValues>({ resolver, defaultValues })

  const onSubmit = async (values: CreateFormValues) => {
    console.log(values)
    const res = await fetch('/api/product/create', {
      method: 'POST',
      body: JSON.stringify(values),
    }).then((res) => res.json())

    console.log(res)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder={`Enter your ${field.name}`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{field.name}</FormLabel>
              <FormControl>
                <Textarea placeholder={`Enter your ${field.name}`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{field.name}</FormLabel>
              <FormControl>
                <DragAndDrop name={field.name} setValues={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {['price', 'stock'].map((name, idx: number) => (
          <FormField
            key={idx}
            control={form.control}
            name={name as 'price' | 'stock'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                  <Input type="number" placeholder={`Enter product's ${field.name}`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{field.name}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${field.name}`} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(Category).map((category, idx) => (
                    <SelectItem key={idx} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => {
            const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
              const values = Array.from(e.target.selectedOptions, (option) => option.value)
              field.onChange(values)
            }
            return (
              <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                  <Input asChild className="h-24">
                    <select {...field} multiple onChange={onChange}>
                      {Object.values(Tag).map((tag, idx) => (
                        <option key={idx} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <Button variant="outline" type="submit" className="w-full">
          Create
        </Button>
      </form>
    </Form>
  )
}

export default CreateForm
