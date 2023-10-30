'use client'

import { ThemeProvider } from 'next-themes'

const NextThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
)

export default NextThemeProvider
