// fuzzy-logic.service.ts
import { Injectable } from '@nestjs/common';
import { FALLAS_CONOCIMIENTO } from './data/conocimiento';

interface ResultadoDiagnostico {
  code: number;
  falla: string;
  gradoNormalizado: number; // Usamos el nombre ajustado
  origen: string;
  solucion: string;
}

@Injectable()
export class FuzzyLogicService {

  // FallaSeleccionada representa una fila de la matriz F (ej. F1, F2, F4)
  // sintomasUsuario representa el vector U (1x15)
  private calcularInterseccion(fallaSeleccionada: any, sintomasUsuario: number[]): number {
    let sumaInterseccion = 0.0;
    const valoresFalla = fallaSeleccionada.valores;

    // Asume que ambos arrays tienen la misma longitud (15 síntomas)
    for (let i = 0; i < valoresFalla.length; i++) {
      // Aplicación de la T-norma MÍNIMO: min(mu_U(Si), mu_F(Si))
      const valorMinimo = Math.min(sintomasUsuario[i], valoresFalla[i]);
      sumaInterseccion += valorMinimo;
    }

    return sumaInterseccion;
  }

  diagnosticoGeneral(sintomasUsuario: number[]): ResultadoDiagnostico[] | { code: number; mensaje: string; } {

    // 1. Inicializar un array para guardar TODOS los resultados normalizados
    const resultados: ResultadoDiagnostico[] = [];

    // Itera sobre todas las fallas en la base de conocimiento
    for (const falla of FALLAS_CONOCIMIENTO.PATRONES) {
      const gradoInterseccion = this.calcularInterseccion(falla, sintomasUsuario);

      // 1. NORMALIZACIÓN: Calcula el porcentaje de coincidencia
      // Previene división por cero si maximoPosible fuera 0
      const gradoNormalizado = falla.maximoPosible > 0
        ? gradoInterseccion / falla.maximoPosible
        : 0;

      // 2. Almacena el resultado
      resultados.push({
        code: 201, // Código de éxito parcial/coincidencia
        falla: falla.nombre,
        gradoNormalizado: gradoNormalizado,
        origen: falla.origen,
        solucion: falla.solucion,
        // Agrega aquí cualquier otro campo que quieras devolver
      });
    }

    // 3. Filtrar los resultados utilizando el umbral de confiabilidad
    const fallasConfiables = resultados.filter(
      res => res.gradoNormalizado >= FALLAS_CONOCIMIENTO.UMBRAL_CONFIABILIDAD_NORMALIZADO
    );

    // 4. Ordenar los resultados de mayor a menor coincidencia
    fallasConfiables.sort((a, b) => b.gradoNormalizado - a.gradoNormalizado);

    // 5. Devolver el resultado
    if (fallasConfiables.length === 0) {
      // Ninguna falla supera el umbral
      return {
        code: 404, // Un código más apropiado para "No encontrado"
        mensaje: "Ninguna de las fallas coincide con sus síntomas con un grado de confiabilidad del 60% o superior.",
      };
    }

    // Devuelve el array de todas las fallas que pasaron el umbral, ordenadas
    return fallasConfiables;
  }
}