import { Entity, Column, PrimaryGeneratedColumn,ManyToMany,JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { IsUrl } from "class-validator";
import { Categoria } from "../../categorias/models/categorias.entity";
import { Autor } from 'src/autor/models/autor.model';
import { Link } from 'src/link-descargas/models/links.models';
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
    autor: Autor;

    @OneToMany(()=> Link, (link) => link.libro)
    link:Link[];
}