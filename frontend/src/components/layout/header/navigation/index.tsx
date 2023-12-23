'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { menus } from '@/components/layout/menus'

export const Navigation: React.FC<{ className: string }> = ({ className }) => {
  const pathName = usePathname()
  const currentPath = menus.find((nav) => nav.href === pathName)

  return (
    <nav className={cn('flex-col items-start md:flex-row md:items-center', className)}>
      {menus.map((menu) => (
        <Link
          key={menu.title}
          href={menu.href}
          className={cn(
            buttonVariants({ variant: 'link' }),
            'text-primary/50',
            currentPath?.href === menu.href && 'text-primary hover:no-underline'
          )}
        >
          {menu.icon} {menu.title}
        </Link>
      ))}
    </nav>
  )
}

export { MobileMenu } from './mobile'
