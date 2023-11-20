import nextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from './axios'

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
          if (!credentials?.email || !credentials?.password)
            throw new Error('Please enter your email and password')

          const { email, password } = credentials

          const { data } = await axios.post('/auth/login', { email, password })
          return data.data
        } catch (error: any) {
          throw new Error(error.response.data.message)
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user, trigger }) => {
      if (!user) return token

      if (trigger === 'update') {
        const userInfo = await getUserInfo(user.refreshToken)
        token.role = userInfo.role
      }

      const userInfo = await getUserInfo(user.refreshToken)

      token.refreshToken = user.refreshToken
      token.role = userInfo.role

      return token
    },

    session: async ({ session, token, trigger }) => {
      if (!token) return session

      if (trigger === 'update') session.user = await getUserInfo(token.refreshToken)

      const userInfo = await getUserInfo(token.refreshToken)

      session.user = userInfo
      session.token = token.refreshToken

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

const getUserInfo = async (token: string) => {
  const { data } = await axios.get('/user/me', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return data.data
}
