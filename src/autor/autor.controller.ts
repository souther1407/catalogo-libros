import { Controller, 
         Get, 
         Post, 
         Put, 
         Delete, 
         Body, 
         Param, 
         ParseIntPipe, 
         HttpException,
} from '@nestjs/common';
import { AutorService } from "./autor.service";
import CreateAutorDTO from "./dtos/createAutor.dto";
@Controller('autor')
export class AutorController {
    constructor(private autorService:AutorService){}
    @Get()
    getAutores() {
        return this.autorService.getAll();
        
    }
    @Get(":id")
    getAutor(@Param("id",ParseIntPipe) id:number) {
        return this.autorService.getOne(id);
    }
    @Post()
    createAutor(@Body() body:CreateAutorDTO) {
        return this.autorService.createOne(body);
    }
    @Put(":id")
    updateAutor(@Param("id", ParseIntPipe) id:number, @Body() body:CreateAutorDTO) {
        return this.autorService.updateOne(id,body)
    }
    @Delete(":id")
    deleteAutor(@Param("id", ParseIntPipe) id:number) {
        return this.autorService.deleteOne(id);
    }
}
