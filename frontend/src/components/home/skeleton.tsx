import { Skeleton } from '../ui/skeleton'

export const ThreeItemsGridSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
    {Array.from({ length: 3 }).map((_, i) => (
      <section key={i} className={`h-full w-full ${i === 0 && 'md:col-span-2 md:row-span-2'}`}>
        <Skeleton className="aspect-square" />
      </section>
    ))}
  </div>
)

export const CarouselSkeleton: React.FC = () => (
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
