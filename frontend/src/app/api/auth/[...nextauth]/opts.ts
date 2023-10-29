import { API_URL, getToken, getUser } from '@/utils'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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
    async jwt({ token, user }) {
      if (!user) return token
      token.role = await getUser(user.refreshToken).then((res) => res.role)
      token.refreshToken = user.refreshToken
      return token
    },

    async session({ session, token }) {
      if (!session) return session
      session.user = await getUser(token.refreshToken)
      session.token = token.refreshToken
      setInterval(async () => (session.token = await getToken(token.refreshToken)), 15 * 60 * 1000)
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

export default opts
