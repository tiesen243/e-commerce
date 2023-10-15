import { Request } from 'express'
import { User } from '../auth/schemas/user.shema'

export interface IResponse<T = any> {
  statusCode: number
  message: string
  data?: T
  page?: number
  totalPage?: number
}

export interface IRequest extends Request {
  user: User
}
