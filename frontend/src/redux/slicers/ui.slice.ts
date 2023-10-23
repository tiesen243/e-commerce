import { createSlice } from '@reduxjs/toolkit'

const UiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const { toggleMenu } = UiSlice.actions
export default UiSlice.reducer
