import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export const ThreeItemsGridSkeleton = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
    {Array.from({ length: 3 }).map((_, i) => (
      <section key={i} className={`h-full w-full ${i === 0 && 'md:col-span-2 md:row-span-2'}`}>
        <Skeleton className="aspect-square" />
      </section>
    ))}
  </div>
)

interface Props {
  status: number
  message: string
}
export const ErrorThreeItemsGrid: React.FC<Props> = ({ status, message }) => (
  <div className="absolute inset-0 z-50 flex items-start justify-center md:items-center">
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Oh no!</CardTitle>
        <CardDescription className="my-2">
          Error {status}: {message}
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
)

export const CarouselSkeleton = () => (
  <div className="mt-4 w-full overflow-x-auto pb-6 pt-1">
    <ul className="flex h-fit animate-carousel gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i} className="relative aspect-square w-2/3 max-w-[475px] flex-none md:w-1/3">
          <Skeleton className="aspect-square w-full" />
        </li>
      ))}
    </ul>
  </div>
)
