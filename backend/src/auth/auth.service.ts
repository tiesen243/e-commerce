import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import RegisterDto, { IRegisterDto } from './dto/register.dto.js'
import UserModel from './schemas/user.schema.js'
import { ILoginDto } from './dto/login.dto.js'

export default class AuthService {
  constructor(private readonly userModel = UserModel) {}

  JWT_SECRET: string = process.env.JWT_SECRET || 'secret'

  async registerUser(
    registerDto: IRegisterDto
  ): Promise<{ message: string | string[]; status: number }> {
    try {
      RegisterDto.parse(registerDto)

      const isExist = await this.userModel.findOne({ email: registerDto.email })
      if (isExist) throw new Error('User already exists')

      const hashedPassword = await bcrypt.hash(registerDto.password, 10)

      const newUser = await this.userModel.create({
        ...registerDto,
        password: hashedPassword,
      })
      if (!newUser) throw new Error('Could not create user')

      return {
        message: 'User created successfully',
        status: 201,
      }
    } catch (e: any) {
      if (e.issues)
        return {
          message: e.issues.map((issue: any) => issue.message),
          status: 400,
        }
      return {
        message: e.message,
        status: 400,
      }
    }
  }

  async loginUser(
    loginDto: ILoginDto
  ): Promise<{ message: string | string[]; status: number; token?: string }> {
    try {
      const user = await this.userModel.findOne({ email: loginDto.email })
      if (!user) throw new Error('User not found')

      const isPasswordValid = await bcrypt.compare(loginDto.password, user.password)
      if (!isPasswordValid) throw new Error('Password is incorrect')

      const token = jwt.sign({ id: user._id }, this.JWT_SECRET, { expiresIn: '1h' })

      return {
        message: 'User logged in successfully',
        token,
        status: 200,
      }
    } catch (e: any) {
      return {
        message: e.message,
        status: 400,
      }
    }
  }
}
