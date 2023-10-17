import CustomListItemButton from '@/components/CustomListItemButton'
import { List } from '@mui/material'

const ProductLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <List className="flex">
        <CustomListItemButton href="/product">My Product</CustomListItemButton>
        <CustomListItemButton href="/product/create">Create</CustomListItemButton>
        <CustomListItemButton href="edit">Edit</CustomListItemButton>
      </List>
      {children}
    </>
  )
}

export default ProductLayout
