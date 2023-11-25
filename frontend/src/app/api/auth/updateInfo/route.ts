import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import axios from '@/lib/axios'

export const PATCH = async (req: NextRequest) => {
  const { token } = (await getToken({
    req,
    secret: process.env.JWT_SECRET,
  })) as any

  try {
    const data = await req.json()

    await axios.patch('/user/update/info', data, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return NextResponse.json({ message: 'User updated' }, { status: 200 })
  } catch (err: any) {
    const msg = err.response.data.message
    const cause = err.response.status

    return NextResponse.json({ message: msg }, { status: cause })
  }
}
