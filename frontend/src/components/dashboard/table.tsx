import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatDate, makeSlug } from '@/lib/utils'
import DeleteBtn from './deleteBtn'

import type { IProduct } from '@/types/product'

const headers: string[] = ['Code', 'Name', 'Created At', 'Updated At', 'Actions']
export const DashboardTable: React.FC<React.PropsWithChildren<{ length?: number }>> = ({
  children,
  length,
}) => (
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

      <TableBody>{children}</TableBody>

      {length && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell align="right">{length}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  </>
)

export const TableChild: React.FC<{ product: IProduct }> = ({ product }) => (
  <TableRow>
    <TableCell align="center">{product.code}</TableCell>
    <TableCell>{product.name}</TableCell>
    <TableCell>{formatDate(product.createdAt)}</TableCell>
    <TableCell>{formatDate(product.updatedAt)}</TableCell>
    <TableCell className="grid grid-cols-2 gap-2">
      <Button size="sm" asChild>
        <Link href={`/dashboard/${makeSlug(product)}`}>Edit</Link>
      </Button>

      <DeleteBtn product={product} />
    </TableCell>
  </TableRow>
)

export const TableError: React.FC<{ message: string }> = ({ message }) => (
  <TableRow>
    <TableCell colSpan={5} className="text-center text-2xl text-muted-foreground">
      {message}
    </TableCell>
  </TableRow>
)
