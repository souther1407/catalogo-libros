import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import  CategoriaDTO  from './dtos/categoria.dto';

@Controller('categorias')
export class CategoriasController {
    
    constructor(private categoriaServices:CategoriasService){}

    @Get()
    getCategorias() {
        return this.categoriaServices.getAll();
    }

    @Get(":id")
    getDetailCategoria(@Param("id") id:string) {
        return this.categoriaServices.getOne(Number(id))
    }

    @Post()
    postCategoria(@Body() categoria:CategoriaDTO) {
        return this.categoriaServices.createOne(categoria)
    }

    @Put(":id")
    updateCategoria(@Param("id") id:string, @Body() body:CategoriaDTO) {
        return this.categoriaServices.updateOne(Number(id),body);
    }

    @Delete(":id")
    deleteCategoria(@Param("id") id:string) {
        return this.categoriaServices.deleteOne(Number(id))
    }
}
