import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { handleDelete } from '@/lib/actions/product'
import { IProduct } from '@/types/product'

const DeleteBtn: React.FC<{ product: IProduct }> = ({ product }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button size="sm" variant="destructive" className="w-full">
        Delete
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent asChild>
      <form action={handleDelete}>
        <input type="hidden" name="id" value={product._id} />

        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This will permanently delete the <strong>{product.name}</strong>. This action cannot be
          undone.
        </AlertDialogDescription>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction type="submit">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog>
)

export default DeleteBtn
