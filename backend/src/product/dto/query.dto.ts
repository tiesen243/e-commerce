import { ApiProperty } from '@nestjs/swagger'
import { Transform, Type } from 'class-transformer'
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator'
import { Category, Tag } from '../schemas/enum'

export default class QueryDto {
  @ApiProperty({ description: 'The page number', default: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly page: number

  @ApiProperty({ description: 'The page limit', default: 10, required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly limit: number

  @ApiProperty({ description: 'The keyword to search', required: false })
  @IsOptional()
  @IsString()
  @Length(4, 20, { message: 'The keyword must be between 4 and 20 characters' })
  readonly keyword: string

  @ApiProperty({ description: 'The code of product', type: Number, required: false })
  @IsOptional()
  @IsNumber()
  @Min(100000)
  @Max(999999)
  @Type(() => Number)
  readonly code: number

  @ApiProperty({ description: 'The category of product', enum: Category, required: false })
  @IsOptional()
  @IsEnum(Category)
  readonly category: Category

  @ApiProperty({
    description: 'The tags of product',
    enum: Tag,
    isArray: true,
    default: [],
    required: false,
  })
  @IsOptional()
  @IsEnum(Tag, { each: true })
  readonly tags: Tag[]

  @ApiProperty({
    description: 'The sort by',
    enum: ['name', 'price', 'createdAt', 'updatedAt'],
    default: 'name',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsEnum(['name', 'price', 'createdAt', 'updatedAt'])
  readonly sortBy: string

  @ApiProperty({ description: 'The sort order', default: 0, required: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  readonly isAscending: boolean
}
