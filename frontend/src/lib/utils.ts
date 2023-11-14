import { ReadonlyURLSearchParams } from 'next/navigation'

export const formatDate = (date: Date): string => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()

  return `${day}/${month}/${year}`
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString().replace(/%5B/g, '[').replace(/%5D/g, ']')
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}
