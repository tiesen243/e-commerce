import { Request } from 'express'
import { User } from '../auth/schemas/user.shema'

export interface IResponse<T = any> {
  status: number
  message: string
  data?: T
}

export interface IRequest extends Request {
  user: User
}