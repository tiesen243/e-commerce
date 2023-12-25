import { BookAIcon, BookIcon, BookOpenIcon, BookOpenTextIcon } from 'lucide-react'

const className = 'mr-2 block md:hidden'
export const menus = [
  {
    title: 'All',
    href: '/search',
    icon: <BookIcon className={className} />,
  },
  {
    title: 'Light Novel',
    href: '/search/light-novel',
    icon: <BookOpenIcon className={className} />,
  },
  {
    title: 'Novel',
    href: '/search/novel',
    icon: <BookOpenTextIcon className={className} />,
  },
  {
    title: 'Manga',
    href: '/search/manga',
    icon: <BookAIcon className={className} />,
  },
]

export const footerMenus = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Terms & Conditions',
    href: '/terms',
  },
  {
    title: 'Shipping & Returns Policy',
    href: '/shipping',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
]

export interface Menu {
  title: string
  href: string
  icon?: JSX.Element
}
