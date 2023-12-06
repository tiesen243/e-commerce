'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import UserAvatar from './user.avatar'
import UserMenu from './user.menu'
import { buttonVariants } from '@/components/ui/button'

const User: React.FC = () => {
  const { user } = useSession().data || {}

  if (!user)
    return (
      <Link href="/login" className={buttonVariants({ variant: 'outline' })}>
        Sign in
      </Link>
    )

  return (
    <DropdownMenu>
      <UserAvatar user={user} />
      <UserMenu user={user} />
    </DropdownMenu>
  )
}

export default User
