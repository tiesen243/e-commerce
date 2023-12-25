'use client'

import { getProducts } from '@/lib/actions/product'
import useSWR from 'swr'
import ProductCard from '../card/product-card'
import { Skeleton } from '../ui/skeleton'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'
import Link from 'next/link'
import { makeSlug } from '@/lib/utils'

interface Props extends SearchParams {
  category?: string
}

const Result: React.FC<Props> = ({ category, ...props }) => {
  const { q, sortBy, orderBy } = props
  const page = Number(props.page) || 1
  const isAscending = orderBy === 'asc'
  const fetcher = () => getProducts({ q, category, page, sortBy, isAscending, limit: 9 })
  const { data, isLoading, error } = useSWR(`search-${q}-${page}-${sortBy}-${isAscending}`, fetcher)

  if (error) return <p className="text-center">{error.message}</p>
  if (isLoading || !data)
    return (
      <ul className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <li key={i}>
            <Skeleton className="aspect-square w-full" />
          </li>
        ))}
      </ul>
    )

  return (
    <>
      <ul className="grid grid-cols-3 gap-2">
        {data.data.map((product) => (
          <Link href={`/product/${makeSlug(product)}`} key={product._id} passHref legacyBehavior>
            <li className="cursor-pointer">
              <ProductCard product={product} />
            </li>
          </Link>
        ))}
      </ul>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={{
                query: { ...props, page: page > 1 ? page - 1 : 1 },
              }}
            />
          </PaginationItem>

          {Array.from({ length: data.totalPage }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href={{
                  query: { ...props, page: i + 1 },
                }}
                className={page === i + 1 ? 'text-primary' : 'text-muted-foreground'}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href={{
                query: { ...props, page: page < data.totalPage ? page + 1 : data.totalPage },
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default Result
