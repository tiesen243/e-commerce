import { Category, Tag } from './enum'

interface IProduct {
  _id: string
  code: string
  slug: string
  name: string
  image: string
  description: string
  price: number
  stock: number
  saleOffPercent: number
  available: boolean
  category: Category
  tags: Tag[]
  userId: string
  createdAt: Date
  updatedAt: Date
}