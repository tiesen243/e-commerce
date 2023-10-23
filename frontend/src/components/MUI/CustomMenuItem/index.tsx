import { ListItemIcon, MenuItem, MenuItemProps, Typography } from '@mui/material'
import Link from 'next/link'

interface Props extends MenuItemProps {
  text: string
  icon: React.ReactNode
  href?: string
}

const StyledMenuItem: React.FC<Props> = ({ text, icon, href, ...props }) => (
  <MenuItem
    {...props}
    {...(href && { component: Link, href })}
    className="mx-2 flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-200 ease-linear"
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <Typography>{text}</Typography>
  </MenuItem>
)

export default StyledMenuItem
