import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { ApiResponse } from '@nestjs/swagger'

@Controller()
export class AppController {
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Welcome to the Yuki API ☝️🤓',
  })
  getHello(@Res() res: Response): Response {
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
  @ApiResponse({
    status: 200,
    description: 'Health check',
  })
  getHealth(@Res() res: Response): Response {
    return res.json({ message: 'OK' })
  }
}
