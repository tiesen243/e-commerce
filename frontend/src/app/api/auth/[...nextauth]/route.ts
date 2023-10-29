import NextAuth from 'next-auth/next'
import opts from './opts'

const handler = NextAuth(opts)

export { handler as GET, handler as POST }
