'use client'

import { Toaster } from '@/components/ui'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...rest }) => (
  <NextThemeProvider defaultTheme="system" attribute="class" storageKey="theme" disableTransitionOnChange {...rest}>
    {children}
    <Toaster />
  </NextThemeProvider>
)

export default ThemeProvider
