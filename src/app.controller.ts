import { Controller, Get, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from './auth/firebase-auth.guard';

@Controller('protected')
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(FirebaseAuthGuard)
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }
}
