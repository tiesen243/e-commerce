import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DropdownMenuItem } from './ui'

const ThemeDropdownBtn = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <DropdownMenuItem className="flex gap-2" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
      <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </DropdownMenuItem>
  )
}

export default ThemeDropdownBtn
