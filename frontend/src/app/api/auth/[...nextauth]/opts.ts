import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const opts: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter your email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error('Please enter your email and password')
        const { email, password } = credentials

        const loginRes = await fetch('https://yuki-api.vercel.app/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }).then((res) => res.json())
        if (loginRes.statusCode !== 201) throw new Error(loginRes.message)

        const userRes = await fetch('https://yuki-api.vercel.app/user/info', {
          method: 'GET',
          headers: { Authorization: `Bearer ${loginRes.data.token}` },
        }).then((res) => res.json())
        if (userRes.statusCode !== 200) throw new Error(userRes.message)

        const user = { user: userRes.data, ...loginRes.data }
        return user
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (!user) return token
      token.user = user.user
      token.token = user.token
      return token
    },

    async session({ session, token }) {
      if (!session) return session
      session.user = token.user
      session.token = token.token
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
