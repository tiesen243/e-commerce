import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-dvh flex-col gap-4">
    <Header />
    <main className="container my-4 max-w-screen-xl grow">{children}</main>
    <Footer />
  </div>
)

export default MainLayout
