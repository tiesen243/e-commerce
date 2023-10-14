import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator'

export default class ChangePasswordDto {
  @ApiProperty({
    description: 'The old password of the user',
    type: String,
    example: 'Abcd@1234',
  })
  @IsNotEmpty()
  @IsString()
  readonly oldPassword: string

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: 'Abcd@1234',
  })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must be at least 8 characters long, contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol',
    },
  )
  readonly newPassword: string

  @ApiProperty({
    description: 'The confirm password of the user',
    type: String,
    example: 'Abcd@1234',
  })
  @IsNotEmpty()
  @IsString()
  readonly confirmPassword: string
}
