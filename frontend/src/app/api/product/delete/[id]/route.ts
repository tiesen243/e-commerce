import axios from '@/lib/axios'
import { getUserToken } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'
type Params = {
  params: {
    id: string
  }
}

export const DELETE = async (req: NextRequest, { params }: Params) => {
  const token = await getUserToken(req)
  const { id } = params

  try {
    await axios.delete(`/product/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 })
  } catch (e: any) {
    const message = e.response.data.message
    return NextResponse.json({ message }, { status: 400 })
  }
}
