import { IsString, IsNotEmpty, } from 'class-validator';

class CreatecategoriaDTO {
    @IsString()
    @IsNotEmpty()
    nombre:string;
}


export default CreatecategoriaDTO;