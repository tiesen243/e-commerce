import { MobileMenu, Navigation } from './navigation'
import UserMenu from './user'
import { Logo, Search } from './utils'

const Header: React.FC = () => (
  <header className="sticky inset-0 border-b border-secondary bg-card py-2 shadow-lg backdrop-blur">
    <nav className="container flex max-w-screen-xl items-center justify-between gap-2">
      <MobileMenu />
      <Logo />
      <Navigation className="hidden md:block" />
      <Search className="hidden md:flex" />
      <UserMenu />
    </nav>
  </header>
)

export default Header
