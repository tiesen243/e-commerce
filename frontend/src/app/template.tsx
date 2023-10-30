import { Container } from '@mui/material'
import { Suspense } from 'react'

import { Footer, Header, Notification, ThemeButton } from '@/components'

const Template: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="flex flex-col gap-4 min-h-screen w-screen">
    {/* Header */}
    <Header />

    {/* Content */}
    <Suspense>
      <Container className="flex-grow">{children}</Container>
    </Suspense>

    {/* Actions */}
    {/* <ThemeButton /> */}
    <Notification />

    {/* Footer */}
    <Footer />
  </main>
)

export default Template
