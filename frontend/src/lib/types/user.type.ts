enum Role {
  ADMIN = 'admin',
  SELLER = 'seller',
  USER = 'user',
}

interface IUser {
  _id: string
  userName: string
  email: string
  avatar: string
  role: Role
  createdAt: Date
}

export type { IUser }
export { Role }
