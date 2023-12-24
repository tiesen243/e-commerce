'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { footerMenus, type Menu } from '../menus'

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const pathname = usePathname()
  const [active, setActive] = useState<boolean>(pathname === item.href)

  useEffect(() => {
    setActive(pathname === item.href)
  }, [pathname, item.href])

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          'block p-2 text-lg text-muted-foreground underline-offset-4 hover:text-primary hover:underline md:inline-block md:text-sm',
          {
            'text-primary hover:no-underline': active,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  )
}

const FooterMenu = () => (
  <nav>
    <ul>
      {footerMenus.map((menu: Menu) => (
        <FooterMenuItem key={menu.title} item={menu} />
      ))}
    </ul>
  </nav>
)

export default FooterMenu
