'use client'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    {children}
    <Toaster />
  </NextThemeProvider>
)

export default ThemeProvider
