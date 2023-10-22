import Product from '@/types/product.type'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  product: Product
}

const ProdCard: React.FC<Props> = ({ product }) => {
  const previewName: string = product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name
  const url: string = `/products/${product._id}`
  return (
    <Card>
      <CardActionArea component={Link} href={url}>
        <CardMedia sx={{ height: 300 }} image={product.image} title={product.name} />
        <CardContent>
          <Typography gutterBottom variant="h1" fontSize={20}>
            {previewName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.saleOffPercent !== 0 ? (
              <>
                <del>${product.price}</del>
                <span className="text-red-500"> ${product.price - (product.price * product.saleOffPercent) / 100}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProdCard
