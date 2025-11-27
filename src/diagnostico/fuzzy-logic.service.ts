// fuzzy-logic.service.ts
import { Injectable } from '@nestjs/common';
import { FALLAS_CONOCIMIENTO } from './data/conocimiento';

interface ResultadoDiagnostico {
  code: number;
  falla: string;
  grado: number;
  origen: string;
  solucion: string;
  recomendaciones: string[];
}

@Injectable()
export class FuzzyLogicService {

  private calcularInterseccion(fallaSeleccionada: any, sintomasUsuario: number[]): number {
    let sumaInterseccion = 0.0;
    const valoresFalla = fallaSeleccionada.valores;

    for (let i = 0; i < valoresFalla.length; i++) {
      // Aplicación de la T-norma MÍNIMO: min(mu_U(Si), mu_F(Si))
      const valorMinimo = Math.min(sintomasUsuario[i], valoresFalla[i]);
      sumaInterseccion += valorMinimo;
    }

    return sumaInterseccion;
  }

  diagnosticoGeneral(sintomasUsuario: number[]): ResultadoDiagnostico[] | { code: number, mensaje: string } {
    const resultados: ResultadoDiagnostico[] = [];

    for (const falla of FALLAS_CONOCIMIENTO.PATRONES) {
      const gradoCoincidencia = this.calcularInterseccion(falla, sintomasUsuario);

      resultados.push({
        code: 201,
        falla: falla.nombre,
        grado: gradoCoincidencia,
        origen: falla.origen,
        solucion: falla.solucion,
        recomendaciones: falla.recomendaciones,
      });
    }

    const fallasConfiables = resultados.filter(
      res => res.grado >= FALLAS_CONOCIMIENTO.UMBRAL_CONFIABILIDAD
    );

    fallasConfiables.sort((a, b) => b.grado - a.grado);

    if (fallasConfiables.length === 0) {
      return {
        code: 404, 
        mensaje: "Ninguna de las fallas coincide con sus síntomas con un grado de confiabilidad del 60% o superior.",
      };
    }

    return fallasConfiables;
  }
}