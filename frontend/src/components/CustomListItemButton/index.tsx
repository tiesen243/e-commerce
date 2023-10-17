import { ListItemButton } from '@mui/material'
import Link from 'next/link'

const CustomListItemButton: React.FC<{
  children: React.ReactNode
  href: string
}> = ({ children, href }) => (
  <ListItemButton component={Link} href={href} className="text-center font-medium">
    {children}
  </ListItemButton>
)

export default CustomListItemButton
