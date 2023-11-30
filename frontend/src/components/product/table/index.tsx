import { formatDateTime } from '@/lib/utils'
import { Product } from '@/types/product'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import dynamic from 'next/dynamic'

const ActionMenu = dynamic(() => import('./actionMenu'), { ssr: false })
const Button = dynamic(() => import('@/components/ui').then((mod) => mod.Button), { ssr: false })
const Tooltip = dynamic(() => import('@/components/Tooltip'), { ssr: false })

export const column: ColumnDef<Product>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const name: string =
        String(row.getValue('name')).length > 20
          ? String(row.getValue('name')).slice(0, 20) + '...'
          : row.getValue('name')
      return (
        <Tooltip text={row.getValue('name')}>
          <p>{name}</p>
        </Tooltip>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Created At
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{formatDateTime(row.getValue('createdAt'))}</div>,
  },
  {
    id: 'action',
    header: 'Action',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original
      return <ActionMenu product={product} />
    },
  },
]

export { fetcher } from './fetcher'
