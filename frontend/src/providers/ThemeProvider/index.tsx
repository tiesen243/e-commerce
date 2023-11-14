'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...rest }) => (
  <NextThemeProvider
    defaultTheme="system"
    attribute="class"
    storageKey="theme"
    {...rest}
  >
    {children}
  </NextThemeProvider>
)

export default ThemeProvider
