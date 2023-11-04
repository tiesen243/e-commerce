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
      className="aspect-square main group hover:border border-sky-400 transition-all"
      component={Link}
      href={`/product/${product._id}`}
    >
      <CardHeader title={previewName} className="text-center font-bold" />
      <CardMedia
        component="img"
        image={product.image as string}
        alt={product.name}
        className="object-contain aspect-square group-hover:scale-105 transition-all h-4/5 md:h-1/2 lg:h-3/5"
      />

      <CardContent className="flex justify-center">
        <Typography variant="h5">Price: {product.price}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard
