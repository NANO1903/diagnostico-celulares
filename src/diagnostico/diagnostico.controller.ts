import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiagnosticoService } from './diagnostico.service';
import { SintomasDto } from './dto/sintomas-diagnostico.dto';

@Controller('diagnostico')
export class DiagnosticoController {
  constructor(private readonly diagnosticoService: DiagnosticoService) { }

  @Post('general')
  diagnosticarGeneral(@Body() sintomasDto: SintomasDto) {
    // El servicio se encarga de usar el FuzzyLogicService
    return this.diagnosticoService.diagnosticar(sintomasDto);
  }

  /**
   * POST /diagnostico/especifico
   * Realiza un diagnóstico comparando los síntomas contra un subconjunto de fallas.
   * La lógica debe estar implementada en un método separado en el servicio.
   */
  @Post('especifico')
  diagnosticarEspecifico(@Body() sintomasDto: SintomasDto) {
    if (!sintomasDto.fallasElegidas || sintomasDto.fallasElegidas.length < 2) {
      return { error: 'Debe seleccionar al menos dos fallas.' };
    }
    return this.diagnosticoService.diagnosticarEspecifico(sintomasDto);
  }
}