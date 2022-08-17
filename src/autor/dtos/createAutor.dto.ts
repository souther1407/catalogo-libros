import { IsString, IsNotEmpty, } from 'class-validator';


class CreateAutorDTO {
    @IsString()
    @IsNotEmpty()
    nombre:string;
}

export default CreateAutorDTO;

