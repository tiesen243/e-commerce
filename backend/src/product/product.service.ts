import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import CreateDto from './dto/create.dto'
import UpdateDto from './dto/update.dto'
import { Product } from './schemas/product.schema'
import { IResponse } from '../types'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<IResponse<Product[]>> {
    const allProducts = await this.productModel.find().exec()
    if (allProducts.length === 0)
      throw new NotFoundException({
        status: 404,
        message: 'Products not found',
      })

    return {
      status: 200,
      message: 'All products has been successfully retrieved.',
      data: allProducts,
    }
  }

  async findOne(id: string): Promise<IResponse<Product>> {
    const product = await this.productModel.findById(id).exec()
    if (!product)
      throw new NotFoundException({
        status: 404,
        message: 'Product not found',
      })

    return {
      status: 200,
      message: 'The product has been successfully retrieved.',
      data: product,
    }
  }

  async create(createDto: CreateDto): Promise<IResponse<Product>> {
    const newProduct = await this.productModel.create({
      code: Math.floor(Math.random() * (999900 - 100000 + 1) + 100000),
      createdAt: new Date(),
      ...createDto,
    })

    if (!newProduct) throw new Error('Create product failed')

    return {
      status: 201,
      message: 'The product has been successfully created.',
      data: newProduct,
    }
  }

  async update(id: string, updateDto: UpdateDto): Promise<IResponse<Product>> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      {
        updatedAt: new Date(),
        ...updateDto,
      },
      {
        new: true,
      },
    )
    if (!updatedProduct) throw new Error('Update product failed')

    return {
      status: 200,
      message: 'The product has been successfully updated.',
      data: updatedProduct,
    }
  }

  async delete(id: string): Promise<IResponse<Product>> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id)
    if (!deletedProduct)
      throw new Error('Product has been deleted or not found')

    return {
      status: 200,
      message: 'The product has been successfully deleted.',
      data: deletedProduct,
    }
  }
}
