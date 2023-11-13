import { Card, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

import { IProduct } from '@/lib'

interface Props {
  product: IProduct
}
export const ProductCard: React.FC<Props> = ({ product }) => (
  <Link href={`/product/${product._id}`} passHref className="aspect-square relative group">
    <Card className="group-hover:border border-sky-400 transition-all">
      <CardMedia
        component="img"
        image={product.image as string}
        alt={product.name}
        className="object-cover group-hover:scale-105 transition-all aspect-square"
      />

      <Typography
        variant="body1"
        fontWeight="bold"
        className="absolute z-20 flex gap-4 bg-secondary-light dark:bg-secondary-dark shadow-lg bottom-2 left-2 py-2 px-2 rounded-full"
      >
        <span>{product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}</span>

        <span className="bg-blue-500 text-white rounded-full px-2">
          {product.saleOffPercent !== 0 ? (
            <>
              <span className="line-through text-red-500">${product.price}</span>
              <span className="ml-2">${product.price - (product.price * product.saleOffPercent) / 100}</span>
            </>
          ) : (
            '$' + product.price
          )}
        </span>
      </Typography>

      {product.saleOffPercent !== 0 && (
        <Typography
          variant="subtitle2"
          className="absolute top-2 right-2 bg-red-500 text-gray-100 p-2 rounded shadow text-sm"
        >
          {product.saleOffPercent}% OFF
        </Typography>
      )}
    </Card>
  </Link>
)
export { ProductCardSkeleton } from './ProductCardSkeleton'
