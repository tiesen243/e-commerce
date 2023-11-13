'use client'
import { IProduct, axios, showErrorToast } from '@/lib'
import { Box, List } from '@mui/material'
import useSWR, { Fetcher } from 'swr'
import CarouselCard from './CarouselCard'
import CarouselSkeleton from './CarouselSkeleton'

const fetcher: Fetcher<IProduct[]> = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data.data.filter((product: IProduct) => product.available)
  } catch (err: any) {
    showErrorToast(err.response.data.message)
    throw new Error(err.response.data.message, {
      cause: err.response.data.status,
    })
  }
}
export const Carousel: React.FC = () => {
  const { data, error, isLoading } = useSWR<IProduct[]>('/product', fetcher)

  if (!data || isLoading || error) return <CarouselSkeleton />

  return (
    <>
      <Box className=" w-full overflow-x-auto pb-6 pt-1">
        <List className="flex gap-4">
          {data.map((product: IProduct, idx: number) => (
            <CarouselCard key={idx} product={product} />
          ))}
        </List>
      </Box>
      <CarouselSkeleton />
    </>
  )
}
