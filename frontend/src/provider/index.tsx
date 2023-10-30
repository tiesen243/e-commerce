import { FC, PropsWithChildren } from 'react'
import AuthProvider from './AuthProvider'
import NextThemeProvider from './NextThemeProvider'
import MuiThemeProvider from './MuiThemeProvider'

const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <NextThemeProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </NextThemeProvider>
    </AuthProvider>
  )
}

export default AppProviders
