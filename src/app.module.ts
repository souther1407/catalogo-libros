import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Libro } from "./libros/models/Libro.entity.js";
import { Categoria } from './categorias/models/categorias.entity';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [LibrosModule,
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"admin",
      database:"catalogo_libros",
      entities:[Libro,Categoria],
      synchronize:true,

    }),
    CategoriasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
