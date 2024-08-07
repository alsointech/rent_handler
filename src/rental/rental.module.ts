import { Module } from '@nestjs/common';

import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Module({
  controllers: [RentalController],
  providers: [RentalService],
})
export class RentalModule {}
