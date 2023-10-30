'use client'

import { Container } from '@mui/material'

import { Footer, Header, Loading, Notification } from '@/components'
import { Suspense, useEffect, useState } from 'react'

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <main className="flex flex-col gap-4 min-h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <Suspense fallback={<Loading />}>
        <Container className="flex-grow">{children}</Container>
      </Suspense>

      {/* Actions */}
      <Notification />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Template
