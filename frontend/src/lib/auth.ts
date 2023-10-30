import nextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { API_URL } from './constants'
import { getUser, refreshAccessToken } from './utils'

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
    async jwt({ token, user, trigger, session }) {
      // Refresh access token
      if (trigger === 'update' && session) {
        token.accessToken = await refreshAccessToken(token.refreshToken)
      }
      // Initial sign in
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          role: await getUser(user.accessToken).then((res) => res.role),
        }
      }

      return token
    },

    async session({ session, token }) {
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
    signIn: '/login',
  },
}

const handlers = nextAuth(opts)
export { handlers as GET, handlers as POST }
