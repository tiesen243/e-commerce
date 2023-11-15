const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <main className="rounded bg-secondary px-4 py-8 shadow-lg">{children}</main>
  </div>
)

export default AuthLayout
