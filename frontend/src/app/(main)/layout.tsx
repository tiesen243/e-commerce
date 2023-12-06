import Header from '@/components/header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col gap-4">
    <Header />
    <main className="container max-w-screen-xl">{children}</main>
  </div>
)

export default MainLayout
