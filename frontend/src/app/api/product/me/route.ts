import axios from '@/lib/axios'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const { token } = (await getToken({ req, secret: process.env.NEXTAUTH_SECRET })) as any

  try {
    const { data } = await axios.get('/product/me', {
      headers: { Authorization: `Bearer ${token}` },
    })

    return NextResponse.json({ products: data.data }, { status: 200 })
  } catch (e: any) {
    const message = e.response.data.message
    const status = e.response.status
    return NextResponse.json({ message }, { status })
  }
}
