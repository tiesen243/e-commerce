import { Card } from '@/components/ui'
import AuthMenu from './AuthMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Nav from './Nav'
import Search from './Search'

const Header: React.FC = () => (
  <Card className="sticky inset-0 rounded-none bg-transparent p-2 shadow-lg backdrop-blur-lg">
    <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4">
      <MobileMenu />
      <Logo />

      <section className="hidden  md:flex">
        <Nav />
      </section>

      <Search className="hidden md:flex" />

      <AuthMenu />
    </nav>
  </Card>
)

export default Header
