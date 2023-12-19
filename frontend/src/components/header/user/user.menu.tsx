import { signOut } from 'next-auth/react'

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { IUser } from '@/types/user'
import { DropdownItem } from '@/components/comp/dropdownItem'
import { LayoutDashboard, LogOutIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'
import ThemeBtn from '@/components/comp/themeBtn'

const UserMenu: React.FC<{ user: IUser }> = ({ user }) => {
  const end = user.role !== 'user' ? 3 : 2

  return (
    <DropdownMenuContent className="mt-2 w-56">
      <DropdownMenuLabel>{user.userName}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        {items.slice(0, end).map((item) => (
          <DropdownItem key={item.title} {...item} />
        ))}
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <ThemeBtn />
        <DropdownItem
          title="Sign out"
          icon={<LogOutIcon className="mr-2 h-4 w-4" />}
          onClick={() => signOut({ callbackUrl: '/' })}
        />
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}

export default UserMenu

const items = [
  {
    title: 'Account Center',
    icon: <UserIcon className="mr-2 h-4 w-4" />,
    href: 'https://account.tiesen.id.vn',
  },
  {
    title: 'Cart',
    icon: <ShoppingCartIcon className="mr-2 h-4 w-4" />,
    href: '/cart',
  },
  {
    title: 'Dashboard',
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    href: '/dashboard',
  },
]
