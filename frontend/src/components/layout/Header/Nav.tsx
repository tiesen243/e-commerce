'use client'

import { navItems } from '@/lib/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav: React.FC = () => {
  const pathName = usePathname()
  return (
    <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center">
      {navItems.map((item, idx: number) => (
        <li key={idx}>
          <Link
            href={item.href}
            className={cn(
              pathName === item.href
                ? 'text-primary underline underline-offset-4'
                : 'text-secondary',
              'hover:text-primary/50'
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
