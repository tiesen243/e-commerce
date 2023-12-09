import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'
import { handleDelete } from './utils'

interface Props {
  id: string
  mutate: () => void
}
const ActionBtn: React.FC<Props> = ({ id, mutate }) => (
  <TableCell className="flex w-2/12 items-center gap-2">
    <Button asChild>
      <Link href={`/dashboard/${id}`}>Edit</Link>
    </Button>

    <Button variant="destructive" onClick={() => handleDelete(id, mutate)}>
      Delete
    </Button>
  </TableCell>
)

export default ActionBtn
