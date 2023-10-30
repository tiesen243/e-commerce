'use client'

import { List } from '@mui/material'
import CustomListItemBtn from './CustomListItem'
import { type Menu, menu } from './nav'

const Menu = () => (
  <List className="gap-6 text-sm md:flex md:items-center">
    {menu.map((item: Menu, idx: number) => (
      <CustomListItemBtn item={item} key={idx} />
    ))}
  </List>
)

export default Menu
