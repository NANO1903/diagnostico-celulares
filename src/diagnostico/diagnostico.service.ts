import { Injectable } from '@nestjs/common';
import { SintomasDto } from './dto/sintomas-diagnostico.dto';
import { FuzzyLogicService } from './fuzzy-logic.service';

interface ResultadoDiagnostico {
  code: number;
  falla: string;
  grado: number;
  origen: string;
  solucion: string;
  recomendaciones: string[];
}

@Injectable()
export class DiagnosticoService {
  diagnosticar(sintomasDto: SintomasDto): ResultadoDiagnostico[] | { code: number; mensaje: string; } {
    const fuzzyHandler = new FuzzyLogicService();
    return fuzzyHandler.diagnosticoGeneral(sintomasDto.sintomas);
  }
}
