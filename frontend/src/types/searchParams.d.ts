interface SearchParams {
  q?: string
  orderBy?: 'asc' | 'desc'
  sortBy?: 'name' | 'price' | 'createdAt' | 'updatedAt'
  page?: number
}
