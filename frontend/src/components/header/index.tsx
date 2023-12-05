import { Card } from '@/components/ui/card'

import Logo from './logo'
import MobileMenu from './mobile-menu'
import Navigation from './nav'
import Search from './search'
import UserMenu from './user'

const Header: React.FC = () => (
  <Card className="sticky inset-0 bg-transparent py-2 backdrop-blur">
    <header className="container flex max-w-screen-xl items-center justify-between gap-2">
      <MobileMenu />

      <Logo />

      <Navigation className="hidden md:block" />

      <Search className="hidden md:grid" />

      <UserMenu />
    </header>
  </Card>
)

export default Header
