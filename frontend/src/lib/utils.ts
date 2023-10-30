import { API_URL, IUser } from '.'

const getUser = async (token: string): Promise<IUser> => {
  const user = await fetch(`${API_URL}/user/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
  if (user.statusCode !== 200) throw new Error(user.message)

  return user.data
}

const refreshAccessToken = async (refreshToken: string) => {
  const data = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })
    .then((res) => res.json())
    .then((data) => data.data)

  return data.accessToken
}

export { getUser, refreshAccessToken }
