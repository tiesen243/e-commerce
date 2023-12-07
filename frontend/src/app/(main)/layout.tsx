import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col gap-4">
    <Header />
    <main className="container max-w-screen-xl">{children}</main>
    <Toaster />
  </div>
)

export default MainLayout
