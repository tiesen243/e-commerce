'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BookAIcon, BookIcon, BookOpenIcon, BookOpenTextIcon } from 'lucide-react'

const Navigation: React.FC<{ className: string }> = ({ className }) => {
  const pathName = usePathname()
  const currentPath = navs.find((nav) => nav.href === pathName)

  return (
    <nav className={cn('flex-col items-start md:flex-row md:items-center', className)}>
      {navs.map((nav) => (
        <Link
          key={nav.title}
          href={nav.href}
          className={cn(
            buttonVariants({ variant: 'link' }),
            'text-primary/50',
            currentPath?.href === nav.href && 'text-primary hover:no-underline'
          )}
        >
          {nav.icon} {nav.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation

const className = 'mr-2 block md:hidden'
const navs = [
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
