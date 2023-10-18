import Header from '@/components/Header'
import ThemeBtn from '@/components/ThemeBtn'
import GlobalProvider from '@/providers/GlobalProvider'
import { Container } from '@mui/material'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <Header />
      <Container maxWidth="lg" className="my-4">
        {children}
      </Container>
      <ThemeBtn />
    </GlobalProvider>
  )
}

export default MainLayout
