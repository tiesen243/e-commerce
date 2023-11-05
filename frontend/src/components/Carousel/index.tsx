'use client'
import { IProduct } from '@/lib'
import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<IProduct[]> = async (url: string) => {
  const res = await fetch(url)
  const { data, message } = await res.json()
  if (res.status !== 200) throw new Error(message, { cause: res.status })
  const products: IProduct[] = data.sort((a: IProduct, b: IProduct) => (a.updatedAt > b.updatedAt ? -1 : 1))
  return products
}
export const Carousel: React.FC = () => {
  const { data, error, isLoading } = useSWR<IProduct[]>('/api/v1/product', fetcher)
  if (error) return <Box>{error.message}</Box>
  else if (!data) return <Box>dasdsda</Box>

  return (
    <Box className=" w-full overflow-x-auto pb-6 pt-1">
      <List className="flex gap-4">
        {data.map((product: IProduct, idx: number) => (
          <ListItem key={idx} className="relative aspect-square flex-none animate-carousel md:w-1/3 group">
            <Card component={Link} href={`/product/${product._id}`} className="aspect-square absolute w-full">
              <CardMedia component="img" src={product.image as string} alt={product.name} />

              <CardContent className="absolute bottom-0 left-0 w-full text-center bg-tertiary-light group-hover:bg-quaternary-light dark:bg-tertiary-dark dark:group-hover:bg-quaternary-dark trans-colors">
                <Typography variant="h6">
                  {product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}
                </Typography>

                <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-300">
                  Price:{' '}
                  {product.saleOffPercent !== 0 ? (
                    <>
                      <span className="line-through text-red-400">${product.price}</span>
                      <span className="ml-2">${product.price - (product.price * product.saleOffPercent) / 100}</span>
                    </>
                  ) : (
                    product.price
                  )}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
