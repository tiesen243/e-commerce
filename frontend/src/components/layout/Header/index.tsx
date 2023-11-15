'use client'

import ThemeBtn from '@/components/ThemeBtn'
import AuthMenu from './AuthMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Search from './Search'

const Header: React.FC = () => (
  <header className="sticky inset-0 bg-card py-2 shadow-lg">
    <nav className="container mx-auto flex items-center justify-between gap-4">
      <MobileMenu />
      <Logo />
      <Search />

      <section className="flex items-center gap-2">
        <ThemeBtn />
        <AuthMenu />
      </section>
    </nav>
  </header>
)

export default Header
