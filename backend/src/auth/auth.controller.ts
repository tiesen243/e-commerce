import { Body, Controller, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service'
import LoginDto from './dto/login.dto'
import RegisterDto from './dto/register.dto'
import { IResponse } from '../types'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 401, description: 'Passwords do not match' })
  @ApiResponse({ status: 400, description: 'Registration failed' })
  @ApiResponse({ status: 409, description: 'User already exists' })
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<IResponse<{ token: string }>> {
    return this.authService.register(registerDto)
  }

  @Post('login')
  @ApiResponse({ status: 201, description: 'User successfully logged in' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 401, description: 'Incorrect password' })
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<IResponse<{ token: string }>> {
    return this.authService.login(loginDto)
  }
}
