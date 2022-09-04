import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Libro } from "./models/Libro.entity";
import { Categoria } from "src/categorias/models/categorias.entity";
import { Link } from "src/link-descargas/models/links.models";
import { Repository, Equal } from "typeorm";
import LibroDTO from "./dtos/Libro.dto";
@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro) private librosRepository: Repository<Libro>,
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
    @InjectRepository(Link)
    private linkRepository: Repository<Link>,
  ) {}

  getLibros(cantidad = 20, pagina = 1) {
    return this.librosRepository.find({
      select: {
        id: true,
        portada: true,
        titulo: true,
      },
      take: cantidad,
      skip: cantidad * (pagina - 1),
    });
  }

  async getLibro(id: number) {
    const response = await this.librosRepository.findOne({
      relations: {
        link: true,
        pertenece: true,
        autor: true,
      },
      where: { id },
    });
    return response || {};
  }

  async crearLibro(nuevoLibro: LibroDTO) {
    const libro = this.librosRepository.create({ ...(nuevoLibro as any) });
    const regLibro = (await this.librosRepository.save(libro)) as any;
    const links = this.linkRepository.create(
      nuevoLibro.link.map((l) => ({
        ...l,
        libro: regLibro.id,
      })) as any,
    );
    await this.linkRepository.save(links);
    return regLibro;
  }

  async actualizarLibro(id: number, libroACambiar: LibroDTO) {
    const categoriaActualizada = await this.librosRepository.update(
      { id },
      { ...(libroACambiar as any) },
    );
    return this.librosRepository.findOneBy({ id });
  }

  borrarLibro(id: number) {
    return this.librosRepository.delete({ id });
  }
}
