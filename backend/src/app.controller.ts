import { Controller, Get, Render } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'

import { Category, Tag } from './product/schemas'

@Controller()
export class AppController {
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Welcome to the API',
  })
  getHello() {
    return {
      message: 'Welcome to the TN API',
      docs: '/api-docs',
    }
  }

  @Get('/categories')
  @ApiResponse({
    status: 200,
    description: 'Get all product categories',
  })
  getCategories() {
    return {
      statusCode: 200,
      message: 'Product categories',
      data: Category,
    }
  }

  @Get('/tags')
  @ApiResponse({
    status: 200,
    description: 'Get all product tags',
  })
  getTags() {
    return {
      statusCode: 200,
      message: 'Product tags',
      data: Tag,
    }
  }
}
