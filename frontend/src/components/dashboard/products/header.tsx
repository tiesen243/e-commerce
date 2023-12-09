import { TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const Header: React.FC = () => (
  <>
    <TableCaption>Product List</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Code</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Created At</TableHead>
        <TableHead>Updated At</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
  </>
)

export default Header
