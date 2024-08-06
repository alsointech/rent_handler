import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CdService } from './cd.service';
import { CreateCdDto } from './dto/create-cd.dto';
import { UpdateCdDto } from './dto/update-cd.dto';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Controller('cd')
@UseGuards(FirebaseAuthGuard) 
export class CdController {
  constructor(private readonly cdService: CdService) {}

  @Post()
  create(@Body() createCdDto: CreateCdDto) {
    return this.cdService.create(createCdDto);
  }

  @Get()
  findAll() {
    return this.cdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCdDto: UpdateCdDto) {
    return this.cdService.update(+id, updateCdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cdService.remove(+id);
  }
}
