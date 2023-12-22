import { CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export const FieldsLoading = () => (
  <CardContent className="space-y-4">
    {Array.from({ length: 7 }).map((_, i) => (
      <section key={i}>
        <Skeleton className="mb-2 h-6 w-1/2" />
        <Skeleton className="h-10 w-full" />
      </section>
    ))}
  </CardContent>
)

export const BtnLoading = () => (
  <div className="flex justify-end gap-4">
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={i} className="h-10 w-20" />
    ))}
  </div>
)
