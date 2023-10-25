import { Footer, Header } from '@/components'
import { Container } from '@mui/material'

interface Props {
  children: React.ReactNode
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3, mb: 3, flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </main>
  )
}

export default MainLayout
