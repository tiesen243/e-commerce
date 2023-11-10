import { Box, Card, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

import { useScreen } from '@/hooks'
import { IProduct } from '@/lib'

interface Props {
  product: IProduct
}
const ProductCard: React.FC<Props> = ({ product }) => {
  const end = useScreen() < 768 ? 30 : 15
  const previewName = product.name.length > end ? product.name.slice(0, end) + '...' : product.name
  return (
    <Card
      className="aspect-square relative group hover:border border-sky-400 transition-all"
      component={Link}
      href={`/product/${product._id}`}
    >
      <CardMedia
        component="img"
        image={product.image as string}
        alt={product.name}
        className="object-cover group-hover:scale-105 transition-all"
      />

      <Box className="flex gap-4 absolute z-20 bg-secondary-light dark:bg-secondary-dark shadow-lg bottom-2 left-2 py-2 px-2 rounded-full">
        <Typography variant="body1">{previewName}</Typography>
        <Typography variant="body1" className="bg-blue-500 text-white rounded-full px-2">
          {product.saleOffPercent !== 0 ? (
            <>
              <span className="line-through text-red-500">${product.price}</span>
              <span className="ml-2">${product.price - (product.price * product.saleOffPercent) / 100}</span>
            </>
          ) : (
            '$' + product.price
          )}
        </Typography>
      </Box>
      {product.saleOffPercent !== 0 && (
        <Typography variant="subtitle2" className="absolute top-2 right-2 bg-red-500 p-2 rounded shadow text-sm">
          {product.saleOffPercent}% OFF
        </Typography>
      )}
    </Card>
  )
}

export default ProductCard
