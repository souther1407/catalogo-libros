import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from "./models/categorias.entity";
import CategoriaDTO from './dtos/categoria.dto';
@Injectable()
export class CategoriasService {
    constructor(@InjectRepository(Categoria) private categoriasRepository:Repository<Categoria>){}

     getAll(): Promise<Categoria[]> {
        return this.categoriasRepository.find(); 
    }

    async getOne(id:number): Promise<Categoria | Record<string,never>>{
        const result = await this.categoriasRepository.findOneBy({ id })
        return result ? result : {}
    }

    deleteOne(id:number) {
        return this.categoriasRepository.delete({id})
    }

    async updateOne(id:number, body:CategoriaDTO) {
        const categoriaActualizada = await this.categoriasRepository.update({id}, {...body});
        return this.categoriasRepository.findOneBy({ id })
    }

    createOne(body:CategoriaDTO) {
        const nuevaCategoria = this.categoriasRepository.create({...body});
        return this.categoriasRepository.save(nuevaCategoria)
    }
}
