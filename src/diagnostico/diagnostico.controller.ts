import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiagnosticoService } from './diagnostico.service';
import { SintomasDto } from './dto/sintomas-diagnostico.dto';

interface ResultadoDiagnostico {
  code: number;
  falla: string;
  gradoNormalizado: number; // Usamos el nombre ajustado
  origen: string;
  solucion: string;
}

@Controller('diagnostico')
export class DiagnosticoController {
  constructor(private readonly diagnosticoService: DiagnosticoService) { }

  @Post('general')
  diagnosticarGeneral(@Body() sintomasDto: SintomasDto): ResultadoDiagnostico[] | { code: number; mensaje: string; } {
    // El servicio se encarga de usar el FuzzyLogicService
    return this.diagnosticoService.diagnosticar(sintomasDto);
  }
}