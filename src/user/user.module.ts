import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
