import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Autor } from './models/autor.model';
import { AutorDTO } from "./dtos/autor.dto";

@Injectable()
export class AutorService {
    constructor(@InjectRepository(Autor) private autorRepository:Repository<Autor>){}

    getAll() {
        return this.autorRepository.find();
    }

    async getOne(id:number) {
        const result = await this.autorRepository.findOneBy({ id })
        return result ? result : {}
    }

    deleteOne(id:number) {
        return this.autorRepository.delete({id})
    }
    async updateOne(id:number, body:AutorDTO) {
        const categoriaActualizada = await this.autorRepository.update({id}, {...body});
        return this.autorRepository.findOneBy({ id })
    }

    createOne(body:AutorDTO) {
            const nuevaCategoria = this.autorRepository.create({...body});
            return this.autorRepository.save(nuevaCategoria)  
    }
}
