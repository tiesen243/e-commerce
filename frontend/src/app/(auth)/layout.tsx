import { Container } from '@mui/material'
import { NextPage } from 'next'

const AuthLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <Container maxWidth="md" className="main mx-4 flex flex-col gap-4 overflow-hidden rounded-md px-4 py-8 shadow-lg">
        {children}
      </Container>
    </div>
  )
}

export default AuthLayout
