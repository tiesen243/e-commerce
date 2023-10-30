import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'

const ThemeBtn: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <IconButton onClick={handleClick} color="secondary">
      {theme === 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
    </IconButton>
  )
}

export default ThemeBtn
