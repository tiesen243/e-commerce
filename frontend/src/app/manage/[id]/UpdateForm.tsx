'use client'

import { NextPage } from 'next'
import { useState } from 'react'

import { BackBtn, Checkbox, DragAndDrop, Loading, MarkdownEditor, MultiSelect, Select, Slider } from '@/components'
import { Category, IProduct, Tag, showSuccessToast } from '@/lib'
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import updateProduct from './updateProduct'

interface Props {
  product: IProduct
}
const cate: string[] = Object.values(Category)
const tags: string[] = Object.values(Tag)
const UpdateForm: NextPage<Props> = ({ product }) => {
  const { token } = useSession().data || {}

  const [formData, setFormData] = useState<IProduct>(product)
  const [error, setError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await updateProduct(formData, token)
    if (res.status === 204) {
      showSuccessToast(res.message[0])
      push('/manage')
    } else {
      setError(res.message)
      setIsLoading(false)
    }
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
          preview={typeof product.image === 'string' ? product.image : ''}
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

        {error && (
          <FormHelperText error>
            {error.map((err, i) => (
              <p key={i}>{`* ${err}`}</p>
            ))}
          </FormHelperText>
        )}

        <Button variant="contained" fullWidth className="btn" type="submit">
          Update Product
        </Button>
      </Box>

      {isLoading && <Loading text="Updating..." />}
    </>
  )
}

export default UpdateForm
