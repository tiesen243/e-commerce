import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
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
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import CreateProductDto from './dto/createProduct.dto'
import QueryDto from './dto/query.dto'
import UpdateProductDto from './dto/updateProduct.dto'
import { ProductService } from './product.service'
import { Product } from './schemas/product.schema'
import { IRequest, IResponse } from '../utils/resreq.interface'

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  @ApiNotFoundResponse({ description: 'No products found' })
  @ApiOkResponse({
    description: 'All products has been successfully retrieved.',
    type: [Product],
  })
  async findAll(@Query() q: QueryDto): Promise<IResponse<Product[]>> {
    return await this.productService.findAll(q)
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The product has been successfully retrieved.',
    type: Product,
  })
  @ApiNotFoundResponse({ description: 'Product has been deleted or not found' })
  async findOne(@Param('id') id: string): Promise<IResponse<Product>> {
    return await this.productService.findOne(id)
  }

  @Post()
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

  @Put(':id')
  @HttpCode(204)
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

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiNoContentResponse({
    description: 'The product has been successfully deleted.',
  })
  @ApiUnauthorizedResponse({ description: 'You are not owner of this product' })
  @ApiNotFoundResponse({ description: 'Product has been deleted or not found' })
  async delete(
    @Param('id') id: string,
    @Req() req: IRequest,
  ): Promise<IResponse<Product>> {
    return await this.productService.delete(id, req.user)
  }
}
