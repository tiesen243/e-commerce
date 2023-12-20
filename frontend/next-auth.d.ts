import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

import { Role } from '@/types/enum'
import type { IUser } from '@/types/user'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: IUser
  }

  interface User extends DefaultUser {
    user: IUser
    token: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: Role
    token: string
  }
}
