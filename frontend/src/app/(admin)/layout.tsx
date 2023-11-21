import BackBtn from '@/components/BackBtn'
import AuthMenu from '@/components/layout/Header/AuthMenu'
import { Button, Card, Typography } from '@/components/ui'
import Link from 'next/link'

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Card className="px-4 py-2">
        <header className="container mx-auto flex max-w-screen-xl items-center justify-between">
          <BackBtn />
          <Typography variant="h1" fontWeight="black" className="text-center">
            Dashboard
          </Typography>

          <AuthMenu />
        </header>
      </Card>

      <main className="container grid max-w-screen-xl grid-cols-1 space-x-4 space-y-2 md:grid-cols-3">
        <Card>
          <ul className="space-y-2">
            <li>
              <Typography variant="h4" fontWeight="bold">
                Admin
              </Typography>
            </li>
            {navItems.map((item, idx: number) => (
              <li key={idx}>
                <Button asChild>
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </Card>

        <section className="md:col-span-2">{children}</section>
      </main>
    </div>
  )
}

export default AdminLayout

const navItems = [
  {
    title: 'Manage Products',
    href: '/manage/products',
  },
  {
    title: 'Create Product',
    href: '/manage/create',
  },
  {
    title: 'Manage Orders',
    href: '/admin/orders',
  },
  {
    title: 'Manage Users',
    href: '/admin/users',
  },
]
