import { useToast } from '@/components/ui'
import nextImport from '@/lib/nextImport'
import { formatDateTime } from '@/lib/utils'
import { Product } from '@/types/product'
import { ColumnDef } from '@tanstack/react-table'
import axios from 'axios'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const [
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
] = [
  nextImport('Button'),
  nextImport('DropdownMenu'),
  nextImport('DropdownMenuTrigger'),
  nextImport('DropdownMenuContent'),
  nextImport('DropdownMenuLabel'),
  nextImport('DropdownMenuItem'),
]
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{formatDateTime(row.getValue('createdAt'))}</div>,
  },
  {
    id: 'action',
    header: 'Action',
    enableHiding: false,
    cell: ({ row }) => {
      const products = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/management/products/${products.slug}`}>Edit</Link>
            </DropdownMenuItem>

            <DeleteBtn id={products._id} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

interface Props {
  id: string
}
const DeleteBtn: React.FC<Props> = ({ id }) => {
  const toast = useToast().toast
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/product/delete/${id}`)
      toast({ description: 'Product has been deleted', variant: 'success' })
    } catch (e: any) {
      const message = e.response.data.message
      toast({ description: message, variant: 'destructive' })
    }
  }

  return (
    <DropdownMenuItem className="text-destructive" onClick={handleDelete}>
      Delete
    </DropdownMenuItem>
  )
}
