'use client'

import { Footer, Header } from '@/components'
import Sidebar from '@/components/Layouts/Sidebar'
import Menubar from '@/components/Layouts/Sidebar/Menubar'
import { useScreen } from '@/hooks'
import { Container } from '@mui/material'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useScreen() < 768
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-screen select-none flex-col overflow-x-hidden">
        {!isMobile && <Menubar />}
        <Container maxWidth="lg" className="mt-8 mb-4 flex-grow">
          {children}
        </Container>
        <Footer />
      </main>
      <Sidebar />
    </>
  )
}

export default MainLayout
