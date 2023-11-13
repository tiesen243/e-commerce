'use client'

import { Grid } from '@mui/material'
import useSWR, { Fetcher } from 'swr'

import { ProductCard, ProductCardSkeleton } from '@/components'
import { IProduct, axios, showErrorToast } from '@/lib'
import ThreeItemSkeleton from './Skeleton'

const fetcher: Fetcher<IProduct[]> = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    data.data = data.data.filter((product: IProduct) => product.available)
    return data.data.sort((a: IProduct, b: IProduct) => (a.updatedAt > b.updatedAt ? -1 : 1))
  } catch (err: any) {
    showErrorToast(err.response.data.message)
    throw new Error(err.response.data.message, {
      cause: err.response.data.status,
    })
  }
}

export const ThreeItemsGrid = () => {
  const { data, isLoading, error } = useSWR('/product', fetcher)

  if (!data || !isLoading || error) return <ThreeItemSkeleton />

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <ProductCard product={data[0]} />
      </Grid>

      <Grid item xs={12} md={4} className="flex flex-col gap-4">
        {data.slice(1, 3).map((product: IProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </Grid>
    </Grid>
  )
}
