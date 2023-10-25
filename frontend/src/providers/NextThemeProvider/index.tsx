'use client'

import { ThemeProvider } from 'next-themes'

const NextThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider storageKey="theme" enableSystem={false} attribute="class">
    {children}
  </ThemeProvider>
)

export default NextThemeProvider
