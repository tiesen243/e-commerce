'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { Button, Card, Typography } from '@/components/ui'
import { adminNav, manageNav } from '@/lib/nav'

const Nav: React.FC = () => {
  const { role } = useSession().data?.user || {}
  const items = role === 'admin' ? adminNav : manageNav

  return (
    <Card className="sticky z-40 h-fit">
      <ul className="grid w-full grid-cols-2 gap-2 md:grid-cols-1">
        {items.map((item, idx: number) => (
          <li key={idx}>
            <Button variant="outline" className="flex items-center justify-stretch" asChild>
              <Link href={item.href}>
                {item.icon}
                <Typography className="ml-4">{item.title}</Typography>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Nav
