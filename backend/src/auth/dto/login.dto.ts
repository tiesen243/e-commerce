import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export default class LoginDto {
  @ApiProperty({ description: 'Email', example: 'abc@gmail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string

  @ApiProperty({ description: 'Password', example: 'Abcd@1234' })
  @IsNotEmpty()
  @IsString()
  readonly password: string
}
