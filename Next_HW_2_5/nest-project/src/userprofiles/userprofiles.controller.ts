import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserProfilesService } from './userprofiles.service';
import { CreateUserProfileDto } from './dto/create-userprofile.dto';
import { UpdateUserProfileDto } from './dto/update-userprofile.dto';
import { AuthRequest } from '../auth/auth-request.interface'; // AuthRequest 인터페이스

@Controller('userprofiles')
export class UserProfilesController {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  // 프로필 생성
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createProfile(
    @Body() createUserProfileDto: CreateUserProfileDto,
    @Req() req: AuthRequest,
  ) {
    const user = req.user; // JWT를 통해 인증된 사용자
    return this.userProfilesService.createProfile(user, createUserProfileDto);
  }

  // 프로필 조회
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getProfile(@Req() req: AuthRequest) {
    const user = req.user; // JWT를 통해 인증된 사용자
    return this.userProfilesService.getProfile(user);
  }

  // 프로필 수정
  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateProfile(
    @Body() updateUserProfileDto: UpdateUserProfileDto,
    @Req() req: AuthRequest,
  ) {
    const user = req.user; // JWT를 통해 인증된 사용자
    return this.userProfilesService.updateProfile(user, updateUserProfileDto);
  }
}
