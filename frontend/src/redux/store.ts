import { configureStore } from '@reduxjs/toolkit'

import ThemeSlice from './slicers/theme.slice'

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export default store
