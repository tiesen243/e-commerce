import Header from '@/components/Header'
import ThemeBtn from '@/components/ThemeBtn'
import { Container } from '@mui/material'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <ThemeBtn />
    </>
  )
}

export default MainLayout
