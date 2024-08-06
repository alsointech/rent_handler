import { Injectable } from '@nestjs/common';
import { CreateCdDto } from './dto/create-cd.dto';
import { UpdateCdDto } from './dto/update-cd.dto';

@Injectable()
export class CdService {
  create(createCdDto: CreateCdDto) {
    return 'This action adds a new cd';
  }

  findAll() {
    return `This action returns all cd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cd`;
  }

  update(id: number, updateCdDto: UpdateCdDto) {
    return `This action updates a #${id} cd`;
  }

  remove(id: number) {
    return `This action removes a #${id} cd`;
  }
}
