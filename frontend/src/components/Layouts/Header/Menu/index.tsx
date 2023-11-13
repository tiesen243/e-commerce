'use client'

import { List } from '@mui/material'

import CustomListItemBtn from './CustomListItem'
import { type Menu, menu } from './nav'
import { useScreen } from '@/hooks'

interface Props {
  handleClose?: () => void
}

const Menu: React.FC<Props> = ({ handleClose }) => {
  const isMobile = useScreen() < 768
  const showItem = isMobile ? menu : menu.slice(0, 3)

  return (
    <List className="gap-4 md:flex items-center" onClick={handleClose}>
      {showItem.map((item: Menu, idx: number) => (
        <CustomListItemBtn item={item} key={idx} />
      ))}
    </List>
  )
}

export default Menu
