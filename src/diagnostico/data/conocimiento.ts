// data/conocimiento.ts

export const FALLAS_CONOCIMIENTO = {
    // Define el umbral de confiabilidad general
    UMBRAL_CONFIABILIDAD: 1.8,

    // Patrón de membresía para las 10 fallas (15 síntomas)
    PATRONES: [
        {
            id: 1,
            nombre: "Degradación de batería",
            valores: [0.9, 0.7, 0.1, 0.1, 0.2, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.0, 0.1, 0.3, 0.1],
            origen: "La batería tiene un ciclo de vida limitado. Se degrada por el uso prolongado, ciclos de carga/descarga completados y la exposición al calor excesivo.",
            solucion: "Reemplazo de la Batería: Visitar un servicio técnico autorizado para su cambio.",
            recomendaciones: ["Evitar la carga completa ($100%) o la descarga total (0%) de forma frecuente."],
        },
        {
            id: 2,
            nombre: "Puerto de carga dañado",
            valores: [0.7, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1],
            origen: "Obstrucción por pelusa, polvo o suciedad. Conexión inestable por pines doblados o dañados debido a la inserción forzada de cables.",
            solucion: "Si los pines están dañados, se requiere la reparación o reemplazo del módulo de carga.",
            recomendaciones: ["Limpieza Profesional: Intentar una limpieza suave con aire comprimido o llevar a un técnico para remover la suciedad."],
        },
        {
            id: 3,
            nombre: "Módulo Bluetooth dañado",
            valores: [0.1, 0.0, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.0, 0.0, 0.0, 0.1, 0.1],
            origen: "Falla de hardware del chip Bluetooth o problemas de software (controladores desactualizados o corruptos).",
            solucion: "Reparación de Hardware: Si la falla persiste, el chip necesita ser reparado o sustituido en un servicio técnico.",
            recomendaciones: ["Intentar reiniciar el teléfono, restablecer la configuración de red o actualizar el sistema operativo."],
        },
        {
            id: 4,
            nombre: "Virus / Malware",
            valores: [0.4, 0.1, 0.4, 0.9, 0.8, 0.0, 0.2, 0.5, 0.2, 0.1, 0.0, 0.5, 0.9, 0.7, 0.4],
            origen: "Instalación de aplicaciones de fuentes no oficiales (APKs fuera de tiendas), clic en enlaces maliciosos o descargas comprometidas.",
            solucion: "Restablecimiento de Fábrica (Hard Reset): El método más seguro, previo respaldo de información",
            recomendaciones: ["Limpieza con Antivirus: Usar una aplicación de seguridad confiable para escanear y eliminar el malware."],
        },
        {
            id: 5,
            nombre: "Pantalla dañada",
            valores: [0.0, 0.0, 0.0, 0.0, 0.0, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            origen: "Daño físico por impacto, caída, presión o flexión del dispositivo.",
            solucion: "Reemplazo de Pantalla: Se requiere el cambio completo del módulo de la pantalla por un técnico especializado.",
            recomendaciones: [""],
        },
        {
            id: 6,
            nombre: "Touch defectuoso",
            valores: [0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.9, 0.8, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            origen: "Falla en el digitalizador (capa sensible al tacto) de la pantalla. Puede ser un problema de hardware o un conflicto de software.",
            solucion: "Si el fallo es en una zona específica, la solución suele ser el reemplazo de la pantalla completa (que incluye el digitalizador).",
            recomendaciones: [""],
        },
        {
            id: 7,
            nombre: "Parlante/Auricular dañado",
            valores: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            origen: "Suciedad, obstrucción por residuos o daños por humedad. Falla del componente interno (altavoz) por volumen excesivo o defecto de fábrica.",
            solucion: "Reemplazo del Módulo: Si el problema es interno o por humedad, se requiere el reemplazo del componente.",
            recomendaciones: ["Limpieza: Intentar limpiar las rejillas con un cepillo suave o aire comprimido."],
        },
        {
            id: 8,
            nombre: "Micrófono dañado",
            valores: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0],
            origen: "Entrada del micrófono obstruida por suciedad. Problemas de hardware o software que impiden la captura de sonido.",
            solucion: "Diagnóstico y Reparación: Probar con una aplicación de grabación simple. Si falla, el componente debe ser sustituido por un técnico.",
            recomendaciones: ["Limpieza: Limpiar suavemente la entrada del micrófono."],
        },
        {
            id: 9,
            nombre: "Cámara fallando",
            valores: [0.0, 0.0, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.9, 0.0, 0.4, 0.1],
            origen: "Conflicto de software (otra aplicación usando la cámara o permisos) o daño físico del módulo de la cámara (lentes o sensor).",
            solucion: "Hardware: Si persiste, es necesaria la sustitución del módulo de la cámara.",
            recomendaciones: ["Software: Forzar el cierre de la aplicación de la cámara, borrar la caché de la aplicación, o reiniciar el teléfono."],
        },
        {
            id: 10,
            nombre: "Red inestable",
            valores: [0.0, 0.0, 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.8, 0.9],
            origen: "Falla del chip de comunicación (antena o módem) por hardware. Problemas de configuración de red (software).",
            solucion: "Hardware: Si la inestabilidad es constante y en diferentes lugares, puede requerir el reemplazo del módulo de antena/módem.",
            recomendaciones: ["Software: Restablecer la configuración de red (no borra datos, solo contraseñas Wi-Fi y configuraciones)."],
        },
    ],
};