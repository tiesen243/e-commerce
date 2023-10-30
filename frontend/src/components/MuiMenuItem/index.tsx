import { ListItemIcon, MenuItem, ListItemText } from '@mui/material'
import Link from 'next/link'

interface AccountMenuProps {
  icon: React.ReactNode
  title: string
  href?: string
  onClick?: () => void
}
export const MuiMenuItem: React.FC<AccountMenuProps> = (props) => (
  <MenuItem
    {...(props.href && { component: Link, href: props.href })}
    onClick={props.onClick}
    className="m-2 p-2 rounded-lg"
  >
    <ListItemIcon>{props.icon}</ListItemIcon>
    <ListItemText primary={props.title} />
  </MenuItem>
)
