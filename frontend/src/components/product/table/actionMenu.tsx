import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  useToast,
} from '@/components/ui'
import axios from '@/lib/axios'
import { Product } from '@/types/product'
import { MoreHorizontal } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
  product: Product
}
const ActionMenu: React.FC<Props> = ({ product }) => {
  const { push } = useRouter()
  const handleEdit = () => push(`/management/products/${product._id}`)

  const toast = useToast().toast
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/product/delete/${product._id}`)
      toast({ description: 'Product has been deleted', variant: 'success' })
    } catch (e: any) {
      const message = e.response.data.message
      toast({ description: message, variant: 'destructive' })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>

        <DropdownMenuItem className="text-destructive" onClick={handleDelete}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ActionMenu
