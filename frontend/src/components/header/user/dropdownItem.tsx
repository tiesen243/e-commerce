import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import {
  LayoutDashboard,
  LogOutIcon,
  MoonStarIcon,
  ShoppingCartIcon,
  SunDimIcon,
  UserIcon,
} from 'lucide-react'
import Link from 'next/link'

interface Props {
  title: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
}

export const DropdownItem: React.FC<Props> = ({ title, icon, href, onClick }) => (
  <DropdownMenuItem asChild>
    <Link href={href ? href : '#'} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </Link>
  </DropdownMenuItem>
)

const className = 'mr-2 h-4 w-4'
export const items = [
  {
    title: 'Profile',
    icon: <UserIcon className={className} />,
    href: '/profile',
  },
  {
    title: 'Cart',
    icon: <ShoppingCartIcon className={className} />,
    href: '/profile/cart',
  },
  {
    title: 'Dashboard',
    icon: <LayoutDashboard className={className} />,
    href: '/dashboard',
  },
]

export const DarkModeIcon: React.FC = () => <MoonStarIcon className={className} />
export const LightModeIcon: React.FC = () => <SunDimIcon className={className} />
export const LogoutIcon: React.FC = () => <LogOutIcon className={className} />
