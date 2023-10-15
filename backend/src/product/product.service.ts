import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Role } from '../auth/schemas/enum'
import { User } from '../auth/schemas/user.shema'
import CreateProductDto from './dto/createProduct.dto'
import UpdateProductDto from './dto/updateProduct.dto'
import { Product } from './schemas/product.schema'
import QueryDto from './dto/query.dto'
import { IResponse } from '../utils/resreq.interface'
import { Category } from './schemas/enum'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findAll(q: QueryDto): Promise<IResponse<Product[]>> {
    const { limit, page, keyword, code, category, tags } = q
    const skip: number = (page - 1) * limit

    const name = keyword
      ? {
          name: {
            $regex: keyword,
            $options: 'i',
          },
        }
      : {}

    const productCode = code
      ? {
          code: {
            $gte: code,
            $lte: code,
          },
        }
      : {}

    const productCategory = category
      ? {
          category: {
            $regex: category,
            $options: 'i',
          },
        }
      : {}

    const productTags = tags ? { tags: { $in: tags } } : {}

    const allProducts = await this.productModel
      .find({ ...productCode, ...name, ...productCategory, ...productTags })
      .limit(limit)
      .skip(skip)
      .exec()
    if (allProducts.length === 0)
      throw new NotFoundException({
        status: 404,
        message: 'No products found',
      })

    return {
      statusCode: 200,
      message: 'All products has been successfully retrieved.',
      data: allProducts,
    }
  }

  async findOne(id: string): Promise<IResponse<Product>> {
    const product = await this.productModel.findById(id).exec()
    if (!product)
      throw new NotFoundException('Product has been deleted or not found')

    return {
      statusCode: 200,
      message: 'The product has been successfully retrieved.',
      data: product,
    }
  }

  async create(
    createDto: CreateProductDto,
    user: User,
  ): Promise<IResponse<Product>> {
    if (user.role !== Role.ADMIN && user.role !== Role.SELLER)
      throw new UnauthorizedException('You are not admin or seller')

    const newProduct = await this.productModel.create({
      code: Math.floor(Math.random() * (999900 - 100000 + 1) + 100000),
      createdAt: new Date(),
      userId: user._id,
      ...createDto,
    })

    if (!newProduct) throw new BadRequestException('Create product failed')

    return {
      statusCode: 201,
      message: 'The product has been successfully created.',
      data: newProduct,
    }
  }

  async update(
    id: string,
    updateDto: UpdateProductDto,
    user: User,
  ): Promise<IResponse<Product>> {
    const { data } = await this.findOne(id)
    if (user._id.toString() !== data.userId.toString())
      throw new UnauthorizedException('You are not owner of this product')

    await this.productModel.findByIdAndUpdate(
      id,
      {
        updatedAt: new Date(),
        ...updateDto,
      },
      {
        new: true,
      },
    )

    return {
      statusCode: 204,
      message: 'The product has been successfully updated.',
    }
  }

  async delete(id: string, user: User): Promise<IResponse<Product>> {
    const { data } = await this.findOne(id)
    if (user._id.toString() !== data.userId.toString())
      throw new UnauthorizedException('You are not owner of this product')

    await this.productModel.findByIdAndDelete(id)
    return {
      statusCode: 204,
      message: 'The product has been successfully deleted.',
    }
  }
}
