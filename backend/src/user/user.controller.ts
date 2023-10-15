import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import { User } from '../auth/schemas/user.shema'
import ChangePasswordDto from './dto/changePassword.dto'
import UpdateRoleDto from './dto/updateRole.dto'
import UpdateUserDto from './dto/updateUser.dto'
import { UserService } from './user.service'
import { IRequest, IResponse } from '../utils/resreq.interface'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Get user info successfully',
    type: User,
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  async getUserInfo(@Req() req: IRequest): Promise<IResponse<User>> {
    return await this.userService.getUserInfo(req.user._id)
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Get all user successfully',
    type: [User],
  })
  @ApiUnauthorizedResponse({ status: 401, description: 'You are not admin' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async getAllUser(@Req() req: IRequest): Promise<IResponse<User[]>> {
    return await this.userService.getAllUser(req.user)
  }

  @Put('role')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Change role successfully',
    type: User,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'You are not admin' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async changeRole(
    @Body() updateRoleDto: UpdateRoleDto,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.changeRole(updateRoleDto, req.user)
  }

  @Put('info')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Update user info successfully',
    type: User,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async updateInfo(
    @Body() updateDto: UpdateUserDto,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.updateInfo(updateDto, req.user)
  }

  @Put('password')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Change password successfully',
    type: User,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.changePassword(changePasswordDto, req.user)
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Delete user successfully',
    type: User,
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  async deleteUser(@Req() req: IRequest): Promise<IResponse<User>> {
    return await this.userService.selfDelete(req.user)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOkResponse({
    description: 'Delete user successfully',
    type: User,
  })
  @ApiUnauthorizedResponse({ description: 'You are not admin' })
  @ApiNotFoundResponse({ status: 404, description: 'User not found' })
  async adminDeleteUser(
    @Param('id') id: string,
    @Req() req: IRequest,
  ): Promise<IResponse<User>> {
    return await this.userService.adminDelete(id, req.user)
  }
}
