import axios from '@/lib/axios'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  try {
    const { data } = await axios.get('/product/me', {
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
      },
    })
    console.log(data)

    return NextResponse.json({ message: 'Hello, world!', products: data })
  } catch (error: any) {
    const data = error.response.data
    return NextResponse.json({ message: data.message, products: [] })
  }
}
