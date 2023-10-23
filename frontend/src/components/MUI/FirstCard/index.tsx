import Product from '@/types/product.type'
import { Card, CardContent, Typography } from '@mui/material'

interface Props {
  product: Product
}

const FirstCard: React.FC<Props> = ({ product }) => {
  return (
    <Card className="w-full md:w-2/3 h-[300px] bg-secondary-light dark:bg-secondary-dark p-4 mb-8 rounded-2xl grid grid-cols-3">
      <img src={product.image} alt={product.name} className="h-[268px] rounded-lg" />

      <CardContent className="col-span-2">
        <Typography className="text-3xl font-bold mb-4">{product.name}</Typography>
        <Typography variant="body1">{product.description}</Typography>

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
    </Card>
  )
}

export default FirstCard
