'use client'

import { NextPage } from 'next'

import { BackBtn, DragAndDrop, Loading, MarkdownEditor, MultiSelect, Select } from '@/components'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Category, CreateProduct, Tag } from '@/lib'
import createProduct from './createProduct'
import { useSession } from 'next-auth/react'

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

  const { back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsCreating(true)
    if (!token) return
    const { data, error } = await createProduct(formData, token)
    if (error) {
      setError(error)
      setIsCreating(false)
    } else back()
  }

  if (isCreating) return <Loading text="Creating product..." />

  return (
    <>
      <BackBtn />
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

        <DragAndDrop name="image" setValue={(value: File) => setFormData((prev) => ({ ...prev, image: value }))} />

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
    </>
  )
}

export default Page
