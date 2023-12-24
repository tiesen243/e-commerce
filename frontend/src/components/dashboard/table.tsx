import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatDate, makeSlug } from '@/lib/utils'
import DeleteBtn from './delete-btn'

import type { IProduct } from '@/types/product'

const headers: string[] = ['Code', 'Name', 'Updated At', 'Actions']

export const DashboardTable: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <article className="flex justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Dashboard</h1>
      <Button size="sm" asChild>
        <Link href="/dashboard/create">Create a product</Link>
      </Button>
    </article>

    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header: string) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      {children}
    </Table>
  </>
)

export const TableChild: React.FC<{ product: IProduct }> = ({ product }) => (
  <TableRow>
    <TableCell align="center">{product.code}</TableCell>
    <TableCell>
      {product.name.length > 15 ? `${product.name.slice(0, 15)}...` : product.name}
    </TableCell>
    <TableCell>{formatDate(product.updatedAt)}</TableCell>
    <TableCell className="grid grid-cols-2 gap-2">
      <Button size="sm" asChild>
        <Link href={`/dashboard/${makeSlug(product)}`}>Edit</Link>
      </Button>

      <DeleteBtn product={product} />
    </TableCell>
  </TableRow>
)

export const TFooter: React.FC<{ page?: number; totalPage?: number }> = ({
  page = 1,
  totalPage = 1,
}) => (
  <TableFooter>
    <TableRow>
      <TableCell colSpan={5}>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={{
                  pathname: '/dashboard',
                  query: { page: page > 1 ? page - 1 : 1 },
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPage }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink href={`/dashboard?page=${i + 1}`}>{i + 1}</PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={{
                  pathname: '/dashboard',
                  query: { page: page < totalPage ? page + 1 : totalPage },
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </TableCell>
    </TableRow>
  </TableFooter>
)

export const TableError: React.FC<{ message: string }> = ({ message }) => (
  <TableRow>
    <TableCell colSpan={5} className="text-center text-2xl text-muted-foreground">
      {message}
    </TableCell>
  </TableRow>
)
