import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToOne } from 'typeorm';
import { Libro } from 'src/libros/models/Libro.entity';
import { IsUrl } from "class-validator";

enum TipoServer {
    MEGA,
    MEDIAFIRE,
    TORRENT,
}

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    @IsUrl()
    url:string;

    @Column({type:"enum", enum: TipoServer })
    tipo_server: TipoServer;

    @ManyToOne(()=> Libro,(libro) => libro.link)
    libro:Libro;
}