import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from "./models/Libro.entity"
import { Repository } from "typeorm"
@Injectable()
export class LibrosService {
    constructor(@InjectRepository(Libro) private librosRepository:Repository<Libro>){}

    getLibros(){
        return this.librosRepository.find();
    }
}
