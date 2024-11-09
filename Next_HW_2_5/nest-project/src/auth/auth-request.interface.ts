// src/auth/auth-request.interface.ts
import { Request } from 'express';
import { User } from '../users/user.entity';

export interface AuthRequest extends Request {
  user: User; // `user` 속성의 타입을 명시
}
