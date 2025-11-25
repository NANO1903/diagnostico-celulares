// fuzzy-logic.service.ts
import { Injectable } from '@nestjs/common';
import { FALLAS_CONOCIMIENTO } from './data/conocimiento';

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
  
  /**
   * Diagnóstico General: Itera sobre TODAS las fallas.
   * @param sintomasUsuario Vector U del usuario.
   */
  diagnosticoGeneral(sintomasUsuario: number[]): any {
    let mejorCoincidencia = {
      falla: "",
      grado: 0.0,
      origen: '',
      solucion: ''
    };
    
    // Itera sobre todas las fallas en la base de conocimiento
    for (const falla of FALLAS_CONOCIMIENTO.PATRONES) {
      const gradoCoincidencia = this.calcularInterseccion(falla, sintomasUsuario);
      
      // Busca el máximo grado de coincidencia
      if (gradoCoincidencia > mejorCoincidencia.grado) {
        mejorCoincidencia.grado = gradoCoincidencia;
        mejorCoincidencia.falla = falla.nombre;
        mejorCoincidencia.origen = falla.origen;
        mejorCoincidencia.solucion = falla.solucion;
      }
    }
    
    // Aplica el umbral de confiabilidad
    if (mejorCoincidencia.grado < FALLAS_CONOCIMIENTO.UMBRAL_CONFIABILIDAD) {
      return {
        falla: "No se encontró un diagnóstico confiable.",
        grado: mejorCoincidencia.grado,
      };
    }

    return mejorCoincidencia;
  }

  // Se necesitaría otro método similar para el 'diagnosticoEspecifico'
}