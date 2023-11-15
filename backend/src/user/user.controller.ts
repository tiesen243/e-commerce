import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import { User } from '../auth/schemas'
import { IRequest, IResponse } from '../utils'
import { ChangePasswordDto, UpdateRoleDto, UpdateUserDto } from './dto'
import { UserService } from './user.service'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({
    summary: 'Get user info',
    description: 'Get user information',
  })
  @ApiOkResponse({ description: 'Get user info successfully', type: User })
  @ApiNotFoundResponse({ description: 'User not found' })
  async getUserInfo(@Req() req: IRequest): Promise<IResponse<User>> {
    return await this.userService.getUserInfo(req.user._id)
  }

  @Get('/all')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Get all user', description: 'Get all user' })
  @ApiOkResponse({ description: 'Get all user successfully', type: [User] })
  @ApiUnauthorizedResponse({ status: 401, description: 'You are not admin' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async getAllUser(@Req() req: IRequest): Promise<IResponse<User[]>> {
    return await this.userService.getAllUser(req.user)
  }

  @Patch('/update/role')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({
    summary: 'Change role',
    description: 'Change user role to admin/seller/user',
  })
  @ApiNoContentResponse({ description: 'Change role successfully' })
  @ApiBadRequestResponse({ description: 'Role is invalid' })
  @ApiUnauthorizedResponse({ description: 'You are not admin' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async changeRole(
    @Body() updateRoleDto: UpdateRoleDto,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.changeRole(updateRoleDto, req.user)
  }

  @Patch('/update/info')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiNoContentResponse({ description: 'Update user information' })
  @ApiBadRequestResponse({ description: 'Some field is invalid' })
  @ApiUnauthorizedResponse({ description: 'You are not login' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async updateInfo(
    @Body() updateDto: UpdateUserDto,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.updateInfo(updateDto, req.user)
  }

  @Patch('/update/password')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({
    summary: 'Change password',
    description: 'Change user password',
  })
  @ApiNoContentResponse({ description: 'Change password successfully' })
  @ApiBadRequestResponse({ description: 'Password is ivaild' })
  @ApiUnauthorizedResponse({ description: 'You are not login' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.changePassword(changePasswordDto, req.user)
  }

  @Delete('/delete')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Delete user', description: 'User delete itself' })
  @ApiNoContentResponse({ description: 'Delete user successfully' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async deleteUser(@Req() req: IRequest): Promise<IResponse<User>> {
    return await this.userService.selfDelete(req.user)
  }

  @Delete('/delete/:id')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Delete user', description: 'Admin delete user' })
  @ApiNoContentResponse({ description: 'Delete user successfully' })
  @ApiUnauthorizedResponse({ description: 'You are not admin' })
  @ApiNotFoundResponse({ status: 404, description: 'User not found' })
  async adminDeleteUser(
    @Param('id') id: string,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.adminDelete(id, req.user)
  }
}
