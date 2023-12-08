import axios from '@/lib/axios'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const PATCH = async (req: NextRequest) => {
  const data = await req.json()
  const { token } = (await getToken({ req, secret: process.env.NEXTAUTH_SECRET })) as any

  try {
    await axios.patch('/user/update/info', data, { headers: { Authorization: `Bearer ${token}` } })

    return NextResponse.json({ message: 'success' }, { status: 200 })
  } catch (e: any) {
    const message = e.response.data.message
    const status = e.response.status
    return NextResponse.json({ message }, { status })
  }
}