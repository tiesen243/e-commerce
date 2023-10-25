import AuthProvider from './AuthProvider'
import MuiThemeProvider from './MuiThemeProvider'
import NextThemeProvider from './NextThemeProvider'
import ReduxProvider from './ReduxProvider'

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <ReduxProvider>
      <NextThemeProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </NextThemeProvider>
    </ReduxProvider>
  </AuthProvider>
)

export default AppProvider
