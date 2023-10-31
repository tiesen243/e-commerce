'use client'

import { NextPage } from 'next'
import { useState } from 'react'

import { Category, IProduct, Tag, UpdateProduct } from '@/lib'
import { BackBtn, Checkbox, DragAndDrop, MarkdownEditor, MultiSelect, Select, Slider } from '@/components'
import { Box, Button, TextField, Typography } from '@mui/material'

interface Props {
  product: IProduct
}
const cate: string[] = Object.values(Category)
const tags: string[] = Object.values(Tag)
const UpdateForm: NextPage<Props> = ({ product }) => {
  const [formData, setFormData] = useState<UpdateProduct>(product as unknown as UpdateProduct)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }
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

        <DragAndDrop
          name="image"
          preview={product.image}
          setValue={(value: File) => setFormData((prev) => ({ ...prev, image: value }))}
        />

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

        <Slider
          color="secondary"
          label="Sale off percent"
          min={0}
          max={100}
          value={formData.saleOffPercent}
          onChange={(e, value) => setFormData({ ...formData, saleOffPercent: value as number })}
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

        <Checkbox
          label="Available"
          name="available"
          checked={formData.available}
          onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
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

        <Button variant="contained" fullWidth className="btn" type="submit">
          Submit
        </Button>
      </Box>
    </>
  )
}

export default UpdateForm
