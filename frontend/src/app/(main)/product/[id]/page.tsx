'use client'

import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import CustomSelect from '@/components/CustomSelect'
import StyledTextField from '@/components/StyledTextField'
import { Category, Prod } from '@/types/product.type'
import { deleteImage, uploadImage } from '@/utils/firebase'

import SelectTags from '@/components/SelectTags'
import { ErrorToast, SuccessToast } from '@/utils/notify'
import { getCookie } from 'cookies-next'
import { useParams, useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'

const Page: NextPage = () => {
  const { id } = useParams()
  const [prod, setProd] = useState<Prod>({
    name: '',
    description: '',
    image: null,
    price: 0,
    stock: 0,
    category: Category.Other,
    tags: [],
  })
  const [preview, setPreview] = useState<string | null>(null)
  const [isChange, setIsChange] = useState<boolean>(false)
  const [oldImage, setOldImage] = useState<string>('')
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0].size > 5 * 1024 * 1024) return ErrorToast('Image size must be less than 5MB')
    else if (!acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/)) return ErrorToast('Image must be .jpg or .png')
    else {
      const file = new FileReader()
      file.onload = () => setPreview(file.result as string)
      file.readAsDataURL(acceptedFiles[0])
      setProd((prev) => ({ ...prev, image: acceptedFiles[0] }))
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const { push, back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isChange) deleteImage(oldImage)
    const url = await uploadImage(prod.image, prod.name)
    console.log(url)

    const res = await fetch(`/api/product/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getCookie('token')}` },
      body: JSON.stringify({ ...prod, image: url, updatedAt: new Date() }),
    })
    if (res.status !== 204) ErrorToast('Something went wrong')
    else {
      SuccessToast('Product created successfully')
      push('/product')
    }
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/product/${id}`)
      const { data } = await res.json()
      setProd(data)
      setPreview(data.image)
      setOldImage(data.name)
    }
    getData()
  }, [])

  return (
    <Box className="flex flex-col gap-4" component="form" autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="h1" textAlign="center" marginBottom={4}>
        Edit Product {prod.name}
      </Typography>

      <StyledTextField
        required
        label="Name"
        value={prod.name}
        onChange={(e) => setProd({ ...prod, name: e.target.value })}
      />

      <section
        className="flex justify-between items-center border-2 border-dashed border-gray-400 rounded-md p-4"
        {...getRootProps()}
      >
        <input hidden {...getInputProps} />
        {isDragActive ? (
          <Typography variant="subtitle2" className="ml-4">
            Drop image here...
          </Typography>
        ) : (
          <Typography variant="subtitle2" className="ml-4">
            Drag image here or click to select image
          </Typography>
        )}

        <img src={preview || ''} alt='preview' className="w-32" />
      </section>

      <StyledTextField
        label="Description"
        value={prod.description}
        onChange={(e) => setProd({ ...prod, description: e.target.value })}
        required
      />
      <StyledTextField
        label="Price"
        type="number"
        value={prod.price}
        onChange={(e) => setProd({ ...prod, price: Number(e.target.value) })}
        required
      />
      <StyledTextField
        label="Stock"
        type="number"
        value={prod.stock}
        onChange={(e) => setProd({ ...prod, stock: Number(e.target.value) })}
        required
      />

      <CustomSelect
        label="Category"
        data={Object.values(Category)}
        value={prod.category}
        onChange={(e) => {
          setProd({ ...prod, category: e.target.value as Category })
        }}
        required
      />

      <SelectTags data={prod} setData={setProd} />

      <Button variant="contained" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  )
}

export default Page
