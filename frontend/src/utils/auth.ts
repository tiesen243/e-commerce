const getUser = async (token: string) => {
  const user = await fetch('https://yuki-api.vercel.app/user/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
  if (user.statusCode !== 200) throw new Error(user.message)
  return user.data
}

const getToken = async (refreshToken: string): Promise<string> => {
  const token = await fetch('https://yuki-api.vercel.app/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  }).then((res) => res.json())
  if (token.statusCode !== 201) throw new Error(token.message)
  return token.data.accessToken
}

export { getToken, getUser }
