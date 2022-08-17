import { Entity, Column, PrimaryGeneratedColumn,ManyToMany,JoinTable, ManyToOne } from 'typeorm';
import { IsUrl } from "class-validator";
import { Categoria } from "../../categorias/models/categorias.entity";
import { Autor } from 'src/autor/models/autor.model';
@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @Column()
    @IsUrl()
    portada:string;

    @Column()
    creado: Date;

    @Column()
    publicado: Date;

    @ManyToMany(()=> Categoria)
    @JoinTable()
    pertenece: Categoria[]

    @ManyToOne(()=> Autor,(autor) => autor.libros)
    autor: Autor
}