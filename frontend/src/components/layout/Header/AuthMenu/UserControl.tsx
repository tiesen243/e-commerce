import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui'
import { IUser } from '@/types/user'
import { GanttChartSquare, LogOutIcon, ShoppingCart, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const UserControl: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <>
      <DropdownMenuLabel>{user.userName}</DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        {controllers.map((controller, idx: number) => (
          <DropdownMenuItem key={idx} asChild>
            <Link href={controller.href} className="flex gap-2">
              {controller.icon}
              <span>{controller.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href="/manage" className="flex gap-2">
            <GanttChartSquare />
            <span>Manage</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => signOut({ redirect: false })}
        >
          <LogOutIcon />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </>
  )
}

export default UserControl

const controllers = [
  {
    label: 'Profile',
    icon: <User />,
    href: '/profile',
  },
  {
    label: 'Cart',
    icon: <ShoppingCart />,
    href: '/profile/cart',
  },
]
