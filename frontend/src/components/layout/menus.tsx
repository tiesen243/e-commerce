import { BookAIcon, BookIcon, BookOpenIcon, BookOpenTextIcon } from 'lucide-react'

const className = 'mr-2 block md:hidden'
export const menus = [
  {
    title: 'All',
    href: '/search',
    icon: <BookIcon className={className} />,
  },
  {
    title: 'Light Novels',
    href: '/search/light-novels',
    icon: <BookOpenIcon className={className} />,
  },
  {
    title: 'Novels',
    href: '/search/novels',
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
