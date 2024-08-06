import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { AppConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { RentalModule } from './rental/rental.module';
import { CdModule } from './cd/cd.module';
import { FirebaseAdminService } from './auth/firebase-admin.service';

@Module({
  imports: [
    DatabaseModule,
    AppConfigModule,
    UserModule,
    RentalModule,
    CdModule,
  ],
  controllers: [AppController],
  providers: [FirebaseAdminService],
})
export class AppModule {}
