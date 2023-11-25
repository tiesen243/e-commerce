import axios from '@/lib/axios'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.SECRET })
  try {
    const { data } = await axios.get('/product/me', {
      headers: { Authorization: `Bearer ${token?.token}` },
    })

    return NextResponse.json({ data }, { status: 200 })
  } catch (err: any) {
    const data = err.response.data

    return NextResponse.json({ error: data.message }, { status: err.status })
  }
}
