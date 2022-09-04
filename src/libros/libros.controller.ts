import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from "@nestjs/common";
import { ParseIntPipe } from "@nestjs/common/pipes";
import LibroDTO from "./dtos/Libro.dto";
import { LibrosService } from "./libros.service";

@Controller("libros")
export class LibrosController {
  constructor(private librosService: LibrosService) {}

  @Get()
  getLibros(@Query("cantidad") cantidad?: number, @Query("pag") pag?: number) {
    return this.librosService.getLibros(cantidad, pag);
  }

  @Get(":id")
  getDetalleLibro(@Param("id", ParseIntPipe) id: number) {
    return this.librosService.getLibro(id);
  }

  @Post()
  postLibro(@Body() nuevoLibro: LibroDTO) {
    return this.librosService.crearLibro(nuevoLibro);
  }

  @Put(":id")
  putLibro(
    @Param("id", ParseIntPipe) id: number,
    @Body() nuevoLibro: LibroDTO,
  ) {
    return this.librosService.actualizarLibro(id, nuevoLibro);
  }

  @Delete(":id")
  deleteLibro(@Param("id", ParseIntPipe) id: number) {
    return this.librosService.borrarLibro(id);
  }
}
