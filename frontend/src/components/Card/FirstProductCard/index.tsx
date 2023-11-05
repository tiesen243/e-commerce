import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

import { IProduct, useScreen } from '@/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  product: IProduct
}
const FirstProductCard: React.FC<Props> = ({ product }) => {
  const isMobile = useScreen() < 768
  const previewName = product.name.length > 30 ? product.name.slice(0, 30) + '...' : product.name
  const { push } = useRouter()
  return (
    <Card
      className="aspect-square main relative group hover:border border-sky-400 transition-all"
      {...(isMobile && { onClick: () => push(`/product/${product._id}`) })}
    >
      <CardHeader title={previewName} className="text-center font-bold" />
      <CardMedia
        component="img"
        image={product.image as string}
        alt={product.name}
        className="object-contain aspect-square group-hover:scale-105 transition-all h-3/4 md:h-3/5 lg:h-2/3"
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

      <CardActions className="hidden md:flex justify-around items-center mx-12">
        <Button variant="contained" color="secondary" component={Link} href={`/product/${product._id}`}>
          Detail
        </Button>

        <Button variant="contained" component="div" color="secondary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default FirstProductCard
