import { createSlice } from '@reduxjs/toolkit'
import { deleteCookie } from 'cookies-next'

export enum Role {
  ADMIN = 'admin',
  SELLER = 'seller',
  USER = 'user',
}
export interface User {
  _id: string
  userName: string
  avatar: string
  email: string
  role: Role
  createdAt: string
  updatedAt: string
  isAuth: boolean
}

const initialState = {
  _id: '',
  userName: '',
  avatar: '',
  email: '',
  role: Role.USER,
  createdAt: '',
  updatedAt: '',
  isAuth: false,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state._id = action.payload._id
      state.userName = action.payload.userName
      state.avatar = action.payload.avatar
      state.email = action.payload.email
      state.role = action.payload.role
      state.createdAt = action.payload.createdAt
      state.updatedAt = action.payload.updatedAt
      state.isAuth = true
    },
    logout: (state) => {
      state._id = ''
      state.userName = ''
      state.avatar = ''
      state.email = ''
      state.role = Role.USER
      state.createdAt = ''
      state.updatedAt = ''
      state.isAuth = false
      deleteCookie('token')
    },
  },
})

export const { login, logout } = UserSlice.actions
export default UserSlice.reducer
