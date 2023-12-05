'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import UserAvatar from './user.avatar'
import UserMenu from './user.menu'

const User: React.FC = () => {
  const { user } = useSession().data || {}

  if (!user) return <Link href="/api/auth/signin/credentials">Sign in</Link>

  return (
    <DropdownMenu>
      <UserAvatar user={user} />
      <UserMenu user={user} />
    </DropdownMenu>
  )
}

export default User
