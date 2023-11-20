import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const role = req.nextauth.token?.role
    const pathname = req.nextUrl.pathname

    if (pathname.startsWith('/manage') && role === 'user') return NextResponse.rewrite(new URL('/deny', req.nextUrl))

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = { matcher: ['/manage/:path*', '/profile/:path*'] }
