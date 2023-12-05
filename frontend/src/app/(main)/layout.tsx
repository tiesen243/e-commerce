import Header from '@/components/header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container max-w-screen-xl">{children}</main>
  </>
)

export default MainLayout
