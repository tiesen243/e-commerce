import Header from '@/components/Header'
import ThemeBtn from '@/components/ThemeBtn'
import { Container } from '@mui/material'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="my-4">
        {children}
      </Container>
    </>
  )
}

export default MainLayout
