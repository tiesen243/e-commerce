import nextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { IUser, API_URL } from '@/lib'

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
        if (!credentials?.email || !credentials?.password) throw new Error('Please enter your email and password')
        const { email, password } = credentials

        const loginRes = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }).then((res) => res.json())

        if (loginRes.statusCode !== 201) throw new Error(loginRes.message)
        return loginRes.data
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
  const user = await fetch(`${API_URL}/user/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
  if (user.statusCode !== 200) throw new Error(user.message)

  return user.data
}

export const refreshAccessToken = async (refreshToken: string) => {
  const data = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })
    .then((res) => res.json())
    .then((data) => data.data)

  return data.accessToken
}
