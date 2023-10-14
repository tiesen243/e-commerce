import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { IResponse } from './types'

@Controller()
export class AppController {
  @Get('/health')
  getHealth(@Res() res: Response): Response<IResponse> {
    return res.status(200).json({ message: 'OK' })
  }
}
