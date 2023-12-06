import axios from 'axios'

export default axios.create({
  baseURL: 'https://tiesen-api.vercel.app',
  headers: {
    'Content-type': 'application/json',
  },
})
