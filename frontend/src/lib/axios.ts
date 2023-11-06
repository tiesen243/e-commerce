import axios from 'axios'

export default axios.create({
  baseURL: 'https://yuki-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
})
