import IUser from '@/types/user.type'
import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: IUser
    token: string
  }

  interface User extends DefaultUser {
    user: IUser
    token: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user: IUser
    token: string
  }
}
