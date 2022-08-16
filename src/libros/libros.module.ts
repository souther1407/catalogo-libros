import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosService } from './libros.service';
import { Libro } from './models/Libro.entity';
@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [TypeOrmModule.forFeature([Libro])]
})
export class LibrosModule {}
