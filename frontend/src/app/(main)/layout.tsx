'use client'

import { Footer, Header } from '@/components'
import Sidebar from '@/components/Layouts/Sidebar'
import { useScreen } from '@/hooks'
import { Container } from '@mui/material'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useScreen() < 768
  return (
    <>
      <main className="relative flex min-h-screen w-screen select-none flex-col overflow-x-hidden">
        <Header />
        <Container maxWidth="lg" className="mb-4 mt-20 flex-grow ">
          {children}
        </Container>
        <Footer />
      </main>
      {isMobile && <Sidebar />}
    </>
  )
}

export default MainLayout
