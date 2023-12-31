import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Role, User } from '../auth/schemas'
import { IResponse } from '../utils'
import { CreateProductDto, QueryProductDto, UpdateProductDto } from './dto'
import { Product } from './schemas/product.schema'

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async findAll(q: QueryProductDto): Promise<IResponse<Product[]>> {
    const { limit, page, keyword, code, category, tags } = q
    const skip: number = (page - 1) * limit

    // Search by name, code, category, tags
    const search = {
      ...(code ? { code: { $gte: code, $lte: code } } : {}),
      ...(keyword ? { name: { $regex: keyword, $options: 'i' } } : {}),
      ...(category ? { category: category } : {}),
      ...(tags ? { tags: { $in: tags } } : {}),
    }

    // Sort by name, price, createdAt, updatedAt
    const { sortBy, isAscending } = q

    const allProducts = await this.productModel
      .find(search)
      .sort({ [sortBy]: isAscending ? 'asc' : 'desc' })
      .limit(limit)
      .skip(skip)
      .exec()
    if (allProducts.length === 0)
      throw new NotFoundException({
        status: 404,
        message: 'No products found',
      })

    const totalPage: number = Math.ceil((await this.productModel.countDocuments(search)) / limit)

    return {
      statusCode: 200,
      message: 'All products has been successfully retrieved.',
      data: allProducts,
      page,
      totalPage,
    }
  }

  async findRandom(): Promise<IResponse<Product[]>> {
    const randomProducts = await this.productModel.aggregate([{ $sample: { size: 5 } }])
    if (randomProducts.length === 0) throw new NotFoundException('No products found')

    return {
      statusCode: 200,
      message: 'All products has been successfully retrieved.',
      data: randomProducts,
    }
  }

  async findOne(id: string): Promise<IResponse<Product>> {
    const product = await this.productModel.findById(id).exec()
    if (!product) throw new NotFoundException('Product has been deleted or not found')

    return {
      statusCode: 200,
      message: 'The product has been successfully retrieved.',
      data: product,
    }
  }

  async findAllByUser(user: User, q: QueryProductDto): Promise<IResponse<Product[]>> {
    const { page, limit = 5 } = q
    const skip: number = (page - 1) * limit

    const allProducts = await this.productModel
      .find({ userId: user._id })
      .limit(limit)
      .skip(skip)
      .exec()
    if (allProducts.length === 0) throw new NotFoundException('No products found')

    const totalPage: number = Math.ceil(
      (await this.productModel.countDocuments({ userId: user._id })) / limit,
    )

    return {
      statusCode: 200,
      message: 'All products has been successfully retrieved.',
      data: allProducts,
      page,
      totalPage,
    }
  }

  async create(createDto: CreateProductDto, user: User): Promise<IResponse<Product>> {
    if (user.role !== Role.ADMIN && user.role !== Role.SELLER)
      throw new UnauthorizedException('You are not admin or seller')

    const newProduct = await this.productModel.create({
      code: Math.floor(100000 + Math.random() * 900000),
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

  async update(id: string, updateDto: UpdateProductDto, user: User): Promise<IResponse<Product>> {
    const { data } = await this.findOne(id)
    if (user._id.toString() !== data.userId.toString())
      throw new UnauthorizedException('You are not owner of this product')

    await this.productModel.findByIdAndUpdate(
      id,
      { ...updateDto, updatedAt: new Date() },
      { new: true },
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
