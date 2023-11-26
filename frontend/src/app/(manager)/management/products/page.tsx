'use client'
import axios from 'axios'
import { NextPage } from 'next'

const Page: NextPage = () => {
  fetch('/api/product/me', {})
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })

  return <div>Page</div>
}

export default Page
