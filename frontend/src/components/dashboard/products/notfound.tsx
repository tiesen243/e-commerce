import { TableBody, TableCell, TableRow } from '@/components/ui/table'

interface Props {
  text: string
}
const NotFound: React.FC<Props> = ({ text }) => (
  <TableBody>
    <TableRow>
      <TableCell>{text}</TableCell>
    </TableRow>
  </TableBody>
)

export default NotFound
