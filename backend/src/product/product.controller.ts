import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import CreateDto from './dto/create.dto'
import { ProductService } from './product.service'
import { Product } from './schemas/product.schema'
import UpdateDto from './dto/update.dto'
import { IResponse } from '../types'

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'All products has been successfully retrieved.',
    type: Product,
    isArray: true,
  })
  @ApiResponse({
    status: 404,
    description: 'Products not found',
  })
  async findAll(): Promise<IResponse<Product[]>> {
    return await this.productService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully retrieved.',
    type: Product,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  async findOne(@Param('id') id: string): Promise<IResponse<Product>> {
    return await this.productService.findOne(id)
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
    type: Product,
  })
  @ApiResponse({
    status: 400,
    description: 'Create product failed',
  })
  async create(@Body() createDto: CreateDto): Promise<IResponse<Product>> {
    console.log(createDto)
    return await this.productService.create(createDto)
  }

  @Put(':id')
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully updated.',
    type: Product,
  })
  @ApiResponse({
    status: 400,
    description: 'Product has been deleted or not found',
  })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateDto,
  ): Promise<IResponse<Product>> {
    return await this.productService.update(id, updateDto)
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully deleted.',
    type: Product,
  })
  @ApiResponse({
    status: 400,
    description: 'Product has been deleted or not found',
  })
  async delete(@Param('id') id: string): Promise<IResponse<Product>> {
    return await this.productService.delete(id)
  }
}
