import axios from 'axios'

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-type': 'application/json' },
  timeout: 10000,
})

export const secret: string = process.env.NEXTAUTH_SECRET || ''
