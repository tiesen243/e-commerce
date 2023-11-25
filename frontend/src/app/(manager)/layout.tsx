import BackBtn from '@/components/BackBtn'
import AuthMenu from '@/components/layout/Header/AuthMenu'
import { Card } from '@/components/ui'
import Nav from './nav'

const ManagerLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div>
    <Card className="sticky inset-0 z-50 px-4 py-2">
      <header className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <BackBtn />
        <h1 className="text-center">Dashboard</h1>

        <AuthMenu />
      </header>
    </Card>

    <main className="container grid max-w-screen-xl grid-cols-1 space-x-4 space-y-2 md:grid-cols-3 lg:grid-cols-4">
      <Nav />
      <section className="container pb-12 md:col-span-2 lg:col-span-3">
        {children}
      </section>
    </main>
  </div>
)

export default ManagerLayout
