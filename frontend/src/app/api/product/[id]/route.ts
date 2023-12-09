import axios from '@/lib/axios'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const getId = (req: NextRequest) => req.nextUrl.pathname.split('/').pop()

export const DELETE = async (req: NextRequest) => {
  const id = getId(req)
  const { token } = (await getToken({ req, secret: process.env.NEXTAUTH_SECRET })) as any

  try {
    await axios.delete(`/product/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    return NextResponse.json({ message: `Deleted ${id}` }, { status: 200 })
  } catch (e: any) {
    const message = e.response.data.message
    const status = e.response.status
    return NextResponse.json({ message }, { status })
  }
}
