import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import { IRequest, IResponse } from '../utils'
import { ProductService } from './product.service'
import { Product } from './schemas'
import { CreateProductDto, QueryProductDto, UpdateProductDto } from './dto'

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  @ApiOperation({
    summary: 'Get all products',
    description: 'Get all products',
  })
  @ApiNotFoundResponse({ description: 'No products found' })
  @ApiOkResponse({
    description: 'All products has been successfully retrieved.',
    type: [Product],
  })
  async findAll(@Query() q: QueryProductDto): Promise<IResponse<Product[]>> {
    return await this.productService.findAll(q)
  }

  @Get('/me')
  @ApiOperation({ summary: 'Get all products of user' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'All products has been successfully retrieved.',
    type: [Product],
  })
  @ApiUnauthorizedResponse({ description: 'You are not owner of this product' })
  async findAllByUser(
    @Req() req: IRequest,
    @Query() q: QueryProductDto,
  ): Promise<IResponse<Product[]>> {
    return await this.productService.findAllByUser(req.user, q)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({
    description: 'The product has been successfully retrieved.',
    type: Product,
  })
  @ApiNotFoundResponse({ description: 'Product has been deleted or not found' })
  async findOne(@Param('id') id: string): Promise<IResponse<Product>> {
    return await this.productService.findOne(id)
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create new product' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiCreatedResponse({
    description: 'The product has been successfully created.',
    type: Product,
  })
  @ApiBadRequestResponse({ description: 'Create product failed' })
  async create(
    @Body() createDto: CreateProductDto,
    @Req() req: IRequest,
  ): Promise<IResponse<Product>> {
    return await this.productService.create(createDto, req.user)
  }

  @Patch('/update/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Update product by id' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiNoContentResponse({
    description: 'The product has been successfully updated.',
  })
  @ApiUnauthorizedResponse({ description: 'You are not owner of this product' })
  @ApiNotFoundResponse({ description: 'Product has been deleted or not found' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProductDto,
    @Req() req: IRequest,
  ): Promise<IResponse<Product>> {
    return await this.productService.update(id, updateDto, req.user)
  }

  @Delete('/delete/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete product by id' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiNoContentResponse({
    description: 'The product has been successfully deleted.',
  })
  @ApiUnauthorizedResponse({ description: 'You are not owner of this product' })
  @ApiNotFoundResponse({ description: 'Product has been deleted or not found' })
  async delete(@Param('id') id: string, @Req() req: IRequest): Promise<IResponse<Product>> {
    return await this.productService.delete(id, req.user)
  }
}
