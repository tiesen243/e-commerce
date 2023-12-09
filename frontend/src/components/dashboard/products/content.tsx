'use client'
import useSWR from 'swr'

import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { IProduct } from '@/interfaces/product.interface'
import { formatDate } from '@/lib/utils'
import ActionBtn from './actionBtn'
import NotFound from './notfound'
import { Error, fetcher } from './utils'

const Content: React.FC = () => {
  const { data, error, isLoading, mutate } = useSWR<IProduct[], Error>('/api/product/me', fetcher)
  if (isLoading || !data) return <NotFound text="Loading..." />
  if (error) return <NotFound text={error.message} />

  return (
    <TableBody>
      {data.map((product: IProduct) => (
        <TableRow key={product._id}>
          <TableCell className="w-2/12">{product.code}</TableCell>
          <TableCell className="w-4/12">{product.name}</TableCell>
          <TableCell className="w-2/12">{formatDate(product.createdAt)}</TableCell>
          <TableCell className="w-2/12">{formatDate(product.updatedAt)}</TableCell>
          <ActionBtn id={product._id} mutate={mutate} />
        </TableRow>
      ))}
    </TableBody>
  )
}

export default Content
