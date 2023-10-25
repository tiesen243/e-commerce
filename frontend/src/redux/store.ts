import { configureStore } from '@reduxjs/toolkit'

import TestSlice from './slicers/test.slice'
const store = configureStore({
  reducer: {
    test: TestSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
