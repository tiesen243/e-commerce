import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Container } from '@mui/material'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen w-screen overflow-x-hidden select-none">
      <Header />
      <Container maxWidth="lg" className="my-4 flex-grow">
        {children}
      </Container>
      <Footer />
    </main>
  )
}

export default MainLayout
