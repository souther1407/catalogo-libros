import { Controller,Get } from '@nestjs/common';
import { LibrosService } from "./libros.service"
@Controller('libros')
export class LibrosController {

    constructor(private librosService:LibrosService ){}
    @Get()
    getLibros(){
        return this.librosService.getLibros();
    }

}
