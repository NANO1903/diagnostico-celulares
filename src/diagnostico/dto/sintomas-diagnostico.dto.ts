import { IsArray, ArrayMinSize, ArrayMaxSize, IsNumber } from 'class-validator';

export class SintomasDto {
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(15)
  @ArrayMaxSize(15)
  // El vector U: Contiene los 15 valores de membresía [0.0 - 1.0]
  sintomas: number[];
}