import { Schema, model } from 'mongoose'
import { Role } from './types.js'

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: null,
  },
})

const UserModel = model('User', UserSchema)
export default UserModel
