import { Card, CardMedia, Skeleton, Typography } from '@mui/material'

export const ProductCardSkeleton = () => (
  <Card className="aspect-square relative group">
    <CardMedia className="object-cover group-hover:scale-105 transition-all aspect-square">
      <Skeleton variant="rectangular" className="w-full h-full" />
    </CardMedia>

    <Typography
      variant="body1"
      fontWeight="bold"
      className="absolute z-20 flex gap-4 bg-secondary-light dark:bg-secondary-dark shadow-lg bottom-2 left-2 py-2 px-2 rounded-full"
    >
      <Skeleton variant="text" className="w-24" />

      <span className="bg-blue-500 text-white rounded-full px-2">
        <Skeleton variant="text" className="w-10" />
      </span>
    </Typography>
  </Card>
)
