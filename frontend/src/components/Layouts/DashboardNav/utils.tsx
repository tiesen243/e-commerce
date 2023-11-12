import {
  AdminPanelSettingsRounded,
  CreateRounded,
  EmojiPeopleRounded,
  Inventory2Rounded,
  ListAltRounded,
  VerifiedUserRounded,
} from '@mui/icons-material'

export const adminNav = [
  {
    name: 'User Management',
    icon: <EmojiPeopleRounded />,
    href: '/admin/users',
  },
  {
    name: 'Order Management',
    icon: <ListAltRounded />,
    href: '/admin/orders',
  },
]

export const manageNav = [
  {
    name: 'Product Management',
    icon: <Inventory2Rounded />,
    href: '/manage/products',
  },
  {
    name: 'Create Product',
    icon: <CreateRounded />,
    href: '/manage/create',
  },
]
