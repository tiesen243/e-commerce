import { Request } from 'express'
import { User } from '../auth/schemas'

export interface IRequest extends Request {
  user: User
}

export interface IResponse<T = any> {
  statusCode: number
  message: string
  data?: T
  page?: number
  totalPage?: number
}
