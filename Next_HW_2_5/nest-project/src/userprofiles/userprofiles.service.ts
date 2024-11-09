import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfile } from './userprofile.entity';
import { User } from '../users/user.entity';
import { CreateUserProfileDto } from './dto/create-userprofile.dto';
import { UpdateUserProfileDto } from './dto/update-userprofile.dto';

@Injectable()
export class UserProfilesService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
  ) {}

  async createProfile(
    user: User,
    createUserProfileDto: CreateUserProfileDto,
  ): Promise<UserProfile> {
    const profile = this.userProfileRepository.create({
      ...createUserProfileDto,
      user,
    });
    return await this.userProfileRepository.save(profile);
  }

  // 프로필 조회
  async getProfile(user: User): Promise<UserProfile> {
    const profile = await this.userProfileRepository.findOne({
      where: { user: { id: user.id } },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async updateProfile(
    user: User,
    updateUserProfileDto: UpdateUserProfileDto,
  ): Promise<UserProfile> {
    const profile = await this.userProfileRepository.findOne({
      where: { user: { id: user.id } },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    Object.assign(profile, updateUserProfileDto);
    return await this.userProfileRepository.save(profile);
  }
}
