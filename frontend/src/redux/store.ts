import { configureStore } from '@reduxjs/toolkit'

import ThemeSlice from './slicers/theme.slice'
import UiSlice from './slicers/ui.slice'

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    ui: UiSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export default store
