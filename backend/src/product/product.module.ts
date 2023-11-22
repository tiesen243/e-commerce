import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { ProductSchema } from './schemas'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
