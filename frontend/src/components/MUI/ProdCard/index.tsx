import Product from '@/types/product.type'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  product: Product
}

const ProdCard: React.FC<Props> = ({ product }) => {
  const previewName: string = product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name
  const url: string = `/product/${product._id}`
  return (
    <Card className="relative bg-secondary-light transition-colors duration-300 ease-linear dark:bg-secondary-dark">
      <CardActionArea component={Link} href={url}>
        <CardMedia sx={{ height: 300 }} image={product.image} title={product.name} />
        <CardContent>
          <Typography gutterBottom variant="h1" fontSize={20}>
            {previewName}
          </Typography>

          <Typography variant="subtitle1" color="Gray">
            Price:{' '}
            {product.saleOffPercent !== 0 ? (
              <>
                <del>${product.price}</del>
                <span className="text-red-600">
                  {' $' + (product.price - (product.price * product.saleOffPercent) / 100).toFixed(2)}
                </span>
              </>
            ) : (
              <>${product.price}</>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>

      {product.saleOffPercent !== 0 && (
        <Typography className="absolute right-1 top-1 flex aspect-square items-center justify-center rounded-full bg-red-600 p-2 text-sm font-bold shadow-2xl">
          {product.saleOffPercent}%
        </Typography>
      )}
    </Card>
  )
}

export default ProdCard
