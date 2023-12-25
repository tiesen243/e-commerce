'use server'
import { redirect } from 'next/navigation'

export const handleSearch = async (formData: FormData) => {
  const search = formData.get('search')
  redirect(`/search?q=${search}`)
}

export const handleTags = async (formData: FormData, current: SearchParams) => {
  const tags = formData
    .getAll('tags')
    .map((tag) => `"${tag}"`)
    .join(',')

  redirect(
    `/search?page=${current.page}&tags=[${tags}]&sortBy=${current.sortBy}&orderBy=${current.orderBy}`
  )
}

export const handleSort = async (formData: FormData, current: SearchParams) => {
  const sort = formData.get('sort')
  redirect(`/search?q=${current.q}&page=${current.page}&sortBy=${current.sortBy}&sort=${sort}`)
}
