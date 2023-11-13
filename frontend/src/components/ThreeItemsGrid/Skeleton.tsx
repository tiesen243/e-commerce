import { Card, CardActions, CardContent, CardMedia, Grid, Skeleton } from '@mui/material'
import { ProductCardSkeleton } from '..'

const ThreeItemSkeleton = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={8}>
      <ProductCardSkeleton />
    </Grid>

    <Grid item xs={12} md={4} className="flex flex-col gap-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </Grid>
  </Grid>
)

export default ThreeItemSkeleton
