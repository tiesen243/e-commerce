import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import Search from './search'
import Logo from './logo'
import Navigation from './nav'

const MobileMenu: React.FC = () => (
  <Sheet>
    <SheetTrigger className="block md:hidden" asChild>
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
    </SheetTrigger>

    <SheetContent side="left" className="block space-y-4 md:hidden">
      <Logo />
      <Search className="flex md:hidden" />

      <Navigation className="flex md:hidden" />
    </SheetContent>
  </Sheet>
)

export default MobileMenu
