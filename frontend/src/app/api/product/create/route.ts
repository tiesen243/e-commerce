import axios from '@/lib/axios'
import { getUserToken } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const token = await getUserToken(req)
    const body = await req.json()

    await axios.post('/product/create', body, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return NextResponse.json({ message: 'Created successfully!' }, { status: 201 })
  } catch (e: any) {
    const message = e.response.data.message
    const status = e.response.status

    return NextResponse.json({ message }, { status })
  }
}
