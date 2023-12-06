export enum Role {
  ADMIN = 'admin',
  SELLER = 'seller',
  USER = 'user',
}
export default interface IUser {
  readonly _id: string
  readonly userName: string
  readonly email: string
  readonly avatar: string
  readonly role: Role
  readonly createdAt: Date
  readonly updatedAt: Date
}
