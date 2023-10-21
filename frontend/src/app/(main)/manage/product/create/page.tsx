'use client'

import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { CustomSelect, CustomSelectTags, Loading, StyledTextField } from '@/components'
import { Category, Prod } from '@/types/product.type'
import { uploadImage } from '@/utils/firebase'
import { ErrorToast, SuccessToast } from '@/utils/notify'

const Page: NextPage = () => {
  const { data: user } = useSession()
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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0].size > 5 * 1024 * 1024) return ErrorToast('Image size must be less than 5MB')
    else if (!acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/)) return ErrorToast('Image must be .jpg or .png or .jpeg')
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
    setIsLoading(true)
    if (user?.token === undefined) return ErrorToast('You must login first')
    const url = await uploadImage(prod.image, prod.name, 'product')

    const res = await fetch('/api/v1/product/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
      body: JSON.stringify({ ...prod, image: url }),
    })
    const { message } = await res.json()
    if (res.status !== 201) {
      setIsLoading(false)
      ErrorToast(message.join(', '))
    } else {
      SuccessToast('Product created successfully')
      push('/manage/product')
    }
  }

  return (
    <>
      <Button variant="outlined" className="after:content-['back'] after:ml-2" color="info" onClick={() => back()}>
        <ArrowBackIosNewRounded fontSize="small" />
      </Button>

      <Box className="flex flex-col gap-4" component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h1" textAlign="center" marginBottom={4}>
          Create New Product
        </Typography>

        <StyledTextField
          required
          label="Name"
          value={prod.name}
          onChange={(e) => setProd({ ...prod, name: e.target.value })}
        />

        <Box className="flex justify-between items-center border-2 border-dashed border-gray-400 rounded-md p-4">
          <Button variant="contained" color="info" component="label">
            Choose image <input onChange={getInputProps().onChange} type="file" hidden />
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

        <CustomSelectTags data={prod} setData={setProd} />

        <Button variant="outlined" color="info" type="submit">
          Create
        </Button>
      </Box>

      {isLoading && <Loading text="Creating product..." />}
    </>
  )
}

export default Page
