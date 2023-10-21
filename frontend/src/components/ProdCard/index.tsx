import Product from '@/types/product.type'
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
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
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProdCard
