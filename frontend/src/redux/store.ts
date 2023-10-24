import { configureStore } from '@reduxjs/toolkit'

import UiSlice from './slicers/ui.slice'

const store = configureStore({
  reducer: {
    ui: UiSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export default store
