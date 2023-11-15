import Header from '@/components/layout/Header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default MainLayout
