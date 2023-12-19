import { useTheme } from 'next-themes'
import { DropdownItem } from './dropdownItem'
import { MoonIcon, SunDimIcon } from 'lucide-react'

const ThemeBtn: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleToggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <DropdownItem
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      icon={
        theme === 'dark' ? (
          <SunDimIcon className="mr-2 h-4 w-4" />
        ) : (
          <MoonIcon className="mr-2 h-4 w-4" />
        )
      }
      onClick={handleToggleTheme}
    />
  )
}

export default ThemeBtn
