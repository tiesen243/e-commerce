import { useSearchParams } from 'next/navigation'

const useParams = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') as SearchParams['q']
  const page = Number(searchParams.get('page')) as SearchParams['page']
  const sortBy = searchParams.get('sortBy') as SearchParams['sortBy']
  const orderBy = searchParams.get('orderBy') as SearchParams['orderBy']

  const params: SearchParams = {
    ...(q && { q }),
    ...(page && { page }),
    ...(sortBy && { sortBy }),
    ...(orderBy && { orderBy }),
  }

  return params
}

export default useParams
