export enum Role {
  ADMIN = 'admin',
  SELLER = 'seller',
  USER = 'user',
}

export default interface IUser {
  _id: string
  token: string
  userName: string
  email: string
  avatar: string
  role: Role
  createdAt: Date
}
