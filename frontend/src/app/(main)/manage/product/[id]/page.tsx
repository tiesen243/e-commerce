'use client'

import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  CustomCheckbox,
  CustomSelect,
  CustomSelectTags,
  CustomSlider,
  CustomTextField,
  DragAndDrop,
  Loading,
  MarkdownEditor,
} from '@/components'
import { Category, Prod } from '@/types/product.type'
import { deleteImage, showErrorToast, showSuccessToast, uploadImage } from '@/utils'

const Page: NextPage = () => {
  const { id } = useParams()
  const { token } = useSession().data || {}
  const [prod, setProd] = useState<Prod>({
    name: '',
    description: '',
    img: null,
    price: 0,
    stock: 0,
    category: Category.Other,
    tags: [],
    available: false,
    saleOffPercent: 0,
  })
  const [preview, setPreview] = useState<string>('')
  const [isChange, setIsChange] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    if (token === undefined) return showErrorToast('You must login first')
    if (isChange) deleteImage(prod.name, 'product')
    const url = isChange ? await uploadImage(prod.img, prod.name, 'product') : prod.img

    const res = await fetch(`/api/v1/product/update/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...prod, image: url }),
    })
    if (res.status !== 204) {
      const { message } = await res.json()
      showErrorToast(message.join(', '))
      setIsLoading(false)
    } else {
      showSuccessToast('Product updated successfully')
      back()
    }
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/v1/product/${id}`)
      const { data } = await res.json()
      setProd(data)
      setPreview(data.image)
      setIsLoading(false)
    }
    getData()
  }, [id])
  return (
    <>
      <Button variant="outlined" className="after:ml-2 after:content-['back']" color="info" onClick={() => back()}>
        <ArrowBackIosNewRounded fontSize="small" />
      </Button>

      <Box className="flex flex-col gap-4" component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h1" textAlign="center" marginBottom={4}>
          Edit Product
        </Typography>

        <CustomTextField
          disabled
          label="Name"
          value={prod.name}
          onChange={(e) => setProd({ ...prod, name: e.target.value })}
        />

        <DragAndDrop preview={preview} setProd={setProd} setIsChanged={setIsChange} />

        <CustomSlider label="Sale off" prod={prod} setProd={setProd} />

        <CustomCheckbox
          checked={prod.available}
          onChange={(e) => setProd({ ...prod, available: e.target.checked })}
          label="Available"
        />

        <MarkdownEditor
          label="Description"
          value={prod.description}
          setValue={(value) => setProd({ ...prod, description: value })}
        />

        <CustomTextField
          label="Price"
          type="number"
          value={prod.price}
          onChange={(e) => setProd({ ...prod, price: Number(e.target.value) })}
          required
        />

        <CustomTextField
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
          Update
        </Button>
      </Box>
      {isLoading && <Loading />}
    </>
  )
}

export default Page
