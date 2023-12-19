import { Toaster } from '@/components/ui/toaster'
import AuthProvider from './auth.provider'
import ThemeProvider from './theme.provider'

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  </AuthProvider>
)
