import { Injectable } from '@nestjs/common';
import { SintomasDto } from './dto/sintomas-diagnostico.dto';
import { FuzzyLogicService } from './fuzzy-logic.service';

@Injectable()
export class DiagnosticoService {
  diagnosticar(sintomasDto: SintomasDto) {
    const fuzzyHandler = new FuzzyLogicService();
    return fuzzyHandler.diagnosticoGeneral(sintomasDto.sintomas);
  }
  
  diagnosticarEspecifico(sintomasDto: SintomasDto) {
    const fuzzyHandler = new FuzzyLogicService();
    return fuzzyHandler.diagnosticoGeneral(sintomasDto.sintomas);
  }
}
