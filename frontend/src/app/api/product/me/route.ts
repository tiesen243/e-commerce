import axios from '@/lib/axios'
import { getUserToken } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const GET = async (req: NextRequest) => {
  try {
    const token = await getUserToken(req)
    const { data } = await axios.get('/product/me', {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!data) throw new Error('Something went wrong')

    return NextResponse.json({ data: data.data }, { status: 200 })
  } catch (e: any) {
    const message: string = e.response.data.message || 'Something went wrong'
    const status: number = e.response.status || 500
    return NextResponse.json({ message }, { status })
  }
}
