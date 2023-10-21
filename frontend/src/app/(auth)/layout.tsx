import { Container } from '@mui/material'
import { NextPage } from 'next'

const AuthLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <Container maxWidth="md" className="flex flex-col gap-4 main mx-4 px-4 py-8 rounded-md shadow-lg overflow-hidden">
        {children}
      </Container>
    </div>
  )
}

export default AuthLayout
