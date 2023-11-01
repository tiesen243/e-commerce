'use client'

import { Container } from '@mui/material'
import { useEffect, useState } from 'react'

import { Footer, Header, Notification } from '@/components'

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <main className="flex flex-col gap-3 min-h-screen w-screen select-none">
      {/* Header */}
      <Header />

      {/* Content */}
      <Container className="flex-grow">{children}</Container>

      {/* Actions */}
      <Notification />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Template
