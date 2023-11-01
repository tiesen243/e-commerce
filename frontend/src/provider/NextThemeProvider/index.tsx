'use client'

import { ThemeProvider } from 'next-themes'

const NextThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
    {children}
  </ThemeProvider>
)

export default NextThemeProvider
