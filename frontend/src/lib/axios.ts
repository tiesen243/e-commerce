import axios from 'axios'

export const secret: string = process.env.NEXTAUTH_SECRET || ''
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL || ''

export default axios.create({
  baseURL: API_URL,
  headers: { 'Content-type': 'application/json' },
  timeout: 10000,
})
