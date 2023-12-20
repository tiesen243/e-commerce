'use client'
import useSWR from 'swr'

import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatDate } from '@/lib/utils'
import { IProduct } from '@/types/product'
import ActionBtn from './actionBtn'
import { fetcher } from './utils'

const Content: React.FC = () => {
  const { data, error, isLoading } = useSWR<IProduct[]>('/api/product/me', fetcher)
  if (isLoading) return <Error text="Loading..." />
  if (error) return <Error text={error.message} />

  return (
    <TableBody>
      {data?.map((product: IProduct) => (
        <TableRow key={product._id}>
          <TableCell className="w-2/12">{product.code}</TableCell>
          <TableCell className="w-4/12">{product.name}</TableCell>
          <TableCell className="w-2/12">{formatDate(product.createdAt)}</TableCell>
          <TableCell className="w-2/12">{formatDate(product.updatedAt)}</TableCell>
          <ActionBtn id={product._id} />
        </TableRow>
      ))}
    </TableBody>
  )
}

export default Content

const Error: React.FC<{ text: string }> = ({ text }) => (
  <TableBody>
    <TableRow>
      <TableCell colSpan={5} className="text-center text-xl text-secondary">
        {text}
      </TableCell>
    </TableRow>
  </TableBody>
)
