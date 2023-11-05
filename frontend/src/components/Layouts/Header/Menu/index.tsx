import { List } from '@mui/material'

import CustomListItemBtn from './CustomListItem'
import { type Menu, menu } from './nav'

interface Props {
  handleClose?: () => void
}

const Menu: React.FC<Props> = ({ handleClose }) => (
  <List className="gap-4 md:flex items-center" onClick={handleClose}>
    {menu.map((item: Menu, idx: number) => (
      <CustomListItemBtn item={item} key={idx} />
    ))}
  </List>
)

export default Menu
