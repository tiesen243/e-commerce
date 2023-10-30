import IUser, { Role } from '@/types/user.type'
import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: IUser
    token: string
    expires: number
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
    accessToken: string
    refreshToken: string
    expires: number
  }
}
