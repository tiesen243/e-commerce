import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, IsUrl, Length } from 'class-validator'

export default class UpdateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    example: 'Duci',
  })
  @IsOptional()
  @IsString()
  @Length(4, 20)
  readonly userName: string

  @ApiProperty({
    description: 'The avatar of the user',
    type: String,
    example: 'https://example.com/avatar.png',
  })
  @IsOptional()
  @IsString()
  @IsUrl(
    {
      require_protocol: true,
      require_valid_protocol: true,
    },
    {
      message: 'Avatar must be a valid URL',
    },
  )
  readonly avatar: string

  @ApiProperty({
    description: 'The old password of the user',
    type: String,
    example: 'Abcd@1234',
  })
  @IsOptional()
  @IsString()
  readonly password: string
}
