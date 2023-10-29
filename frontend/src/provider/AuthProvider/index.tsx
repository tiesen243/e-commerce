'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
