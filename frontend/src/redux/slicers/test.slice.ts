import { createSlice } from '@reduxjs/toolkit'

const TestSlice = createSlice({
  name: 'test',
  initialState: {
    test: 'test',
  },
  reducers: {
    testAction: (state, action) => {
      state.test = action.payload
    },
  },
})

export const { testAction } = TestSlice.actions
export default TestSlice.reducer
