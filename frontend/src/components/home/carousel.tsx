'use client'
import Link from 'next/link'
import useSWR from 'swr'

import ProductCard from '@/components/card/product-card'
import { getProducts } from '@/lib/actions/product'
import { makeSlug } from '@/lib/utils'
import { CarouselSkeleton } from './skeleton'

const fetcher = () => getProducts({ limit: 13, sortBy: 'createdAt' })
const Carousel: React.FC = () => {
  const { data, isLoading } = useSWR<{ data: IProduct[] }>('products-carousel', fetcher)
  if (isLoading || !data) return <CarouselSkeleton />

  return (
    <div className="mt-4 w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex h-fit animate-carousel gap-4">
        {data.data.slice(3, 13).map((product) => (
          <Link href={`/product/${makeSlug(product)}`} key={product._id} passHref legacyBehavior>
            <li className="relative aspect-square w-2/3 max-w-[475px] flex-none cursor-pointer md:w-1/3">
              <ProductCard product={product} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
