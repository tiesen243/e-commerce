import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

import { User } from './schemas/user.shema'
import RegisterDto from './dto/register.dto'
import LoginDto from './dto/login.dto'
import { IResponse } from '../utils/resreq.interface'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    registerDto: RegisterDto,
  ): Promise<IResponse<{ token: string }>> {
    const { userName, email, password, confirmPassword } = registerDto
    const isExist = await this.userModel.findOne({ email })
    if (isExist) throw new ConflictException('User already exists')

    if (password !== confirmPassword)
      throw new UnauthorizedException('Passwords do not match')
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await this.userModel.create({
      userName,
      email,
      password: hashedPassword,
    })
    if (!newUser) throw new BadRequestException('Registration failed')

    return {
      statusCode: 204,
      message: 'User created successfully',
    }
  }

  async login(loginDto: LoginDto): Promise<IResponse<{ token: string }>> {
    const { email, password } = loginDto
    const user = await this.userModel.findOne({ email })
    if (!user) throw new NotFoundException('User not found')

    const isCorrect: boolean = await bcrypt.compare(password, user.password)
    if (!isCorrect) throw new UnauthorizedException('Incorrect password')

    const token: string = this.jwtService.sign({ id: user._id })

    return {
      statusCode: 201,
      message: 'User logged in successfully',
      data: { token },
    }
  }
}
