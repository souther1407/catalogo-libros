import { Controller, Get, Post, Delete, Put, Param, Body,ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import  CategoriaDTO  from './dtos/categoria.dto';
import CreatecategoriaDTO from './dtos/createCategoria.dto';
@Controller('categorias')
export class CategoriasController {
    
    constructor(private categoriaServices:CategoriasService){}

    @Get()
    getCategorias() {
        return this.categoriaServices.getAll();
    }

    @Get(":id")
    getDetailCategoria(@Param("id", ParseIntPipe) id:number) {
        return this.categoriaServices.getOne(id)
    }

    @Post()
    postCategoria(@Body() categoria:CreatecategoriaDTO) {
        return this.categoriaServices.createOne(categoria)
    }

    @Put(":id")
    updateCategoria(@Param("id",ParseIntPipe) id:number, @Body() body:CategoriaDTO) {
        return this.categoriaServices.updateOne(id,body);
    }

    @Delete(":id")
    deleteCategoria(@Param("id") id:string) {
        return this.categoriaServices.deleteOne(Number(id))
    }
}
