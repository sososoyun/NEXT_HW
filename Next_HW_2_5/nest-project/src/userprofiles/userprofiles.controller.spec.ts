import { Test, TestingModule } from '@nestjs/testing';
import { UserProfilesController } from './userprofiles.controller';

describe('UserprofilesController', () => {
  let controller: UserProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProfilesController],
    }).compile();

    controller = module.get<UserProfilesController>(UserProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
