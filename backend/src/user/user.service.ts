import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import { Model } from 'mongoose'

import { Role } from '../auth/schemas/enum'
import { User } from '../auth/schemas/user.shema'
import { IResponse } from '../utils/resreq.interface'
import ChangePasswordDto from './dto/changePassword.dto'
import UpdateRoleDto from './dto/updateRole.dto'
import UpdateUserDto from './dto/updateUser.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getUserInfo(id: string): Promise<IResponse<User>> {
    const user: User = await this.userModel.findById(id).select('-password')
    if (!user) throw new NotFoundException('User not found')

    return {
      statusCode: 200,
      message: 'Get user info successfully',
      data: user,
    }
  }

  async getAllUser(user: User): Promise<IResponse<User[]>> {
    if (user.role !== Role.ADMIN)
      throw new UnauthorizedException('You are not admin')

    const users: User[] = await this.userModel.find({}, { password: 0 }).exec()
    if (!users) throw new NotFoundException('User not found')

    return {
      statusCode: 200,
      message: 'Get all user successfully',
      data: users,
    }
  }

  async changeRole(
    updateRoleDto: UpdateRoleDto,
    user: User,
  ): Promise<IResponse<User>> {
    if (user.role !== Role.ADMIN)
      throw new UnauthorizedException('You are not admin')

    const { email, role } = updateRoleDto
    const userUpdate: User = await this.userModel.findOneAndUpdate(
      { email },
      { role, updatedAt: new Date() },
      { new: true },
    )
    if (!userUpdate) throw new NotFoundException('User not found')

    return {
      statusCode: 204,
      message: 'Change role successfully',
    }
  }

  async updateInfo(
    updateDto: UpdateUserDto,
    user: User,
  ): Promise<IResponse<User>> {
    const newName: string = updateDto.userName || user.userName
    const newAvatar: string = updateDto.avatar || user.avatar

    const updateUser: User = await this.userModel.findByIdAndUpdate(
      user._id,
      {
        userName: newName,
        avatar: newAvatar,
        updatedAt: new Date(),
      },
      { new: true },
    )
    if (!updateUser) throw new NotFoundException('User not found')

    return {
      statusCode: 204,
      message: 'Update user info successfully',
    }
  }

  async changePassword(
    changePasswordDto: ChangePasswordDto,
    user: User,
  ): Promise<IResponse<User>> {
    const { oldPassword, newPassword, confirmPassword } = changePasswordDto
    if (newPassword !== confirmPassword)
      throw new NotFoundException('Confirm password not match')

    const isMatch: boolean = await bcrypt.compare(oldPassword, user.password)
    if (!isMatch) throw new UnauthorizedException('Password not match')

    const isSame: boolean = await bcrypt.compare(newPassword, user.password)
    if (isSame)
      throw new ForbiddenException('New password is same old password')

    const updatePassword = await this.userModel.findByIdAndUpdate(
      user._id,
      {
        password: await bcrypt.hash(newPassword, 10),
        updatedAt: new Date(),
      },
      { new: true },
    )
    if (!updatePassword) throw new NotFoundException('User not found')

    return {
      statusCode: 204,
      message: 'Change password successfully',
    }
  }

  async selfDelete(user: User): Promise<IResponse<User>> {
    console.log(user)
    const delUser = await this.userModel.findByIdAndDelete(user._id)
    if (!delUser) throw new NotFoundException('User not found')

    return {
      statusCode: 204,
      message: 'Delete user successfully',
    }
  }

  async adminDelete(id: string, user: User): Promise<IResponse<User>> {
    if (user.role !== Role.ADMIN)
      throw new UnauthorizedException('You are not admin')

    const delUser = await this.userModel.findByIdAndDelete(id)
    if (!delUser) throw new NotFoundException('User not found')

    return {
      statusCode: 204,
      message: 'Delete user successfully',
    }
  }
}
