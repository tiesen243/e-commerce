import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Category, Tag } from './enum'
import mongoose, { Document } from 'mongoose'

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({
    required: true,
    unique: true,
    default: Math.floor(Math.random() * 999999) + 100000,
    isInteger: true,
  })
  @ApiProperty({
    description: 'The unique identifier of the product',
    example: 177013,
  })
  code: number

  @Prop({ required: true })
  @ApiProperty({
    description: 'The name of the product',
    example: 'Metamorphosis',
  })
  name: string

  @Prop({ required: true })
  @ApiProperty({ description: 'The image of the product' })
  image: string

  @Prop({ required: true })
  @ApiProperty({ description: 'The description of the product' })
  description: string

  @Prop({ required: true, isInteger: true })
  @ApiProperty({
    description: 'The price of the product',
    example: 100000,
  })
  price: number

  @Prop({ required: true, isInteger: true })
  @ApiProperty({
    description: 'The stock of the product',
    example: 100,
  })
  stock: number

  @Prop({ required: true, isInteger: true, default: 0 })
  @ApiProperty({ description: 'The sale off percent of the product' })
  saleOffPercent: number

  @Prop({ default: true })
  @ApiProperty({
    description: 'The availability of the product',
    example: true,
  })
  available: boolean

  @Prop({ required: true, default: Category.Other, type: String })
  @ApiProperty({
    description: 'The category of the product',
    enum: Category,
    example: Category.Manga,
  })
  category: Category

  @Prop({ required: true, default: Tag.Other, type: [String] })
  @ApiProperty({
    description: 'The tags of the product',
    enum: Tag,
    example: [Tag.R18, Tag.Drama],
  })
  tags: Tag[]

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @ApiProperty({
    description: 'The user who created the product',
  })
  userId: string

  @Prop({ default: new Date() })
  @ApiProperty({
    description: 'The date when the product was created',
  })
  createdAt: Date

  @Prop({ default: new Date() })
  @ApiProperty({
    description: 'The date when the product was updated',
  })
  updatedAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product)
