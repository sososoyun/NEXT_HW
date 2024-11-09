// src/userprofiles/userprofiles.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './userprofile.entity';
import { UserProfilesService } from './userprofiles.service';
import { UserProfilesController } from './userprofiles.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile]), UsersModule],
  providers: [UserProfilesService],
  controllers: [UserProfilesController],
})
export class UserProfilesModule {}
