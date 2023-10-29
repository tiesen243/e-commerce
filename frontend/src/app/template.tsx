import { Container } from '@mui/material'
import { Suspense } from 'react'

import { Footer, Header, Loading, Notification, ThemeButton } from '@/components'

const Template: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="flex flex-col gap-4 min-h-screen w-screen">
    <Header />

    <Suspense fallback={<Loading />}>
      <Container className="flex-grow">{children}</Container>
    </Suspense>

    <ThemeButton />
    <Notification />

    <Footer />
  </main>
)

export default Template
