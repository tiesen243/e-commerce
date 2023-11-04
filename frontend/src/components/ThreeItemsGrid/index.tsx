'use client'
import { FirstProductCard, Loading, ProductCard } from '@/components'
import { IProduct } from '@/lib'
import { Grid } from '@mui/material'
import useSWR, { Fetcher } from 'swr'
import ThreeItemSkeleton from './Skeleton'

const fetcher: Fetcher<IProduct[]> = async (url: string) => {
  const res = await fetch(url)
  const { data, message } = await res.json()
  if (res.status !== 200) throw new Error(message, { cause: res.status })

  return data.sort((a: IProduct, b: IProduct) => (a.updatedAt > b.updatedAt ? -1 : 1))
}

export const ThreeItemsGrid = () => {
  const { data, isLoading, error } = useSWR('/api/v1/product', fetcher)
  if (error) return <div>{error.message}</div>

  if (!data || isLoading) return <ThreeItemSkeleton />

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <FirstProductCard product={data[0]} />
      </Grid>

      <Grid item xs={12} md={4} className="flex flex-col gap-4">
        {data.slice(1, 3).map((product: IProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </Grid>
    </Grid>
  )
}
