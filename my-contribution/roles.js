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
    "resource": "material-sovereignty",
    "activities": [
      {
        "resource": "material-sovereignty",
        "es": [
          "Gestión de materiales críticos",
          "Elaborar una estrategia de suministro.",
          "Se consumen 4 unidades/semana; hay 48 disponibles. La fuente actual necesita 18 semanas. Una alternativa independiente tarda 10 semanas, pero todavía no está cualificada.",
          "Iniciar la cualificación, verificar capacidad y cubrir la brecha durante la transición.",
          "Mantener la fuente actual y negociar entregas prioritarias.",
          "Aumentar el inventario objetivo para el año próximo.",
          "La cobertura actual es 12 semanas: existe una brecha de 6 semanas. La alternativa necesita cualificación y capacidad demostradas antes de contar con ella.",
          "Menor exposición a interrupciones si las entregas cualificadas cubren la brecha.",
          "Cobertura 12 semanas; brecha 6 semanas; fecha de cualificación y capacidad.",
          "Compras, Ingeniería y Calidad."
        ],
        "en": [
          "Critical-material management",
          "Prepare a sourcing strategy.",
          "Consumption is 4 units/week; 48 are available. The current source needs 18 weeks. An independent alternative needs 10 weeks but is not yet qualified.",
          "Start qualification, verify capacity and bridge the gap during transition.",
          "Retain the current source and negotiate priority deliveries.",
          "Raise the inventory target for next year.",
          "Current coverage is 12 weeks: a six-week gap. Qualification and proven capacity are needed before relying on the alternative.",
          "Lower disruption exposure if qualified deliveries bridge the gap.",
          "12 weeks of coverage; six-week gap; qualification date and capacity.",
          "Procurement, Engineering and Quality."
        ]
      }
    ]
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
    "resource": "material-sovereignty",
    "activities": [
      {
        "resource": "eco-design-lifecycle-decision-assessment",
        "es": [
          "Diseño para mantenimiento",
          "Revisar la arquitectura de un equipo.",
          "Dos diseños equivalentes en función: A requiere sustituir 12 kg de conjunto tras un fallo; B permite intervenir en un módulo de 3 kg. B añade 0,8 kg al equipo y exige verificar interfaces.",
          "Comparar recuperación, masa de repuesto, impacto de uso e interfaces bajo una misma función y vida útil.",
          "Seleccionar B por el 75 % de reducción de masa de repuesto.",
          "Mantener A para evitar el incremento de masa del equipo.",
          "B puede reducir la masa sustituida de 12 a 3 kg por intervención, pero añade masa de uso; hay que demostrar equivalencia y validar las interfaces.",
          "Menor necesidad de repuestos completos y posible mejora de mantenibilidad.",
          "Masa sustituida por intervención; tiempo de recuperación; masa de uso; pruebas de interfaz.",
          "Ingeniería, In-Service y Calidad."
        ],
        "en": [
          "Design for maintenance",
          "Review equipment architecture.",
          "Two functionally equivalent designs: A requires replacement of a 12 kg assembly after failure; B allows work on a 3 kg module. B adds 0.8 kg to the equipment and requires interface checks.",
          "Compare recovery, spare mass, use-phase impact and interfaces over the same function and lifetime.",
          "Choose B for the 75% reduction in replacement mass.",
          "Retain A to avoid increasing equipment mass.",
          "B may reduce replacement mass from 12 to 3 kg per intervention but adds use-phase mass; equivalence and interfaces require verification.",
          "Lower demand for complete spares and potentially better maintainability.",
          "Mass replaced per intervention; recovery time; use-phase mass; interface tests.",
          "Engineering, In-Service and Quality."
        ]
      }
    ]
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
    "resource": "tass-readiness-resilience-simulator",
    "activities": [
      {
        "resource": "airbus-strategic-resilience-intelligence",
        "es": [
          "Planificación de repuestos",
          "Comparar rutas de recuperación de un componente.",
          "La reparación cualificada tarda 20 días si es viable (probabilidad estimada del 75 %); si falla, la sustitución posterior tarda otros 40 días. La sustitución directa tarda 40 días. El objetivo es recuperar en 30 días.",
          "Comparar probabilidad de cumplir el plazo, tiempo esperado y contingencia; validar los supuestos.",
          "Elegir reparación por su plazo inicial de 20 días.",
          "Elegir sustitución por su plazo fijo y cerrar el análisis.",
          "La reparación primero tiene tiempo esperado 0,75×20 + 0,25×60 = 30 días y 75 % de cumplimiento; la sustitución directa no cumple el objetivo. Los valores son supuestos, no predicciones.",
          "Mejor decisión de recuperación según riesgo y evidencia.",
          "Probabilidad de cumplimiento; tiempo esperado; capacidad; coste y calidad de evidencia.",
          "Mantenimiento, Programa e Ingeniería."
        ],
        "en": [
          "Spare planning",
          "Compare component recovery routes.",
          "Qualified repair takes 20 days if viable (estimated 75% probability); if unsuccessful, subsequent replacement takes another 40 days. Direct replacement takes 40 days. The target is recovery within 30 days.",
          "Compare deadline attainment, expected time and contingency; validate assumptions.",
          "Choose repair for its initial 20-day duration.",
          "Choose replacement for its fixed lead time and close the analysis.",
          "Repair first has expected time 0.75×20 + 0.25×60 = 30 days and 75% attainment; direct replacement misses the target. Values are assumptions, not predictions.",
          "Better recovery decision based on risk and evidence.",
          "Deadline attainment; expected time; capacity; cost and evidence quality.",
          "Maintenance, Programme and Engineering."
        ]
      }
    ]
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
    "resource": "mission-energy",
    "activities": [
      {
        "resource": "fuel-sovereignty",
        "es": [
          "Gestión de combustible",
          "Revisar un plan de suministro alternativo.",
          "Se necesitan 80 m³ durante una crisis; hay 30 m³ utilizables en reserva. Dos contratos aportarían 25 m³ cada uno, pero comparten terminal y transporte.",
          "Verificar la dependencia común, comparar una tercera ruta independiente y proteger la reserva.",
          "Contabilizar 80 m³ como cobertura asegurada por los tres recursos.",
          "Ampliar uno de los contratos de la terminal compartida.",
          "La suma nominal cubre 80 m³, pero una interrupción común podría dejar solo los 30 m³ de reserva. La alternativa debe ser compatible y estar autorizada.",
          "Continuidad potencialmente mayor si se prueba suministro independiente y cualificado.",
          "Demanda 80 m³; cobertura bajo fallo común 30 m³; capacidad y compatibilidad verificadas.",
          "Logística, Compras, Operaciones y autoridad técnica."
        ],
        "en": [
          "Fuel management",
          "Review an alternative supply plan.",
          "A crisis requires 80 m³; 30 m³ of usable reserve is available. Two contracts would each deliver 25 m³ but share a terminal and transport.",
          "Verify common dependencies, compare a third independent route and protect the reserve.",
          "Count 80 m³ as guaranteed coverage across the three resources.",
          "Expand one contract using the shared terminal.",
          "Nominal supply covers 80 m³, but common disruption could leave only 30 m³ of reserve. Alternatives must be compatible and authorised.",
          "Potentially better continuity if independent qualified supply is demonstrated.",
          "80 m³ demand; 30 m³ coverage under common failure; verified capacity and compatibility.",
          "Logistics, Procurement, Operations and technical authority."
        ]
      }
    ]
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
    "resource": "tass-readiness-resilience-simulator",
    "activities": [
      {
        "resource": "supply-chain-compliance-decision-review",
        "es": [
          "Control de cambios y proveedores",
          "Revisar la evidencia de un cambio de proceso.",
          "Un proveedor propone un proceso alternativo que reduce un plazo de 12 a 8 semanas. Ha aportado resultados de una muestra, pero falta evidencia representativa de la configuración.",
          "Solicitar evidencia de equivalencia y capacidad; planificar revisión y contingencia para el plazo.",
          "Aceptar el cambio basándose en el ensayo inicial y revisar los datos tras la entrega.",
          "Mantener el proceso anterior sin estudiar el impacto de la demora.",
          "El ensayo inicial es una señal, no una demostración de equivalencia ni capacidad sostenida. Se debe gestionar la continuidad mientras se completa la evaluación.",
          "Menor exposición a retrasos o fallos si la alternativa supera controles.",
          "Plazos; resultados representativos; desviaciones; decisión autorizada.",
          "Calidad, Ingeniería y Compras."
        ],
        "en": [
          "Change and supplier control",
          "Review evidence for a process change.",
          "A supplier proposes a process reducing lead time from 12 to 8 weeks. A sample result is available but configuration-representative evidence is missing.",
          "Request equivalence and capacity evidence; plan review and a timing contingency.",
          "Accept the change based on the initial test and review data after delivery.",
          "Retain the previous process without assessing delay impacts.",
          "An initial test is a signal, not proof of equivalence or sustained capacity. Manage continuity while evaluation is completed.",
          "Lower exposure to delays or failures if the alternative passes controls.",
          "Lead times; representative results; deviations; authorised decision.",
          "Quality, Engineering and Procurement."
        ]
      }
    ]
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
    "resource": "airbus-strategic-resilience-intelligence",
    "activities": [
      {
        "resource": "airbus-strategic-resilience-intelligence",
        "es": [
          "Justificación de inversiones",
          "Priorizar alternativas con un presupuesto limitado.",
          "En diez casos hipotéticos equivalentes, A cumple el plazo en 6 y cuesta 100.000 €; B cumple en 8 y cuesta 130.000 €. No hay datos sobre coste de incumplimiento ni incertidumbre.",
          "Mostrar dos cumplimientos adicionales y una prima de 30.000 €; solicitar valor del plazo e incertidumbre.",
          "Elegir B porque mejora el cumplimiento en 20 puntos porcentuales.",
          "Elegir A porque cuesta 30.000 € menos.",
          "La diferencia observada en el ejercicio es de 20 puntos porcentuales y 15.000 € por cumplimiento adicional, pero no demuestra rentabilidad ni causalidad real.",
          "Asignación de recursos basada en compromisos explícitos.",
          "Cumplimiento; prima de coste; valor del plazo; sensibilidad.",
          "Programa, Finanzas y responsables técnicos."
        ],
        "en": [
          "Investment justification",
          "Prioritise alternatives under a limited budget.",
          "In ten equivalent hypothetical cases, A meets the deadline in 6 and costs €100,000; B meets it in 8 and costs €130,000. Missed-deadline cost and uncertainty are unknown.",
          "Show two additional successful deadlines and a €30,000 premium; request deadline value and uncertainty.",
          "Choose B because attainment increases by 20 percentage points.",
          "Choose A because it costs €30,000 less.",
          "The exercise shows a 20 percentage-point difference and €15,000 per additional successful deadline, but does not demonstrate profitability or actual causality.",
          "Resource allocation based on explicit trade-offs.",
          "Attainment; cost premium; deadline value; sensitivity.",
          "Programme, Finance and technical owners."
        ]
      }
    ]
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
    "resource": "airbus-strategic-resilience-intelligence",
    "activities": [
      {
        "resource": "tass-readiness-resilience-simulator",
        "es": [
          "Continuidad de procesos digitales",
          "Revisar un plan de recuperación de información.",
          "Un proceso debe recuperarse en 4 h. La última prueba de restauración tardó 3 h, pero comprobar integridad y permisos añadió 2 h.",
          "Medir el tiempo integral de 5 h, estudiar alternativas autorizadas y repetir la prueba completa.",
          "Aceptar la prueba porque la restauración técnica tarda menos de 4 h.",
          "Reducir a la mitad el intervalo entre copias y mantener la prueba actual.",
          "El objetivo se refiere a recuperar la función, no solo los archivos: 3 + 2 = 5 h, una hora por encima del límite.",
          "Menor interrupción si la recuperación íntegra y autorizada cumple el objetivo.",
          "Tiempo de recuperación completo; pérdida de datos tolerada; integridad y accesos.",
          "Digital, Seguridad y propietario del proceso."
        ],
        "en": [
          "Digital process continuity",
          "Review an information recovery plan.",
          "A process must recover in 4 h. The latest restoration test took 3 h, but integrity and permission checks added 2 h.",
          "Measure the full 5 h, assess authorised alternatives and repeat the end-to-end test.",
          "Accept the test because technical restoration takes under 4 h.",
          "Halve backup intervals and retain the current test.",
          "The objective concerns functional recovery, not just files: 3 + 2 = 5 h, one hour beyond the limit.",
          "Shorter disruption if complete authorised recovery meets the target.",
          "End-to-end recovery time; tolerable data loss; integrity and access.",
          "Digital, Security and process owner."
        ]
      }
    ]
  },
  {
    "id": "environment",
    "resource": "mission-energy",
    "es": [
      "Medio Ambiente y sostenibilidad",
      "Evaluar una vulnerabilidad ambiental del proceso.",
      "Una instalación depende de 100 m³ diarios de agua; durante una restricción temporal solo recibe 65 m³. 60 m³ corresponden a funciones críticas, pero no se ha verificado calidad ni almacenamiento.",
      "Identificar funciones críticas, verificar calidad y balance de agua y comparar medidas de adaptación.",
      "Reducir el consumo un 35 % repartiendo el recorte entre todos los usos.",
      "Aumentar el almacenamiento nominal sin revisar calidad ni capacidad efectiva.",
      "La disponibilidad nominal supera en 5 m³ la demanda crítica; no garantiza continuidad sin calidad, capacidad y priorización verificadas.",
      "Menor exposición a restricciones de recursos si se conservan las funciones críticas.",
      "Demanda crítica; suministro utilizable; autonomía; condiciones de calidad.",
      "Medio Ambiente, Operaciones, Facilities y responsables de calidad."
    ],
    "en": [
      "Environment & sustainability",
      "Assess an environmental process vulnerability.",
      "A facility depends on 100 m³ of water daily; a temporary restriction limits supply to 65 m³. Critical functions require 60 m³, but quality and storage have not been verified.",
      "Identify critical functions, verify quality and water balance, and compare adaptation measures.",
      "Reduce consumption by 35% by distributing cuts across every use.",
      "Increase nominal storage without reviewing quality or effective capacity.",
      "Nominal supply exceeds critical demand by 5 m³; continuity is not assured without quality, capacity and verified prioritisation.",
      "Lower exposure to resource restrictions if critical functions are maintained.",
      "Critical demand; usable supply; autonomy; quality conditions.",
      "Environment, Operations, Facilities and quality owners."
    ],
    "activities": [
      {
        "resource": "airbus-strategic-resilience-intelligence",
        "es": [
          "Traducir una mejora ambiental",
          "Evaluar una iniciativa de circularidad.",
          "Una propuesta prevé evitar 20 kg de material por intervención, pero todavía no hay resultados sobre tiempo de reparación ni disponibilidad de repuestos.",
          "Separar ahorro material estimado de hipótesis de resiliencia; comparar plazos y requisitos y buscar evidencia.",
          "Comunicar los 20 kg como mejora demostrada de resiliencia.",
          "Aplazar toda comunicación hasta disponer de un análisis completo de ciclo de vida.",
          "El ahorro estimado de masa no demuestra continuidad. Puede formularse una hipótesis de resiliencia con indicadores y límites, sin atribuir un beneficio no medido.",
          "Mejor identificación de oportunidades ambientales que podrían reducir dependencias.",
          "Masa evitada; tiempo de recuperación; cobertura de repuestos; evidencia de equivalencia.",
          "Medio Ambiente, Ingeniería, In-Service y Programa."
        ],
        "en": [
          "Translate an environmental improvement",
          "Assess a circularity initiative.",
          "A proposal expects to avoid 20 kg of material per intervention, but repair duration and spare availability results are not yet available.",
          "Separate estimated material savings from a resilience hypothesis; compare timing and requirements and seek evidence.",
          "Communicate the 20 kg as a demonstrated resilience improvement.",
          "Postpone all communication until a complete life-cycle assessment is available.",
          "Estimated mass savings do not prove continuity. A resilience hypothesis can be stated with indicators and limits, without claiming an unmeasured benefit.",
          "Better identification of environmental opportunities that might reduce dependencies.",
          "Avoided mass; recovery time; spare coverage; equivalence evidence.",
          "Environment, Engineering, In-Service and Programme."
        ]
      }
    ]
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
    "resource": "tass-readiness-resilience-simulator",
    "activities": [
      {
        "resource": "sustainability-systems-escape-room",
        "es": [
          "Coordinación entre áreas",
          "Mejorar un proceso que depende de varias funciones.",
          "Una entrega interna necesita 1 día de trabajo y 4 días de espera de dos validaciones. El objetivo es 3 días; ambas validaciones siguen siendo obligatorias.",
          "Mapear dependencias, estudiar validaciones paralelas autorizadas y comprobar tiempos y calidad.",
          "Automatizar el trabajo de un día sin revisar las esperas.",
          "Añadir una reunión semanal de seguimiento manteniendo el flujo.",
          "El ciclo actual es 5 días. Incluso eliminar el día de trabajo deja 4 días; hay que revisar el flujo de validación sin suprimir controles.",
          "Menor retraso y mayor continuidad de procesos interdependientes.",
          "Tiempo total; espera por etapa; cumplimiento de controles.",
          "Propietario del proceso y áreas validadoras."
        ],
        "en": [
          "Cross-functional coordination",
          "Improve a process depending on several functions.",
          "An internal deliverable requires 1 day of work and 4 days waiting for two approvals. The target is 3 days; both approvals remain mandatory.",
          "Map dependencies, assess authorised parallel approvals and verify timing and quality.",
          "Automate the one day of work without reviewing waiting times.",
          "Add a weekly follow-up meeting while retaining the flow.",
          "Current cycle is 5 days. Even eliminating the working day leaves 4 days; review approval flow without removing controls.",
          "Lower delay and better continuity of interdependent processes.",
          "Total time; stage waiting; control compliance.",
          "Process owner and approving functions."
        ]
      }
    ]
  }
];});