import { Container } from '@mui/material'

import { Footer, Header, Notification } from '@/components'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="flex flex-col min-h-screen w-screen select-none">
    <Header />

    <Container maxWidth="lg" className="flex-grow my-8">
      {children}
    </Container>

    {/* Actions */}
    <Notification />

    {/* Footer */}
    <Footer />
  </main>
)

export default MainLayout
