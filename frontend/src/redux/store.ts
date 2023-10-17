import { configureStore } from '@reduxjs/toolkit'

import ThemeSlice from './slicers/theme.slice'
import UserSlice from './slicers/user.slice'

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    user: UserSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export default store
