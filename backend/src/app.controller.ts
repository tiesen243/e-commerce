import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { IResponse } from './types'

@Controller()
export class AppController {
  @Get()
  getHello(@Res() res: Response): Response<IResponse> {
    return res.status(200).json({
      status: 69,
      message: 'Welcome to the Yuki API ☝️🤓',
      data: {
        name: 'Yuki API',
        version: '1.0.0',
        author: 'https://tiesen.id.vn',
        'api-docs': 'https://yuki-api.vercel.app/api-docs',
      },
    })
  }

  @Get('/health')
  getHealth(@Res() res: Response): Response<IResponse> {
    return res.status(200).json({ message: 'OK' })
  }
}
