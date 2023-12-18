import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Content from './content'

const heads = ['Code', 'Name', 'Created At', 'Updated At', 'Actions']

const Products: React.FC = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {heads.map((head: string) => (
          <TableHead key={head}>{head}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <Content />
  </Table>
)

export default Products
