import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator'

export default class QueryDto {
  @ApiProperty({
    description: 'The page number',
    required: false,
    default: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly page: number

  @ApiProperty({
    description: 'The page limit',
    required: false,
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly limit: number

  @ApiProperty({
    description: 'The keyword to search',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(4, 20, { message: 'The keyword must be between 4 and 20 characters' })
  readonly keyword: string

  @ApiProperty({
    description: 'The code of product',
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Min(100000)
  @Max(999999)
  @Type(() => Number)
  readonly code: number
}
