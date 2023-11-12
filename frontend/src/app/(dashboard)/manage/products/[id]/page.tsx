'use client'

import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

import { BackBtn, Checkbox, DragAndDrop, Loading, MarkdownEditor, MultiSelect, Select, Slider } from '@/components'
import { ManageContext } from '@/contexts'
import { Category, IProduct, Tag } from '@/lib'
import { FormError, FormStatus, StyledTextField } from '../../utils'
import { getProductById, updateProduct } from './actions'

const cate: string[] = Object.values(Category)
const tags: string[] = Object.values(Tag)

interface Props {
  params: {
    id: string
  }
}

const Page: NextPage<Props> = ({ params }) => {
  const { mutate, update, token } = useContext(ManageContext)

  const [formData, setFormData] = useState<IProduct>(initialFormData)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isUpdating: false,
    error: '',
  })

  const { back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ isUpdating: true, error: '' })
    update({})
    const res = await updateProduct(formData, token)
    mutate()
    if (res) setFormStatus({ isUpdating: false, error: res })
    else back()
  }

  useEffect(() => {
    getProductById(params.id, setFormData)
  }, [params.id])

  return (
    formData && (
      <>
        <BackBtn />
        <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-8">
          <Typography variant="h3" textAlign="center" fontWeight="bold">
            Create Product
          </Typography>

          <StyledTextField
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <DragAndDrop
            name="image"
            preview={formData.image as string}
            setValue={(value: File) => setFormData((prev) => ({ ...prev, image: value }))}
          />

          <MarkdownEditor
            required
            label="Description"
            value={formData.description}
            setValue={(value: string) => setFormData({ ...formData, description: value })}
          />

          <StyledTextField
            label="Price"
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
          />

          <Slider
            color="secondary"
            label="Sale off percent"
            min={0}
            max={100}
            value={formData.saleOffPercent}
            onChange={(_e, value) => setFormData({ ...formData, saleOffPercent: value as number })}
          />

          <StyledTextField
            label="Stock"
            type="number"
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

          <FormError error={formStatus.error} />

          <Button variant="contained" fullWidth className="btn" type="submit">
            Update Product
          </Button>
        </Box>

        {formStatus.isUpdating && <Loading text="Updating..." />}
      </>
    )
  )
}

export default Page

const initialFormData: IProduct = {
  _id: '',
  code: 0,
  name: '',
  image: '',
  description: '',
  price: 0,
  saleOffPercent: 0,
  stock: 0,
  available: true,
  category: Category.Other,
  tags: [],
  userId: '',
  createdAt: new Date(),
  updatedAt: new Date(),
}
