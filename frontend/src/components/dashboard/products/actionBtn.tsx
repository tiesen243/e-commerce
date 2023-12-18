import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'
import { handleDelete } from './utils'

const ActionBtn: React.FC<{ id: string }> = ({ id }) => (
  <TableCell className="flex w-2/12 items-center gap-2">
    <Button asChild>
      <Link href={`/dashboard/${id}`}>Edit</Link>
    </Button>

    <Button variant="destructive" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  </TableCell>
)

export default ActionBtn
