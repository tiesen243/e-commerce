import { FC, PropsWithChildren } from 'react'

import AuthProvider from './AuthProvider'
import MuiThemeProvider from './MuiThemeProvider'
import NextThemeProvider from './NextThemeProvider'

const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <NextThemeProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </NextThemeProvider>
  </AuthProvider>
)

export default AppProviders
