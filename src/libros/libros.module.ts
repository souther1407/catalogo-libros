import { Module } from "@nestjs/common";
import { LibrosController } from "./libros.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LibrosService } from "./libros.service";
import { Libro } from "./models/Libro.entity";
import { Link } from "src/link-descargas/models/links.models";
import { Categoria } from "src/categorias/models/categorias.entity";

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [TypeOrmModule.forFeature([Libro, Link, Categoria])],
})
export class LibrosModule {}
