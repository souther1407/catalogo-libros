import { Entity, Column, PrimaryGeneratedColumn,OneToMany,Unique } from 'typeorm';
import { Libro } from "../../libros/models/Libro.entity";
@Entity()
export class Autor {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    nombre:string;

    @OneToMany(() => Libro, (libro) => libro.autor)
    libros: Libro[]
}