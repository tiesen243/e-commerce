'use client'

import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

import { DragAndDrop, Loading, MarkdownEditor, MultiSelect, Select } from '@/components'
import { ManageContext } from '@/contexts'
import { Category, CreateProduct, Tag } from '@/lib'
import { FormError, StyledTextField } from '../utils'
import createProduct from './actions'

const cate: string[] = Object.values(Category)
const tags: string[] = Object.values(Tag)

interface FormStatus {
  isCreating: boolean
  error: string | string[]
}

const Page: NextPage = () => {
  const { mutate, update, token } = useContext(ManageContext)

  const [formData, setFormData] = useState<CreateProduct>(initFormData)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isCreating: false,
    error: '',
  })

  const { back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ isCreating: true, error: '' })
    if (!token) return
    await update({})
    const res = await createProduct(formData, token)
    if (res) setFormStatus({ isCreating: false, error: res })
    else {
      mutate()
      back()
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        Create Product
      </Typography>

      <StyledTextField
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <DragAndDrop name="image" setValue={(value: File) => setFormData((prev) => ({ ...prev, image: value }))} />

      <MarkdownEditor
        required
        label="Description"
        value={formData.description}
        setValue={(value: string) => setFormData({ ...formData, description: value })}
      />

      <StyledTextField
        label="Price"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
      />

      <StyledTextField
        label="Stock"
        type="number"
        value={formData.stock}
        onChange={(e) => setFormData({ ...formData, stock: +e.target.value })}
      />

      <Select
        required
        data={cate}
        label="Category"
        value={formData.category}
        setValue={(value: Category) => setFormData({ ...formData, category: value })}
      />

      <MultiSelect
        required
        data={tags}
        label="Tags"
        value={formData.tags}
        setValue={(value: Tag[]) => setFormData({ ...formData, tags: value })}
      />

      <FormError error={formStatus.error} />

      <Button variant="contained" fullWidth className="btn" type="submit">
        Create new product
      </Button>
      {formStatus.isCreating && <Loading text="Creating..." />}
    </Box>
  )
}

export default Page

const initFormData: CreateProduct = {
  name: '',
  description: '',
  image: null,
  price: 0,
  stock: 0,
  category: Category.Other,
  tags: [],
}
