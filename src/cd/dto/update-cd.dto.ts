import { PartialType } from '@nestjs/swagger';
import { CreateCdDto } from './create-cd.dto';

export class UpdateCdDto extends PartialType(CreateCdDto) {}
