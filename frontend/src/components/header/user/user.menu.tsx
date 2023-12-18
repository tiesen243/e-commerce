import { signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { IUser } from '@/types/user'
import { DarkModeIcon, DropdownItem, LightModeIcon, LogoutIcon, items } from './dropdownItem'

const UserMenu: React.FC<{ user: IUser }> = ({ user }) => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleLogout = () => signOut({ redirect: false, callbackUrl: '/' })
  const handleToggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

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
        <DropdownItem
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          icon={theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          onClick={handleToggleTheme}
        />
        <DropdownItem title="Sign out" icon={<LogoutIcon />} onClick={handleLogout} />
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}

export default UserMenu
