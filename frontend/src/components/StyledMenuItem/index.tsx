import { ListItemIcon, MenuItem, MenuItemProps, Typography } from '@mui/material'
import Link from 'next/link'

interface Props extends MenuItemProps {
  text: string
  icon?: React.ReactNode
  href?: string
}

const StyledMenuItem: React.FC<Props> = ({ text, icon, href, ...props }) => {
  return (
    <MenuItem {...props} {...(href && { component: Link, href })} sx={{ py: 1, px: 2 }}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Typography>{text}</Typography>
    </MenuItem>
  )
}

export default StyledMenuItem
