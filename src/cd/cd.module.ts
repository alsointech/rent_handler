import { Module } from '@nestjs/common';

import { CdService } from './cd.service';
import { CdController } from './cd.controller';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Module({
  controllers: [CdController],
  providers: [CdService],
})
export class CdModule {}
