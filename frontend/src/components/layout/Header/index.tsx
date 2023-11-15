'use client'

import ThemeBtn from '@/components/ThemeBtn'
import AuthMenu from './AuthMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Search from './Search'
import { Card } from '@/components/ui'
import Nav from './Nav'

const Header: React.FC = () => (
  <Card className="sticky inset-0 rounded-none bg-transparent p-2 shadow-lg backdrop-blur-lg">
    <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4">
      <MobileMenu />
      <Logo />
      <section className="hidden  md:flex">
        <Nav />
      </section>
      <Search />

      <section className="flex items-center gap-4">
        <ThemeBtn />
        <AuthMenu />
      </section>
    </nav>
  </Card>
)

export default Header
