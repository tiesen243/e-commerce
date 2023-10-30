'use client'

import { NextPage } from 'next'

import { DragAndDrop, Loading, MarkdownEditor, MultiSelect, Select } from '@/components'
import { Category, CreateProduct, Tag } from '@/types/product.type'
import { showErrorToast, showSuccessToast, uploadImage } from '@/utils'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const initFormData: CreateProduct = {
  name: '',
  description: '',
  image: null,
  price: 0,
  stock: 0,
  category: Category.Other,
  tags: [],
}
const cate: string[] = Object.values(Category)
const tags: string[] = Object.values(Tag)

const Page: NextPage = () => {
  const { token } = useSession().data || {}
  const [formData, setFormData] = useState<CreateProduct>(initFormData)
  const [error, setError] = useState<string>('')
  const [isCreating, setIsCreating] = useState<boolean>(false)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsCreating(true)
    if (!formData.image) showErrorToast('Please upload an image')
    const code: number = Math.floor(Math.random() * 900000) + 100000
    const url: string = await uploadImage(formData.image, code.toString(), 'product')
    const res = await fetch('/api/v1/product/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...formData, image: url, code }),
    })
    if (res.status === 201) {
      showSuccessToast('Product created successfully')
      push('/manage/product')
    } else {
      const { message } = await res.json()
      showErrorToast('Something went wrong')
      setError(message)
      setIsCreating(false)
    }
  }

  if (isCreating) return <Loading text="Creating product..." />

  return (
    <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        Create Product
      </Typography>

      <TextField
        required
        fullWidth
        color="secondary"
        label="Name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <DragAndDrop name="image" setValue={(value: File) => setFormData({ ...formData, image: value })} />

      <MarkdownEditor
        required
        label="Description"
        value={formData.description}
        setValue={(value: string) => setFormData({ ...formData, description: value })}
      />

      <TextField
        required
        fullWidth
        label="Price"
        type="number"
        name="price"
        color="secondary"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
      />

      <TextField
        required
        fullWidth
        label="Stock"
        type="number"
        name="stock"
        color="secondary"
        value={formData.stock}
        onChange={(e) => setFormData({ ...formData, stock: +e.target.value })}
      />

      <Select
        required
        data={cate}
        label="Category"
        name="category"
        value={formData.category}
        setValue={(value: Category) => setFormData({ ...formData, category: value })}
      />

      <MultiSelect
        required
        data={tags}
        label="Tags"
        name="tags"
        value={formData.tags}
        setValue={(value: Tag[]) => setFormData({ ...formData, tags: value })}
      />

      {error && <Typography color="error">* {error}</Typography>}

      <Button variant="contained" fullWidth className="btn" type="submit">
        Submit
      </Button>
    </Box>
  )
}

export default Page
