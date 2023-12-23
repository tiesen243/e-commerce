import type { NextPage } from 'next'

const AuthLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
    {children}
  </main>
)

export default AuthLayout
