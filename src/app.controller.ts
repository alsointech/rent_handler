import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseAuthGuard } from './auth/firebase-auth.guard';

@Controller('protected')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(FirebaseAuthGuard)
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }
}
