import nextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { IUser, axios } from '@/lib'

const opts: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) throw new Error('Please enter your email and password')
          const { email, password } = credentials

          const { data } = await axios.post('/auth/login', { email, password })

          return data.data
        } catch (err: any) {
          throw new Error(err.response.data.message, {
            cause: err.response.data.status,
          })
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger }) {
      if (trigger === 'update') {
        const accessToken = await refreshAccessToken(token.refreshToken)
        token.accessToken = accessToken
      }
      if (user) {
        return {
          ...token,
          refreshToken: user.refreshToken,
          accessToken: user.accessToken,
          role: await getUser(user.accessToken).then((res) => res.role),
        }
      }

      return token
    },

    async session({ session, token, trigger }) {
      if (trigger === 'update') {
        session.user = await getUser(token.refreshToken)
        session.token = token.accessToken
      }

      if (session)
        return {
          ...session,
          token: token.accessToken,
          user: await getUser(token.refreshToken),
        }

      return session
    },
  },

  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: '/auth/login',
  },
}

const handlers = nextAuth(opts)
export { handlers as GET, handlers as POST }

export const getUser = async (token: string): Promise<IUser> => {
  const { data } = await axios.get('/user/me', { headers: { Authorization: `Bearer ${token}` } })
  return data.data
}

export const refreshAccessToken = async (refreshToken: string) => {
  const { data } = await axios.post('/auth/refresh', { refreshToken })
  return data.data.accessToken
}
