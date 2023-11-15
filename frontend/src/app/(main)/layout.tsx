import Header from '@/components/layout/Header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
  </>
)

export default MainLayout
