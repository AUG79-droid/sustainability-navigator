(function(root,factory){const roles=factory();if(typeof module==="object"&&module.exports)module.exports=roles;else root.SN_CONTRIBUTION_ROLES=roles;})(typeof globalThis!=="undefined"?globalThis:this,function(){return [
  {
    "id": "procurement",
    "es": [
      "Compras y cadena de suministro",
      "Revisar proveedores de un componente crítico.",
      "Dos proveedores comerciales dependen de la misma planta de transformación. El plazo de recuperación estimado supera la cobertura de stock.",
      "Solicitar trazabilidad, evaluar dependencias comunes y estudiar una alternativa cualificada.",
      "Contratar un segundo proveedor y aumentar el stock sin verificar su origen.",
      "Negociar un plazo contractual más corto sin comprobar capacidad de recuperación.",
      "La diversificación nominal no elimina una dependencia física común.",
      "Menor exposición a una interrupción si existe una alternativa realmente independiente, capaz y cualificada.",
      "Cobertura de stock (semanas); plazo de recuperación (semanas); independencia y cualificación documentadas.",
      "Compras, Ingeniería y Calidad deben confirmar viabilidad y aprobación."
    ],
    "en": [
      "Procurement & supply chain",
      "Review suppliers for a critical component.",
      "Two commercial suppliers depend on the same processing plant. Estimated recovery time exceeds stock coverage.",
      "Request traceability, assess shared dependencies and explore a qualified alternative.",
      "Contract a second supplier and increase stock without verifying its origin.",
      "Negotiate a shorter contractual lead time without checking recovery capability.",
      "Nominal diversification does not remove a common physical dependency.",
      "Lower disruption exposure if a genuinely independent, capable and qualified alternative exists.",
      "Stock coverage (weeks); recovery lead time (weeks); documented independence and qualification.",
      "Procurement, Engineering and Quality must confirm feasibility and approval."
    ],
    "resource": "material-sovereignty"
  },
  {
    "id": "engineering",
    "es": [
      "Ingeniería y diseño",
      "Revisar un requisito de diseño o una alternativa de material.",
      "Un componente difícil de reparar depende de una única fuente y tiene un plazo largo de sustitución.",
      "Comparar opciones de diseño reparable y suministro cualificado, conservando requisitos de seguridad y función.",
      "Aumentar el stock de repuestos manteniendo el diseño actual, sin comparar plazos de recuperación.",
      "Seleccionar un material alternativo por disponibilidad antes de completar su evaluación técnica.",
      "La reparabilidad y las alternativas pueden reducir dependencias, pero no sustituyen la validación técnica.",
      "Recuperación potencialmente más rápida y menor dependencia de material nuevo.",
      "Tiempo de recuperación; vida útil; requisitos de función, configuración y cualificación.",
      "Ingeniería, Calidad y Programa deben validar la alternativa."
    ],
    "en": [
      "Engineering & design",
      "Review a design requirement or material alternative.",
      "A difficult-to-repair component depends on a single source and has a long replacement lead time.",
      "Compare repairable design and qualified supply options while preserving safety and functional requirements.",
      "Increase spare stock with the current design without comparing recovery times.",
      "Select an alternative material for availability before completing technical assessment.",
      "Repairability and alternatives can reduce dependencies, but do not replace technical validation.",
      "Potentially faster recovery and lower dependency on new material.",
      "Recovery time; service life; functional, configuration and qualification requirements.",
      "Engineering, Quality and Programme must validate the alternative."
    ],
    "resource": "material-sovereignty"
  },
  {
    "id": "maintenance",
    "es": [
      "Mantenimiento e In-Service",
      "Analizar una reparación o una cola de componentes pendientes.",
      "El tiempo de espera por documentación supera el tiempo de reparación. La cola crece.",
      "Medir tiempos por etapa, aclarar responsabilidades y probar una mejora del flujo autorizado.",
      "Aumentar turnos de taller manteniendo el flujo documental actual.",
      "Priorizar órdenes por antigüedad sin analizar las causas de espera.",
      "El cuello de botella está en el flujo de información y decisiones, no necesariamente en el taller.",
      "Menor tiempo de recuperación si se reduce la espera sin comprometer la liberación.",
      "Tiempo de ciclo por etapa; cola; unidades liberadas conforme a requisitos.",
      "Mantenimiento, Ingeniería y Calidad verifican el cambio."
    ],
    "en": [
      "Maintenance & In-Service",
      "Review a repair or queue of pending components.",
      "Waiting for documentation exceeds repair time. The queue is growing.",
      "Measure stage times, clarify ownership and test an authorised flow improvement.",
      "Increase workshop shifts while retaining the current documentation flow.",
      "Prioritise orders by age without analysing waiting causes.",
      "The bottleneck is in information and decisions, not necessarily the workshop.",
      "Shorter recovery if waiting is reduced without compromising release.",
      "Stage cycle times; queue; units released to requirements.",
      "Maintenance, Engineering and Quality verify the change."
    ],
    "resource": "tass-readiness-resilience-simulator"
  },
  {
    "id": "operations",
    "es": [
      "Operaciones e instalaciones",
      "Revisar la continuidad de un servicio crítico.",
      "Una interrupción eléctrica amenaza un equipo esencial; la reserva no cubre todo el plazo de restauración.",
      "Priorizar cargas críticas y verificar autonomía, respaldo y tiempo de restauración.",
      "Dimensionar el respaldo según consumo medio histórico.",
      "Aumentar la reserva energética sin comprobar potencia crítica ni tiempo de restauración.",
      "La eficiencia no equivale a resiliencia: importa mantener la función cuando falla el suministro.",
      "Continuidad potencialmente mayor si el respaldo cubre la demanda crítica durante la interrupción.",
      "Potencia crítica (kW); energía utilizable (kWh); autonomía (h); prueba de respaldo.",
      "Operaciones, Facilities y Seguridad confirman requisitos y pruebas."
    ],
    "en": [
      "Operations & facilities",
      "Review continuity of a critical service.",
      "A power interruption threatens essential equipment; reserve does not cover the restoration window.",
      "Prioritise critical loads and verify autonomy, backup and restoration time.",
      "Size backup using historical average consumption.",
      "Increase energy reserve without checking critical power or restoration time.",
      "Efficiency is not resilience: maintaining function when supply fails is what matters.",
      "Potentially greater continuity if backup covers critical demand throughout the interruption.",
      "Critical power (kW); usable energy (kWh); autonomy (h); backup test.",
      "Operations, Facilities and Safety confirm requirements and tests."
    ],
    "resource": "mission-energy"
  },
  {
    "id": "quality",
    "es": [
      "Calidad y procesos",
      "Revisar una incidencia recurrente.",
      "Una pieza se retira varias veces, pero no se han normalizado los datos por horas de uso.",
      "Comparar tasas por exposición, investigar causa y verificar la eficacia de acciones correctivas.",
      "Comparar retiradas mensuales de configuraciones distintas.",
      "Aplicar una acción correctiva general antes de verificar la causa.",
      "Una señal de fiabilidad no demuestra una causa; hace falta evidencia comparable.",
      "Menor recurrencia potencial si se identifica y corrige la causa sin introducir nuevos riesgos.",
      "Retiradas por 1.000 h; diagnósticos; configuración; eficacia de la acción.",
      "Calidad, Ingeniería y el responsable del proceso revisan la evidencia."
    ],
    "en": [
      "Quality & processes",
      "Review a recurring issue.",
      "A component is removed repeatedly, but data have not been normalised by hours of use.",
      "Compare exposure-adjusted rates, investigate cause and verify corrective-action effectiveness.",
      "Compare monthly removals across different configurations.",
      "Apply a general corrective action before verifying the cause.",
      "A reliability signal does not demonstrate cause; comparable evidence is required.",
      "Potentially lower recurrence if the cause is identified and corrected without introducing new risks.",
      "Removals per 1,000 h; diagnoses; configuration; action effectiveness.",
      "Quality, Engineering and the process owner review the evidence."
    ],
    "resource": "tass-readiness-resilience-simulator"
  },
  {
    "id": "programme",
    "es": [
      "Programa y gestión",
      "Priorizar una inversión de continuidad.",
      "Una alternativa de recuperación cuesta más, pero podría cumplir un plazo crítico con mayor frecuencia.",
      "Comparar alternativas equivalentes, plazo, coste, incertidumbre y requisitos antes de justificar la inversión.",
      "Priorizar la alternativa con menor coste inicial y revisar el plazo después.",
      "Elegir la mayor disponibilidad estimada sin analizar incertidumbre ni coste.",
      "El coste adicional solo se justifica si la mejora relevante está respaldada y se conocen sus límites.",
      "Mejor decisión de inversión si se demuestra una reducción de exposición al incumplimiento.",
      "Probabilidad de cumplir el plazo; coste esperado; supuestos y sensibilidad.",
      "Programa, Finanzas, Ingeniería y Calidad revisan el caso."
    ],
    "en": [
      "Programme & management",
      "Prioritise a continuity investment.",
      "A recovery alternative costs more but might meet a critical deadline more often.",
      "Compare equivalent alternatives, deadline, cost, uncertainty and requirements before justifying investment.",
      "Prioritise the lowest upfront cost and review deadlines later.",
      "Choose the highest estimated availability without analysing uncertainty or cost.",
      "Extra cost is justified only if the relevant improvement is supported and its limits are known.",
      "Better investment decision if reduced exposure to missed deadlines is demonstrated.",
      "Deadline attainment probability; expected cost; assumptions and sensitivity.",
      "Programme, Finance, Engineering and Quality review the case."
    ],
    "resource": "airbus-strategic-resilience-intelligence"
  },
  {
    "id": "digital",
    "es": [
      "Digital, datos y sistemas",
      "Revisar la dependencia de una fuente de información.",
      "Un proceso crítico depende de un único flujo de datos; una interrupción impide tomar decisiones a tiempo.",
      "Identificar dependencias, requisitos de disponibilidad y un mecanismo de recuperación autorizado.",
      "Replicar el flujo de datos sin probar la recuperación integral.",
      "Aumentar frecuencia de copias sin revisar dependencias de acceso.",
      "Una ruta alternativa solo es útil si la información sigue siendo íntegra, accesible y autorizada.",
      "Menor tiempo de interrupción de la función si se valida la recuperación.",
      "Tiempo de restauración; integridad; prueba de recuperación; autorización de acceso.",
      "Digital, Seguridad y el propietario del proceso revisan los controles."
    ],
    "en": [
      "Digital, data & systems",
      "Review dependency on an information source.",
      "A critical process depends on one data flow; disruption prevents timely decisions.",
      "Identify dependencies, availability requirements and an authorised recovery mechanism.",
      "Replicate the data flow without testing end-to-end recovery.",
      "Increase backup frequency without reviewing access dependencies.",
      "An alternative route is useful only if information remains intact, accessible and authorised.",
      "Shorter function interruption if recovery is validated.",
      "Restoration time; integrity; recovery test; access authorisation.",
      "Digital, Security and the process owner review controls."
    ],
    "resource": "airbus-strategic-resilience-intelligence"
  },
  {
    "id": "general",
    "es": [
      "Otras funciones y equipos",
      "Identificar una dependencia en una actividad cotidiana.",
      "Una tarea importante depende de una única persona que conoce el procedimiento y los criterios de decisión.",
      "Aclarar el proceso, establecer respaldo autorizado y comprobar que puede ejecutarse con calidad.",
      "Documentar la tarea y considerar suficiente la publicación del procedimiento.",
      "Designar un sustituto sin comprobar acceso ni capacidad de ejecución.",
      "La continuidad requiere conocimientos, acceso autorizado y una prueba de ejecución.",
      "Menor dependencia de una única persona si el respaldo funciona.",
      "Tiempo de recuperación; prueba de ejecución; requisitos y responsables.",
      "El propietario del proceso verifica la eficacia y el control documental."
    ],
    "en": [
      "Other functions & teams",
      "Identify a dependency in a daily activity.",
      "An important task depends on one person who knows the procedure and decision criteria.",
      "Clarify the process, establish authorised backup and verify it can be executed to quality requirements.",
      "Document the task and consider publication of the procedure sufficient.",
      "Assign a substitute without checking access or execution capability.",
      "Continuity requires knowledge, authorised access and an execution test.",
      "Lower dependency on one person if the backup works.",
      "Recovery time; execution test; requirements and owners.",
      "The process owner verifies effectiveness and document control."
    ],
    "resource": "tass-readiness-resilience-simulator"
  }
];});