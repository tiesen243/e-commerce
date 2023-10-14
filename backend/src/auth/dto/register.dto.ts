import { ApiProperty } from '@nestjs/swagger'
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator'

export default class RegisterDto {
  @ApiProperty({ description: 'Username', example: 'duci' })
  @IsNotEmpty()
  @IsString()
  @Length(4, 20, { message: 'Username must be between 4 and 20 characters' })
  readonly userName: string

  @ApiProperty({ description: 'Email', example: 'abc@gmail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string

  @ApiProperty({ description: 'Password', example: 'Abcd@1234' })
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    },
    {
      message:
        'Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol',
    },
  )
  readonly password: string

  @ApiProperty({ description: 'Confirm password', example: 'Abcd@1234' })
  @IsNotEmpty()
  @IsString()
  readonly confirmPassword: string
}
