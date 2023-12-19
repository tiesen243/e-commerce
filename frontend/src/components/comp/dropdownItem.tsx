import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import Link from 'next/link'

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
