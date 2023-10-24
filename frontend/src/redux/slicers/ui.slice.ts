import { createSlice } from '@reduxjs/toolkit'

const UiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMenuOpen: false,
    themeState: 'dark',
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    setTheme: (state, action) => void (state.themeState = action.payload),
    toggleTheme: (state) => {
      state.themeState = state.themeState === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.themeState)
    },
  },
})

export const { toggleMenu, setTheme, toggleTheme } = UiSlice.actions
export default UiSlice.reducer
