import BackBtn from '@/components/BackBtn'
import { Card } from '@/components/ui'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <Card className="relative mx-4 w-full max-w-screen-md px-4 py-8 shadow-lg">
      <BackBtn className="absolute inset-4" />
      {children}
    </Card>
  </div>
)

export default AuthLayout
