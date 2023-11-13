import { Box, Card, CardContent, CardMedia, List, ListItem, Skeleton, Typography } from '@mui/material'

const CarouselSkeleton: React.FC = () => (
  <Box className=" w-full overflow-x-auto pb-6 pt-1">
    <List className="flex gap-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </List>
  </Box>
)

const CardSkeleton: React.FC = () => (
  <ListItem className="relative aspect-square flex-none animate-carousel md:w-1/3 group">
    <Card className="aspect-square absolute w-full">
      <CardMedia>
        <Skeleton variant="rectangular" className="w-full h-full aspect-square" />
      </CardMedia>

      <CardContent className="absolute bottom-0 left-0 w-full text-center bg-tertiary-light group-hover:bg-quaternary-light dark:bg-tertiary-dark dark:group-hover:bg-quaternary-dark trans-colors">
        <Typography variant="h6">
          <Skeleton variant="text" />
        </Typography>

        <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-300">
          <Skeleton variant="text" />
        </Typography>
      </CardContent>
    </Card>
  </ListItem>
)

export default CarouselSkeleton
