// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users/users.service';
// auth.controller.ts 혹은 관련 파일의 상단에 추가
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'defaultSecretKey',
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.username); // 사용자 정보 조회
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // req.user에 저장될 사용자 정보 반환
  }
}
