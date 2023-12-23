'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import UserAvatar from './user.avatar'
import UserMenu from './user.menu'
import { SignOutDialog } from './items'

const User: React.FC = () => {
  const { status, data } = useSession()

  if (status === 'unauthenticated')
    return (
      <Link href="/login" className={buttonVariants({ variant: 'default' })}>
        Sign in
      </Link>
    )

  if (status === 'loading' || !data?.user)
    return <Skeleton className="h-10 w-10 rounded-full ring-primary hover:ring-2" />

  return (
    <SignOutDialog>
      <DropdownMenu>
        <UserAvatar user={data.user} />
        <UserMenu user={data.user} />
      </DropdownMenu>
    </SignOutDialog>
  )
}

export default User
