import { IProduct } from '@/lib'
import { Card, CardContent, CardMedia, ListItem, Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  product: IProduct
}
const CarouselCard: React.FC<Props> = ({ product }) => (
  <ListItem className="relative aspect-square flex-none animate-carousel md:w-1/3 group">
    <Card component={Link} href={`/product/${product._id}`} className="aspect-square absolute w-full">
      <CardMedia
        component="img"
        src={product.image as string}
        alt={product.name}
        className="group-hover:scale-105 transition-all"
      />

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
      {product.saleOffPercent !== 0 && (
        <Typography
          variant="subtitle2"
          className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white rounded text-xs"
        >
          {product.saleOffPercent}% OFF
        </Typography>
      )}
    </Card>
  </ListItem>
)

export default CarouselCard
