'use client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextThemeProvider defaultTheme="dark" enableSystem attribute="class" disableTransitionOnChange>
    {children}
  </NextThemeProvider>
)

export default ThemeProvider
