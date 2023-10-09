import { Schema, model } from 'mongoose'
import { Category, Tag } from './types.js'

const ProductSchema = new Schema({
  code: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: Object.values(Category), required: true },
  tags: { type: [String], enum: Object.values(Tag), required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})
const ProductModel = model('Product', ProductSchema)

export type IProduct = typeof ProductModel & Document
export default ProductModel
