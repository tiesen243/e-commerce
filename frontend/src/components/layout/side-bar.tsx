'use client'

import useParams from '@/hooks/useParams'
import Link from 'next/link'

const Sidebar = () => {
  const params = useParams()
  const sortList: string[] = ['name', 'price', 'createdAt', 'updatedAt']
  const orderByList = [
    {
      name: 'Acending',
      value: 'asc',
    },
    {
      name: 'Decending',
      value: 'desc',
    },
  ]

  return (
    <aside className="flex gap-4 md:flex-col">
      <section>
        <h2 className="mb-2 font-bold">Sort by</h2>
        <ul className="flex gap-2 capitalize text-muted-foreground md:flex-col">
          {sortList.map((sort) => (
            <li key={sort} className={params.sortBy === sort ? 'text-primary' : 'hover:underline'}>
              <Link href={{ query: { ...params, sortBy: sort } }}>{sort}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 font-bold">Oder by</h2>
        <ul className="flex gap-2 capitalize text-muted-foreground md:flex-col">
          {orderByList.map((order) => (
            <li
              key={order.value}
              className={params.orderBy === order.value ? 'text-primary' : 'hover:underline'}
            >
              <Link href={{ query: { ...params, orderBy: order.value } }}>{order.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
