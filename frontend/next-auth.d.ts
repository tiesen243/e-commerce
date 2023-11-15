import { IUser, Role } from '@/types/user'
import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: IUser
    token: string
  }

  interface User extends DefaultUser {
    user: IUser
    accessToken: string
    refreshToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: Role
    refreshToken: string
    expires: number
  }
}
