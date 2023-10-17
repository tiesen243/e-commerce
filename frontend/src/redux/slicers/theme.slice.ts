import { createSlice } from '@reduxjs/toolkit'

type State = {
  themeState: string
}

const initialState: State = {
  themeState: 'light',
}

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => void (state.themeState = action.payload),
    toggleTheme: (state) => {
      if (state.themeState === 'light') state.themeState = 'dark'
      else state.themeState = 'light'
      localStorage.setItem('theme', state.themeState)
      document.documentElement.classList.toggle('dark', state.themeState === 'dark')
    },
  },
})

export const { setTheme, toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
