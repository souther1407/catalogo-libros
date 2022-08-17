import { Module } from '@nestjs/common';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './models/autor.model';

@Module({
  controllers: [AutorController],
  providers: [AutorService],
  imports:[TypeOrmModule.forFeature([Autor])],
})
export class AutorModule {}
