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
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import UpdateRoleDto from './dto/updaterole.dto'
import UpdateDto from './dto/update.dto'
import ChangePasswordDto from './dto/changePassword.dto'
import { User } from '../auth/schemas/user.shema'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Get user info successfully',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserInfo(@Req() req: { user: User }) {
    return await this.userService.getUserInfo(req.user._id)
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Get all user successfully',
    type: [User],
  })
  @ApiResponse({ status: 401, description: 'You are not admin' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getAllUser(@Req() req: { user: User }) {
    return await this.userService.getAllUser(req.user)
  }

  @Put('role')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Change role successfully',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'You are not admin' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async changeRole(
    @Body() updateRoleDto: UpdateRoleDto,
    @Req() req: { user: User },
  ) {
    return await this.userService.changeRole(updateRoleDto, req.user)
  }

  @Put('info')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Update user info successfully',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateInfo(@Body() updateDto: UpdateDto, @Req() req: { user: User }) {
    return await this.userService.updateInfo(updateDto, req.user)
  }

  @Put('password')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Change password successfully',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @Req() req: { user: User },
  ) {
    return await this.userService.changePassword(changePasswordDto, req.user)
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Delete user successfully',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Req() req: { user: User }) {
    return await this.userService.selfDelete(req.user)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiResponse({
    status: 200,
    description: 'Delete user successfully',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'You are not admin' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async adminDeleteUser(@Param('id') id: string, @Req() req: { user: User }) {
    return await this.userService.adminDelete(id, req.user)
  }
}
