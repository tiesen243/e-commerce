'use server'
import { redirect } from 'next/navigation'

export const handleSearch = async (formData: FormData) => {
  const search = formData.get('search')
  redirect(`/search?q=${search}`)
}
