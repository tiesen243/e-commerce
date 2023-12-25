interface IProduct {
  _id: string
  code: number
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
