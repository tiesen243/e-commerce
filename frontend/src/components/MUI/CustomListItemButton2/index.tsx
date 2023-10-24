'use client'

import { ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'

interface Props {
  href?: string
  icon: React.ReactNode
  text: string
}

const CustomListItemButton2: React.FC<Props & ListItemButtonProps> = (props) => {
  return (
    <ListItemButton
      {...props}
      {...(props.href && { component: Link, href: props.href })}
      sx={{ '&:hover': { borderBottom: '1px solid #6190e8' } }}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
      {props.children}
    </ListItemButton>
  )
}

export default CustomListItemButton2
