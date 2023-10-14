import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './schemas/product.schema'
import { Model } from 'mongoose'
import CreateDto from './dto/create.dto'
import { IResponse } from 'src/types'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<IResponse<Product[]>> {
    const allProducts = await this.productModel.find().exec()
    if (allProducts.length === 0)
      return {
        status: 400,
        message: 'Get all products failed',
      }

    return {
      status: 200,
      message: 'All products has been successfully retrieved.',
      data: allProducts,
    }
  }

  async create(productDto: CreateDto): Promise<IResponse<Product>> {
    const newProduct = await this.productModel.create({
      code: Math.floor(Math.random() * (999900 - 100000 + 1) + 100000),
      createdAt: new Date(),
      ...productDto,
    })

    if (!newProduct)
      return {
        status: 400,
        message: 'Create product failed',
      }

    return {
      status: 201,
      message: 'The product has been successfully created.',
      data: newProduct,
    }
  }

  async update(id: string, productDto: CreateDto): Promise<IResponse<Product>> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      {
        updatedAt: new Date(),
        ...productDto,
      },
      {
        new: true,
      },
    )
    if (!updatedProduct)
      return {
        status: 400,
        message: 'Product has been deleted or not found',
      }

    return {
      status: 200,
      message: 'The product has been successfully updated.',
      data: updatedProduct,
    }
  }

  async delete(id: string): Promise<IResponse<Product>> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id)
    if (!deletedProduct)
      return {
        status: 400,
        message: 'Product has been deleted or not found',
      }

    return {
      status: 200,
      message: 'The product has been successfully deleted.',
      data: deletedProduct,
    }
  }
}
