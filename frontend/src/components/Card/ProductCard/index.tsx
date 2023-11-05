import { Card, CardContent, CardHeader, CardMedia, Tooltip, Typography } from '@mui/material'

import { IProduct, useScreen } from '@/lib'
import Link from 'next/link'

interface Props {
  product: IProduct
}
const ProductCard: React.FC<Props> = ({ product }) => {
  const end = useScreen() < 768 ? 30 : 15
  const previewName = product.name.length > end ? product.name.slice(0, end) + '...' : product.name
  return (
    <Card
      className="aspect-square main relative group hover:border border-sky-400 transition-all"
      component={Link}
      href={`/product/${product._id}`}
    >
      <CardHeader title={previewName} className="text-center font-bold" />
      <CardMedia
        component="img"
        image={product.image as string}
        alt={product.name}
        className="object-contain aspect-square group-hover:scale-105 transition-all h-3/4 md:h-1/2 lg:h-3/5"
      />

      <CardContent className="flex justify-center">
        <Typography variant="h5">
          Price:{' '}
          {product.saleOffPercent !== 0 ? (
            <>
              <span className="line-through text-red-500">${product.price}</span>
              <span className="ml-2">${product.price - (product.price * product.saleOffPercent) / 100}</span>
            </>
          ) : (
            product.price
          )}
        </Typography>

        {product.saleOffPercent !== 0 && (
          <Typography variant="subtitle2" className="absolute top-0 right-0 bg-red-500 p-2 rounded shadow">
            {product.saleOffPercent}% OFF
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default ProductCard
