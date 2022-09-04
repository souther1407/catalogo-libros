import CategoriaDTO from "src/categorias/dtos/categoria.dto";
import { AutorDTO } from "src/autor/dtos/autor.dto";
import LinkDTO from "src/link-descargas/dtos/Link.dto";

export default class LibroDTO {
  id?: number;
  titulo: string;
  portada: string;
  creado: Date;
  publicado: Date;
  pertenece: CategoriaDTO[];
  autor: AutorDTO;
  link: LinkDTO[];
}
