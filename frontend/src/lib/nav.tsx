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
    title: 'Manage Products',
    href: '/manage/products',
    icon: <FolderKanbanIcon />,
  },
  {
    title: 'Create Product',
    href: '/manage/create',
    icon: <FolderPlusIcon />,
  },
]

export const adminNav = [
  ...manageNav,
  {
    title: 'Manage Orders',
    href: '/admin/orders',
    icon: <ListOrderedIcon />,
  },
  {
    title: 'Manage Users',
    href: '/admin/users',
    icon: <UsersIcon />,
  },
]
