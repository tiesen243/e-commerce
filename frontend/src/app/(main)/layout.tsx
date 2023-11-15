import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen select-none flex-col">
    <Header />
    <main className="container max-w-screen-xl flex-grow"> {children} </main>
    <Footer />
  </div>
)

export default MainLayout
