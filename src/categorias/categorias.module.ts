import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from "./models/categorias.entity";
@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService],
  imports: [TypeOrmModule.forFeature([Categoria])]
})
export class CategoriasModule {}
