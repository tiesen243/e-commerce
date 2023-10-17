'use client'

import { Box, Fab } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTheme } from '@/redux/slicers/theme.slice'
import { RootState } from '@/redux/store'
import { DarkMode, LightMode } from '@mui/icons-material'

const ThemeBtn = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.themeState)

  const handleClick = () => dispatch(toggleTheme())
  return (
    <Box role="presentation" onClick={handleClick} sx={{ position: 'fixed', bottom: 16, right: 16, color: 'primary' }}>
      <Fab size="small" aria-label="toggle theme" className="btn">
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </Fab>
    </Box>
  )
}

export default ThemeBtn
