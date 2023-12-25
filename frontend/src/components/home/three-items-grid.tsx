'use client'

import useSWR from 'swr'

import ProductCard from '@/components/card/product-card'
import { getProducts } from '@/lib/actions/product'
import type { IProduct } from '@/types/product'
import { ThreeItemsGridSkeleton } from './skeleton'

const fetcher = () => getProducts({ limit: 3, sortBy: 'createdAt' })
const ThreeItemsGrid: React.FC = () => {
  const { data, isLoading, error } = useSWR<IProduct[]>('products-three', fetcher)
  if (isLoading || !data) return <ThreeItemsGridSkeleton />

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
      {data.map((product, i: number) => (
        <section
          key={product._id}
          className={`h-full w-full ${i === 0 && 'md:col-span-2 md:row-span-2'}`}
        >
          <ProductCard product={product} hasDetails isFirst={i === 0} />
        </section>
      ))}
    </div>
  )
}

export default ThreeItemsGrid
