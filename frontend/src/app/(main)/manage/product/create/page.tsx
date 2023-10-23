'use client'

import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { CustomSelect, CustomSelectTags, CustomTextField, DragAndDrop, Loading } from '@/components'
import { Category, Prod } from '@/types/product.type'
import { showErrorToast, showSuccessToast, uploadImage } from '@/utils'

const Page: NextPage = () => {
  const { token } = useSession().data ?? {}
  const [prod, setProd] = useState<Prod>({
    name: '',
    description: '',
    img: null,
    price: 0,
    stock: 0,
    category: Category.Other,
    tags: [],
    available: true,
    saleOffPercent: 0,
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { push, back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    if (token === undefined) {
      setIsLoading(false)
      return showErrorToast('You must login first')
    } else if (prod.img === null) {
      setIsLoading(false)
      return showErrorToast('You must upload an image')
    } else {
      const url = await uploadImage(prod.img, prod.name, 'product').catch((err) => showErrorToast(err.message))
      const res = await fetch('/api/v1/product/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...prod, image: url }),
      })
      if (res.status !== 201) {
        const { message } = await res.json()
        setIsLoading(false)
        message.forEach((msg: string) => showErrorToast(msg))
      } else {
        showSuccessToast('Product created successfully')
        push('/manage/product')
      }
    }
  }

  return (
    <>
      <Button variant="outlined" className="after:ml-2 after:content-['back']" color="info" onClick={() => back()}>
        <ArrowBackIosNewRounded fontSize="small" />
      </Button>

      <Box className="flex flex-col gap-4" component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h1" textAlign="center" marginBottom={4}>
          Create New Product
        </Typography>

        <CustomTextField
          required
          label="Name"
          value={prod.name}
          onChange={(e) => setProd({ ...prod, name: e.target.value })}
        />

        <DragAndDrop setProd={setProd} />

        <CustomTextField
          label="Description"
          value={prod.description}
          onChange={(e) => setProd({ ...prod, description: e.target.value })}
          multiline
          rows={4}
          required
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
          onChange={(e) => setProd({ ...prod, category: e.target.value as Category })}
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
