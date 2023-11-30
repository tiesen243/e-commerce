import axios from '@/lib/axios'
import { NextResponse } from 'next/server'

interface Params {
  params: {
    id: string
  }
}

export const GET = async (_req: Request, { params }: Params) => {
  const { id } = params

  try {
    const { data } = await axios.get(`/product/${id}`)
    return NextResponse.json(data, { status: 200 })
  } catch (e: any) {
    const message = e.response.data.message
    const status = e.response.status
    return NextResponse.json({ message }, { status })
  }
}
