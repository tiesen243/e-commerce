import { uploadImage } from '@/lib/firebase'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  console.log(body)
  const code = Math.floor(Math.random() * 1000000).toString()

  return NextResponse.json({
    message: `Hello world!`,
  })
}
