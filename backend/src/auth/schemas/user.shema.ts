import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from './enum'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  @ApiProperty({ description: 'The username of the user', example: 'duci' })
  userName: string

  @Prop({
    default:
      'https://firebasestorage.googleapis.com/v0/b/e-comerce-dc328.appspot.com/o/avatar%2Favatar.png?alt=media&token=666314d9-fb33-4ebf-9b66-d49896812254',
  })
  @ApiProperty({ description: 'The avatar of the user' })
  avatar: string

  @Prop({ required: true, unique: true })
  @ApiProperty({
    description: 'The email of the user',
    example: 'abc@gmail.com',
  })
  email: string

  @Prop({ required: true })
  @ApiProperty({
    description: 'The password of the user',
    example: 'Abcd@1234',
  })
  password: string

  @Prop({ required: true, enum: Role, default: Role.USER })
  @ApiProperty({
    description: 'The role of the user',
    example: 'user',
  })
  role: Role

  @Prop()
  @ApiProperty({ description: 'The refresh token of the user' })
  refreshToken: string

  @Prop({ default: new Date() })
  @ApiProperty({
    description: 'The date when the user was created',
    example: '2069-06-09T06:09:00.000Z',
  })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
