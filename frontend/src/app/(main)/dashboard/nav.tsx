'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui'
import { adminNav, manageNav } from '@/lib/nav'
import { cn } from '@/lib/utils'

const DashboardNav: React.FC = () => {
  const pathname = usePathname()
  const role = useSession().data?.user.role
  const nav = role === 'admin' ? adminNav : manageNav

  return (
    <nav>
      <ul className="grid grid-cols-2 gap-2">
        {nav.map(({ href, icon }) => (
          <li key={href}>
            <Button
              variant="outline"
              className={cn(
                'flex w-full items-center justify-start gap-2',
                pathname === href ? 'text-primary' : 'text-secondary'
              )}
              asChild
            >
              <Link href={href}>
                {icon}
                {href}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DashboardNav
