import { FolderKanbanIcon, FolderPlusIcon, ListOrderedIcon, UsersIcon } from 'lucide-react'

export const navItems = [
  {
    label: 'All',
    href: '/search',
  },
  {
    label: 'Novel',
    href: '/search/novel',
  },
  {
    label: 'Light Novel',
    href: '/search/light-novel',
  },
  {
    label: 'Manga',
    href: '/search/manga',
  },
]

export const manageNav = [
  {
    href: '/dashboard/products',
    icon: <FolderKanbanIcon />,
  },
  {
    href: '/dashboard/products/create',
    icon: <FolderPlusIcon />,
  },
]

export const adminNav = [
  ...manageNav,
  {
    href: '/dashboard/admin/orders',
    icon: <ListOrderedIcon />,
  },
  {
    href: '/dashboard/admin/users',
    icon: <UsersIcon />,
  },
]
