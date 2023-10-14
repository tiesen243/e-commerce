import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { Role } from '../../auth/schemas/enum'

export default class UpdateRoleDto {
  @ApiProperty({
    description: 'Email of user',
    example: 'abc@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty({
    description: 'Role of user',
    enum: Role,
    example: 'admin',
  })
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role
}
