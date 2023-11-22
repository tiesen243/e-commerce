import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import { IResponse } from '../utils'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dto'
import { JwtPayload } from './jwt.strategy'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(204)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiNoContentResponse({ description: 'User successfully registered' })
  @ApiUnauthorizedResponse({ description: 'Passwords do not match' })
  @ApiBadRequestResponse({ description: 'Registration failed' })
  @ApiConflictResponse({ description: 'User already exists' })
  async register(@Body() registerDto: RegisterDto): Promise<IResponse> {
    return this.authService.register(registerDto)
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiCreatedResponse({ description: 'User successfully logged in' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiUnauthorizedResponse({ description: 'Incorrect password' })
  async login(@Body() loginDto: LoginDto): Promise<IResponse<JwtPayload>> {
    return this.authService.login(loginDto)
  }
}
