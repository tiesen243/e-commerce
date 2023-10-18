import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsNotEmpty,
  IsString,
  Length,
  IsNumber,
  IsUrl,
  IsEnum,
  Min,
} from 'class-validator'
import { Category, Tag } from '../schemas/enum'

export default class CreateProductDto {
  @ApiProperty({ description: 'The name of the product' })
  @IsNotEmpty()
  @IsString()
  @Length(4, 100, {
    message: 'The name must be between 4 and 100 characters',
  })
  readonly name: string

  @ApiProperty({ description: 'The description of the product' })
  @IsNotEmpty()
  @IsString()
  @Length(4, 1000, {
    message: 'The description must be between 4 and 1000 characters',
  })
  readonly description: string

  @ApiProperty({
    description: 'The url of the image of the product',
    example: 'https://example.com/image.png',
  })
  @IsNotEmpty()
  @IsString()
  @IsUrl(
    {
      require_protocol: true,
      require_valid_protocol: true,
    },
    {
      message: 'The image must be a valid url of an image',
    },
  )
  readonly image: string

  @ApiProperty({ description: 'The price of the product' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  readonly price: number

  @ApiProperty({ description: 'The stock of the product' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  readonly stock: number

  @ApiProperty({
    description: 'The category of the product',
    enum: Category,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(Category)
  readonly category: Category

  @ApiProperty({
    description: 'The tags of the product',
    enum: Tag,
    isArray: true,
  })
  @IsNotEmpty()
  @IsString({ each: true })
  @IsEnum(Tag, { each: true })
  readonly tags: Tag[]
}
