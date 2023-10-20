'use client'

import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import CustomSelect from '@/components/CustomSelect'
import SelectTags from '@/components/SelectTags'
import StyledTextField from '@/components/StyledTextField'
import { Category, Prod } from '@/types/product.type'
import { deleteImage, uploadImage } from '@/utils/firebase'
import { ErrorToast, SuccessToast } from '@/utils/notify'

const Page: NextPage = () => {
  const { id } = useParams()
  const { data } = useSession()
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
      setIsChange(true)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const { back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isChange) deleteImage(oldImage)
    const url = isChange ? await uploadImage(prod.image, prod.name) : prod.image

    const res = await fetch(`/api/v1/product/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data?.token}` },
      body: JSON.stringify({ ...prod, image: url, updatedAt: new Date() }),
    })
    if (res.status !== 204) {
      const { message } = await res.json()
      ErrorToast(message.join(', '))
    } else {
      SuccessToast('Product updated successfully')
      back()
    }
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/v1/product/update/${id}`)
      const { data } = await res.json()
      setProd(data)
      setPreview(data.image)
      setOldImage(data.name)
    }
    getData()
  }, [])

  return (
    <Box className="flex flex-col gap-4" component="form" autoComplete="off" onSubmit={handleSubmit}>
      <Button variant="contained" color="info" component="a" className="flex" onClick={() => back()}>
        {'< Back'}
      </Button>

      <Typography variant="h1" textAlign="center" marginBottom={4}>
        Edit Product
      </Typography>

      <StyledTextField
        required
        label="Name"
        value={prod.name}
        onChange={(e) => setProd({ ...prod, name: e.target.value })}
      />

      <Box className="flex justify-between items-center border-2 border-dashed border-gray-400 rounded-md p-4">
        <Button variant="contained" color="info" component="label">
          Choose image <input hidden onChange={getInputProps().onChange} type="file" />
        </Button>

        <Box {...getRootProps()}>
          <input {...getInputProps} hidden />
          {isDragActive ? (
            <Typography variant="subtitle2" className="ml-4">
              Drop image here...
            </Typography>
          ) : (
            <Typography variant="subtitle2" className="ml-4">
              Or drag image here
            </Typography>
          )}
        </Box>
      </Box>
      {preview && <img src={preview} alt="preview" className="w-32" />}

      <StyledTextField
        label="Description"
        value={prod.description}
        onChange={(e) => setProd({ ...prod, description: e.target.value })}
        multiline
        rows={4}
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

      <Button variant="outlined" color="info" type="submit">
        Submit
      </Button>
    </Box>
  )
}

export default Page
