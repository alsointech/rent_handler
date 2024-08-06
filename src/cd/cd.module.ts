import { Module } from '@nestjs/common';
import { CdService } from './cd.service';
import { CdController } from './cd.controller';

@Module({
  controllers: [CdController],
  providers: [CdService],
})
export class CdModule {}
