import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { PassportStrategy } from '@nestjs/passport'
import { ApiProperty } from '@nestjs/swagger'
import { Model } from 'mongoose'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { User } from './schemas/user.shema'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    })
  }

  async validate(payload: { id: string }) {
    const { id } = payload

    const user = await this.userModel.findById(id)
    if (!user)
      throw new UnauthorizedException('Login first to access this endpoint')

    return user
  }
}

export class JwtPayload {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    description: 'Token',
  })
  token: string
}
