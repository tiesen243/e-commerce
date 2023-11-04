import { Card, CardActions, CardContent, CardMedia, Grid, Skeleton } from '@mui/material'

const ThreeItemSkeleton = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={8}>
      <Card className="main aspect-square p-4">
        <Skeleton variant="text" className="w-2/3 h-9 mb-3 mx-auto" />

        <CardMedia className="aspect-square h-4/5 md:h-3/5 lg:h-2/3 mx-auto">
          <Skeleton variant="rectangular" className="w-full h-full" />
        </CardMedia>

        <CardContent className="flex justify-center">
          <Skeleton variant="text" className="w-1/3 h-12" />
        </CardContent>

        <CardActions className="hidden md:flex justify-around items-center mx-12">
          <Skeleton variant="text" className="w-1/3 h-16" />

          <Skeleton variant="text" className="w-1/3 h-16" />
        </CardActions>
      </Card>
    </Grid>

    <Grid item xs={12} md={4} className="flex flex-col gap-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Card key={idx} className="main aspect-square p-4">
          <Skeleton variant="text" className="w-2/3 h-9 mb-3 mx-auto" />

          <CardMedia className="aspect-square h-4/5 md:h-3/5 lg:h-2/3 mx-auto">
            <Skeleton variant="rectangular" className="w-full h-full" />
          </CardMedia>

          <CardContent className="flex justify-center">
            <Skeleton variant="text" className="w-1/3 h-12" />
          </CardContent>
        </Card>
      ))}
    </Grid>
  </Grid>
)

export default ThreeItemSkeleton
