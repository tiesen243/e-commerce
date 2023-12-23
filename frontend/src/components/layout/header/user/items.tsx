import { signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LogOutIcon, MoonIcon, SunDimIcon } from 'lucide-react'

const iconClass = 'mr-2 h-4 w-4'

export const ThemeBtn: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleToggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <DropdownMenuItem onClick={handleToggleTheme}>
      {theme === 'dark' ? <SunDimIcon className={iconClass} /> : <MoonIcon className={iconClass} />}
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </DropdownMenuItem>
  )
}

export const SignOutDialog: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AlertDialog>
    {children}
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          You will be logged out and redirected to the homepage.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => signOut({ callbackUrl: '/' })}>Logout</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export const SignOutBtn: React.FC = () => (
  <AlertDialogTrigger asChild>
    <DropdownMenuItem>
      <LogOutIcon className={iconClass} /> Sign out
    </DropdownMenuItem>
  </AlertDialogTrigger>
)

interface Props {
  title: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
}

export const DropdownItem: React.FC<Props> = ({ title, icon, href, onClick }) => (
  <DropdownMenuItem asChild>
    <Link
      href={href ? href : '#'}
      onClick={onClick}
      {...(href?.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {icon}
      <span>{title}</span>
    </Link>
  </DropdownMenuItem>
)
