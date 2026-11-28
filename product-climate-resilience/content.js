(function(root,factory){const x=factory();if(typeof module==="object"&&module.exports)module.exports=x;else root.SN_CLIMATE_MISSIONS=x;})(typeof globalThis!=="undefined"?globalThis:this,function(){return [
  {
    "title": {
      "es": "Calor extremo",
      "en": "Extreme heat"
    },
    "sub": {
      "es": "Margen térmico y envejecimiento",
      "en": "Thermal margin and ageing"
    },
    "icon": "heat",
    "theory": [
      {
        "es": "Amenaza y exposición|El aumento de temperaturas y la duración de episodios de calor pueden alterar las condiciones ambientales que un producto encontrará a lo largo de su vida. La temperatura del aire no es la temperatura interna de un equipo: importan radiación solar, ventilación, ciclo de uso, configuración y disipación. Para identificar exposición hacen falta escenarios regionales y temporales, no extrapolar un único verano a todos los programas.",
        "en": "Hazard and exposure|Rising temperatures and the duration of hot spells may alter the conditions a product encounters throughout its lifetime. Ambient temperature is not internal equipment temperature: solar radiation, ventilation, duty cycle, configuration and heat dissipation matter. Exposure requires regional and time-specific scenarios, not extrapolation from a single summer to every programme."
      },
      {
        "es": "Vulnerabilidad del producto|Un equipo electrónico puede perder margen térmico; materiales, juntas y baterías pueden tener mecanismos de degradación distintos. Un fallo no es inevitable por superar una temperatura histórica: primero se comprueba qué función se expone, qué requisitos y límites fueron validados y qué incertidumbre existe. Diferencia operación, almacenamiento y transporte.",
        "en": "Product vulnerability|Electronic equipment may lose thermal margin; materials, seals and batteries can have different degradation mechanisms. Exceeding a historical temperature does not make failure inevitable: first establish the exposed function, validated requirements and limits, and uncertainty. Distinguish operation, storage and transport."
      },
      {
        "es": "Analizar la brecha|En un ensayo didáctico de equipo ficticio, el límite interno de aceptación es 80 °C y se estima un máximo de 76 °C en la referencia, 84 °C en un escenario futuro. Margen = límite menos máximo: +4 y −4 °C respectivamente. Con incertidumbre de ±3 °C, el escenario futuro tiene margen entre −7 y −1 °C. Es una señal para revisar, no una predicción de fallo ni un límite aeronáutico real.",
        "en": "Gap analysis|In an educational test of fictional equipment, the internal acceptance limit is 80 °C and estimated peak is 76 °C in the baseline and 84 °C in a future scenario. Margin = limit minus peak: +4 and −4 °C respectively. With ±3 °C uncertainty, future margin ranges from −7 to −1 °C. This flags a review need, not a failure prediction or real aircraft limit."
      },
      {
        "es": "Alternativas y compromisos|Protección térmica, reducción de generación interna de calor, refrigeración o cambios de arquitectura son hipótesis que se comparan para una función equivalente. Pueden añadir masa, consumo, complejidad o dependencias de mantenimiento. Una modificación de diseño exige identificar interfaces, modos de fallo y requisitos afectados; una restricción de uso no equivale a adaptar el diseño.",
        "en": "Options and trade-offs|Thermal protection, reduced internal heat generation, cooling or architecture changes are hypotheses to compare for an equivalent function. They may add mass, power demand, complexity or maintenance dependencies. Design changes require identification of interfaces, failure modes and affected requirements; a use restriction is not the same as adapting design."
      },
      {
        "es": "Evidencia durante la vida útil|Los responsables técnicos necesitan condiciones de ensayo representativas, trazabilidad de configuración, criterios de aceptación y evidencia de durabilidad. Define fecha de revisión, supuestos climáticos, requisito afectado y responsable. Actualizar una referencia de diseño requiere el proceso autorizado; no basta con incorporar una temperatura a una tabla.",
        "en": "Lifetime evidence|Technical owners need representative test conditions, configuration traceability, acceptance criteria and durability evidence. Define a review date, climate assumptions, affected requirement and owner. Updating a design reference requires the authorised process; adding a temperature to a table is insufficient."
      }
    ],
    "case": {
      "es": "Caso ficticio: un módulo de electrónica tiene límite interno de 80 °C. La alternativa A estima 79 °C (+1 °C de margen); B, 74 °C (+6 °C), pero añade masa y potencia. Incertidumbre térmica ±3 °C para ambas. Ninguna ha sido validada.",
      "en": "Fictional case: an electronics module has an internal limit of 80 °C. Option A estimates 79 °C (+1 °C margin); B, 74 °C (+6 °C), but adds mass and power. Thermal uncertainty ±3 °C for both. Neither is validated."
    },
    "questions": [
      {
        "es": [
          "¿Qué dato define mejor la exposición térmica?",
          "Distribución de temperatura, duración, configuración y uso durante la vida útil",
          "Temperatura media anual del país",
          "Máximo histórico de temperatura exterior sin contexto",
          "El perfil de exposición incluye intensidad, duración y condiciones del equipo."
        ],
        "en": [
          "Which data best define thermal exposure?",
          "Temperature distribution, duration, configuration and use over service life",
          "National annual mean temperature",
          "Historical outdoor maximum without context",
          "Exposure includes intensity, duration and equipment conditions."
        ]
      },
      {
        "es": [
          "¿Cuál es el margen del escenario futuro de 84 °C?",
          "−4 °C",
          "+4 °C",
          "−8 °C",
          "80 − 84 = −4 °C: existe una brecha frente al criterio ficticio."
        ],
        "en": [
          "What is the margin in the 84 °C future scenario?",
          "−4 °C",
          "+4 °C",
          "−8 °C",
          "80 − 84 = −4 °C: a gap against the fictional criterion."
        ]
      },
      {
        "es": [
          "¿Qué margen mínimo tendría A considerando incertidumbre?",
          "−2 °C",
          "+1 °C",
          "+4 °C",
          "80 − (79 + 3) = −2 °C."
        ],
        "en": [
          "What minimum margin would A have with uncertainty?",
          "−2 °C",
          "+1 °C",
          "+4 °C",
          "80 − (79 + 3) = −2 °C."
        ]
      },
      {
        "es": [
          "¿Qué margen mínimo tendría B?",
          "+3 °C",
          "+6 °C",
          "−3 °C",
          "80 − (74 + 3) = +3 °C. Sigue siendo una estimación."
        ],
        "en": [
          "What minimum margin would B have?",
          "+3 °C",
          "+6 °C",
          "−3 °C",
          "80 − (74 + 3) = +3 °C. Still an estimate."
        ]
      },
      {
        "es": [
          "¿Qué decisión es defendible entre A y B?",
          "Priorizar la investigación de B y comprobar masa, potencia, requisitos y ensayos",
          "Aprobar B porque su margen nominal es positivo",
          "Elegir A por menor complejidad sin estudiar incertidumbre",
          "El margen orienta la investigación, pero no autoriza el cambio."
        ],
        "en": [
          "Which decision is defensible between A and B?",
          "Prioritise investigating B and check mass, power, requirements and tests",
          "Approve B because its nominal margin is positive",
          "Choose A for lower complexity without uncertainty analysis",
          "Margin guides investigation, not change approval."
        ]
      },
      {
        "es": [
          "¿Qué diferencia una medida de adaptación de una de mitigación?",
          "Adaptación reduce vulnerabilidad física; mitigación reduce causas climáticas",
          "Adaptación es reducir cualquier consumo energético",
          "Mitigación es aumentar capacidad de refrigeración",
          "Reducir emisiones y mantener función bajo calor son objetivos diferentes, aunque puedan coexistir."
        ],
        "en": [
          "What distinguishes adaptation from mitigation?",
          "Adaptation reduces physical vulnerability; mitigation reduces climate drivers",
          "Adaptation is reducing any energy use",
          "Mitigation is increasing cooling capacity",
          "Reducing emissions and preserving function under heat are different objectives, though they may coexist."
        ]
      },
      {
        "es": [
          "Una prueba funciona durante una hora. ¿Qué falta para afirmar durabilidad?",
          "Evidencia representativa de ciclos, envejecimiento y configuración",
          "Una segunda medición a la misma hora",
          "Una estimación de coste de sustitución",
          "Una prueba puntual no caracteriza deterioro a lo largo de la vida útil."
        ],
        "en": [
          "A one-hour test succeeds. What is missing to claim durability?",
          "Representative evidence of cycles, ageing and configuration",
          "A second reading at the same hour",
          "A replacement-cost estimate",
          "A single test does not characterise lifetime degradation."
        ]
      },
      {
        "es": [
          "¿Qué requisito conviene revisar primero?",
          "El asociado a la función térmicamente vulnerable y sus interfaces",
          "Todos los límites del producto con el mismo incremento",
          "Solo el requisito de reducción de energía",
          "La revisión debe estar vinculada al mecanismo y función afectados."
        ],
        "en": [
          "Which requirement should be reviewed first?",
          "The requirement linked to the thermally vulnerable function and interfaces",
          "Every product limit by the same increment",
          "Only the energy reduction requirement",
          "Review must link to the affected mechanism and function."
        ]
      },
      {
        "es": [
          "Si un escenario futuro es incierto, ¿qué hacer?",
          "Comparar varios escenarios, sensibilidad y umbrales de revisión",
          "Usar solo el peor valor como certeza",
          "Esperar a tener una previsión exacta",
          "La incertidumbre se gestiona de manera explícita; no se elimina inventando certezas."
        ],
        "en": [
          "If a future scenario is uncertain, what should be done?",
          "Compare scenarios, sensitivity and review thresholds",
          "Use only the worst value as certainty",
          "Wait for an exact forecast",
          "Uncertainty is managed explicitly, not removed by inventing certainty."
        ]
      },
      {
        "es": [
          "¿Qué evidencia permite cerrar la brecha?",
          "Requisitos trazados, ensayos representativos y decisión autorizada",
          "Informe de simulación favorable sin revisión",
          "Adquisición de la solución y mejora prevista",
          "El cierre requiere evidencia y autoridad competente."
        ],
        "en": [
          "What evidence allows the gap to be closed?",
          "Traced requirements, representative tests and authorised decision",
          "Favourable unreviewed simulation report",
          "Purchase of the solution and predicted improvement",
          "Closure requires evidence and competent authority."
        ]
      }
    ]
  },
  {
    "title": {
      "es": "Densidad del aire",
      "en": "Air density"
    },
    "sub": {
      "es": "Prestaciones y condiciones de diseño",
      "en": "Performance and design conditions"
    },
    "icon": "density",
    "theory": [
      {
        "es": "Física básica|La densidad del aire depende de presión, temperatura y composición. Para aire seco ideal, ρ = p/(R·T), con temperatura absoluta en kelvin. A presión fija, aumentar temperatura reduce densidad; en condiciones reales la presión también cambia y la humedad influye. Esta relación es física general, no un modelo de prestaciones de una plataforma.",
        "en": "Basic physics|Air density depends on pressure, temperature and composition. For ideal dry air, ρ = p/(R·T), using absolute temperature in kelvin. At fixed pressure, higher temperature reduces density; in reality pressure also changes and humidity matters. This is general physics, not a platform performance model."
      },
      {
        "es": "Vínculo con el producto|La densidad influye en fenómenos aerodinámicos y en sistemas que interactúan con el aire, como propulsión y refrigeración. Las prestaciones dependen además de configuración, características del sistema y requisitos. Una variación porcentual de densidad no se convierte directamente en una variación de carga útil, alcance o disponibilidad.",
        "en": "Product connection|Density affects aerodynamic phenomena and air-interacting systems such as propulsion and cooling. Performance also depends on configuration, system characteristics and requirements. A percentage density change does not translate directly into a payload, range or availability change."
      },
      {
        "es": "Ejemplo resuelto|A presión constante y aire seco, pasar de 293 K a 313 K da una razón de densidades 293/313 ≈ 0,936: reducción aproximada del 6,4 %. Si la presión del segundo escenario fuese también un 5 % menor, la razón sería 0,95×293/313 ≈ 0,889. Estos cocientes ilustran exposición física, no predicen prestaciones reales.",
        "en": "Worked example|At constant pressure and with dry air, going from 293 K to 313 K gives a density ratio of 293/313 ≈ 0.936: about a 6.4% reduction. If second-scenario pressure were also 5% lower, the ratio would be 0.95×293/313 ≈ 0.889. These ratios illustrate physical exposure, not actual performance."
      },
      {
        "es": "Brecha y adaptación|Un equipo de diseño debe revisar la representatividad de condiciones ambientales y la cobertura de requisitos y validaciones. Distingue si una condición afecta al producto, a una infraestructura o a una operación. Investiga qué función necesita evidencia adicional; no recomiendes nuevas prestaciones ni límites de uso sin modelos aprobados.",
        "en": "Gap and adaptation|A design team should review environmental condition representativeness and requirements and validation coverage. Distinguish whether a condition affects the product, infrastructure or operation. Investigate which function needs additional evidence; do not recommend new performance or use limits without approved models."
      },
      {
        "es": "Decisión de programa|Una plataforma puede permanecer décadas en servicio. La revisión de supuestos debe considerar regiones, horizontes y cambios de configuración. Compara alternativas de diseño y soporte, compromisos de energía y masa, calendario y evidencia. Una actualización de manuales exige trazabilidad y aprobación, no solo una proyección climática.",
        "en": "Programme decision|A platform may remain in service for decades. Assumptions must be reviewed across regions, horizons and configuration changes. Compare design and support options, energy and mass trade-offs, schedule and evidence. Updating manuals requires traceability and approval, not just a climate projection."
      }
    ],
    "case": {
      "es": "Caso ficticio: el expediente de un producto solo cubre un escenario de 293 K y presión de referencia. Se estudian 313 K a igual presión y 313 K con presión un 5 % menor. La evidencia existente no permite extrapolar prestaciones.",
      "en": "Fictional case: a product dossier only covers a 293 K scenario at reference pressure. Two scenarios are studied: 313 K at equal pressure and 313 K with 5% lower pressure. Existing evidence cannot extrapolate performance."
    },
    "questions": [
      {
        "es": [
          "¿Qué variables controlan la densidad del aire seco ideal?",
          "Presión absoluta y temperatura absoluta",
          "Temperatura en °C únicamente",
          "Velocidad del viento y precipitación",
          "ρ = p/(R·T), con T absoluta."
        ],
        "en": [
          "What variables control ideal dry-air density?",
          "Absolute pressure and absolute temperature",
          "Temperature in °C only",
          "Wind speed and precipitation",
          "ρ = p/(R·T), with absolute T."
        ]
      },
      {
        "es": [
          "A igual presión, ¿qué razón resulta al pasar de 293 a 313 K?",
          "0,936 aproximadamente",
          "1,068 aproximadamente",
          "0,064 aproximadamente",
          "293/313 ≈ 0,936."
        ],
        "en": [
          "At equal pressure, what ratio results from 293 to 313 K?",
          "About 0.936",
          "About 1.068",
          "About 0.064",
          "293/313 ≈ 0.936."
        ]
      },
      {
        "es": [
          "¿Qué reducción de densidad representa ese cociente?",
          "6,4 % aproximadamente",
          "20 %",
          "0,64 %",
          "(1 − 0,936)×100 ≈ 6,4 %."
        ],
        "en": [
          "What density reduction does that ratio represent?",
          "About 6.4%",
          "20%",
          "0.64%",
          "(1 − 0.936)×100 ≈ 6.4%."
        ]
      },
      {
        "es": [
          "Si también baja 5 % la presión, ¿qué razón resulta?",
          "0,889 aproximadamente",
          "0,986 aproximadamente",
          "0,950 exactamente",
          "0,95×293/313 ≈ 0,889."
        ],
        "en": [
          "If pressure also falls 5%, what ratio results?",
          "About 0.889",
          "About 0.986",
          "Exactly 0.950",
          "0.95×293/313 ≈ 0.889."
        ]
      },
      {
        "es": [
          "¿Qué puede concluirse sobre prestaciones a partir del 6,4 %?",
          "No cuantifica directamente prestaciones; se necesitan modelos y requisitos específicos",
          "La capacidad del producto se reduce en 6,4 %",
          "La disponibilidad anual baja en 6,4 puntos",
          "Una propiedad del aire no equivale a un resultado operacional."
        ],
        "en": [
          "What can be concluded about performance from 6.4%?",
          "It does not directly quantify performance; specific models and requirements are needed",
          "Product capability falls 6.4%",
          "Annual availability falls 6.4 points",
          "An air property is not an operational outcome."
        ]
      },
      {
        "es": [
          "¿Qué omite el ejemplo de aire seco?",
          "La influencia de humedad y variación real de presión",
          "La temperatura absoluta",
          "La relación entre presión y densidad",
          "El ejemplo fija supuestos deliberadamente; no describe toda la atmósfera."
        ],
        "en": [
          "What does the dry-air example omit?",
          "Humidity and real pressure variation",
          "Absolute temperature",
          "The pressure-density relationship",
          "The example fixes assumptions deliberately; it does not describe the entire atmosphere."
        ]
      },
      {
        "es": [
          "¿Cómo abordar una condición no cubierta por el expediente?",
          "Registrar la brecha y pedir análisis y validación de la función afectada",
          "Modificar directamente el límite de operación",
          "Considerar que un ensayo histórico cubre automáticamente el futuro",
          "Una brecha de evidencia no es autorización para extrapolar."
        ],
        "en": [
          "How should a condition outside the dossier be addressed?",
          "Register the gap and request affected-function analysis and validation",
          "Directly change the operating limit",
          "Assume a historical test automatically covers the future",
          "An evidence gap does not authorise extrapolation."
        ]
      },
      {
        "es": [
          "¿Qué comparación evita mezclar adaptación de producto y operación?",
          "Identificar qué requisito del producto cambia y qué medidas son externas al diseño",
          "Considerar todo cambio de horario un rediseño",
          "Considerar cualquier cambio de material una medida climática",
          "La frontera del sistema permite atribuir correctamente las medidas."
        ],
        "en": [
          "Which comparison avoids confusing product and operational adaptation?",
          "Identify changed product requirements and measures external to design",
          "Treat every schedule change as redesign",
          "Treat every material change as climate adaptation",
          "The system boundary allows correct attribution."
        ]
      },
      {
        "es": [
          "¿Qué dato aporta valor a la revisión de longevidad?",
          "Escenarios por región y horizonte, configuración y cobertura de evidencia",
          "Una temperatura promedio global sin localización",
          "Una única proyección tratada como certeza",
          "La exposición depende de dónde, cuándo y cómo se utiliza el producto."
        ],
        "en": [
          "What data add value to a lifetime review?",
          "Scenarios by region and horizon, configuration and evidence coverage",
          "A global mean temperature without location",
          "One projection treated as certainty",
          "Exposure depends on where, when and how the product is used."
        ]
      },
      {
        "es": [
          "¿Qué debe incluir una propuesta de actualización de manual?",
          "Requisito, supuesto revisado, evidencia, responsable y aprobación",
          "Solo el nuevo valor ambiental",
          "Una estimación de mejora de prestaciones",
          "El control de cambios asegura trazabilidad; la propuesta no equivale a aprobación."
        ],
        "en": [
          "What should a manual-update proposal include?",
          "Requirement, revised assumption, evidence, owner and approval",
          "Only the new environmental value",
          "An estimated performance improvement",
          "Change control ensures traceability; a proposal is not approval."
        ]
      }
    ]
  },
  {
    "title": {
      "es": "Polvo y abrasión",
      "en": "Dust and abrasion"
    },
    "sub": {
      "es": "Degradación, protección y mantenibilidad",
      "en": "Degradation, protection and maintainability"
    },
    "icon": "dust",
    "theory": [
      {
        "es": "Amenaza y exposición|Los episodios de polvo y arena dependen de meteorología, suelo, vegetación y uso del territorio. Su evolución varía según región y escenario. Para un producto importa la concentración, tamaño y composición de partículas, duración y condiciones de exposición. No todos los entornos tendrán el mismo cambio.",
        "en": "Hazard and exposure|Dust and sand episodes depend on weather, soil, vegetation and land use. Their evolution varies by region and scenario. For a product, particle concentration, size and composition, duration and exposure conditions matter. Not all environments will change in the same way."
      },
      {
        "es": "Mecanismos|Las partículas pueden erosionar superficies, contaminar mecanismos, obstruir filtros o afectar a sensores. Abrasión, deposición y obstrucción no son sinónimos; pueden requerir pruebas distintas. El daño depende de material, forma de exposición, estado del componente y mantenimiento. No debe inferirse una tasa real de desgaste de una concentración aislada.",
        "en": "Mechanisms|Particles can erode surfaces, contaminate mechanisms, clog filters or affect sensors. Abrasion, deposition and blockage are not synonyms and may require distinct tests. Damage depends on material, exposure mode, component condition and maintenance. A concentration alone cannot determine a real wear rate."
      },
      {
        "es": "Ejemplo resuelto|En ensayos ficticios de cupones equivalentes, referencia pierde 0,30 mm de espesor en 100 h de ensayo y protección B pierde 0,18 mm. La pérdida es un 40 % menor bajo esas condiciones. No se puede extrapolar linealmente a años de servicio: faltan ciclos, adherencia, interacción con otros mecanismos y evidencia representativa.",
        "en": "Worked example|In fictional tests of equivalent coupons, the baseline loses 0.30 mm of thickness in 100 test hours and protection B loses 0.18 mm. Loss is 40% lower under those conditions. Linear extrapolation to years of service is unjustified: cycles, adhesion, interaction with other mechanisms and representative evidence are missing."
      },
      {
        "es": "Diseño y soporte|Una protección superficial puede reducir erosión y a la vez dificultar inspección, reparación o reciclado. Un filtro puede limitar entrada de partículas y aumentar pérdida de carga y frecuencia de mantenimiento. La selección necesita comparar función, masa, consumo, acceso, vida útil y cualificación. La biomímesis puede generar hipótesis; no sustituye ensayos.",
        "en": "Design and support|Surface protection may reduce erosion while complicating inspection, repair or recycling. A filter may limit particle entry while increasing pressure loss and maintenance frequency. Selection requires comparison of function, mass, consumption, access, service life and qualification. Biomimicry may generate hypotheses; it cannot replace tests."
      },
      {
        "es": "Validación y longevidad|Define un perfil ambiental representativo, un indicador de deterioro, umbrales técnicos autorizados y datos de inspección. Compara alternativas con condiciones equivalentes y estudia fallos combinados. Los cambios de mantenimiento o diseño se revisan mediante responsabilidades y procesos autorizados; los datos didácticos no son intervalos reales.",
        "en": "Validation and longevity|Define a representative environmental profile, degradation indicator, authorised technical thresholds and inspection data. Compare alternatives under equivalent conditions and study combined failures. Maintenance or design changes follow authorised responsibilities and processes; educational figures are not real intervals."
      }
    ],
    "case": {
      "es": "Caso ficticio: dos cupones de material equivalente se ensayan en idénticas condiciones durante 100 h. A pierde 0,30 mm; B, 0,18 mm. B necesita comprobar adherencia y reparabilidad. Otro ensayo no comparable usa partículas de tamaño diferente.",
      "en": "Fictional case: two equivalent material coupons are tested under identical conditions for 100 h. A loses 0.30 mm; B, 0.18 mm. B requires adhesion and repairability checks. Another non-comparable test uses different particle sizes."
    },
    "questions": [
      {
        "es": [
          "¿Qué define mejor la exposición al polvo?",
          "Distribución de tamaño, composición, concentración, duración y condiciones",
          "Solo visibilidad durante el episodio",
          "Concentración media anual sin condiciones",
          "La exposición representa propiedades y duración relevantes para el mecanismo."
        ],
        "en": [
          "What best defines dust exposure?",
          "Size distribution, composition, concentration, duration and conditions",
          "Only visibility during the episode",
          "Annual mean concentration without conditions",
          "Exposure represents properties and duration relevant to the mechanism."
        ]
      },
      {
        "es": [
          "¿Qué diferencia erosión de obstrucción?",
          "Pérdida de material frente a restricción de un paso por acumulación",
          "Son el mismo mecanismo",
          "La obstrucción implica necesariamente pérdida de material",
          "Los mecanismos y métricas de daño son distintos."
        ],
        "en": [
          "What distinguishes erosion from blockage?",
          "Material loss versus passage restriction through accumulation",
          "They are the same mechanism",
          "Blockage necessarily implies material loss",
          "Mechanisms and damage metrics differ."
        ]
      },
      {
        "es": [
          "¿Cuánta pérdida de espesor evita B en el ensayo?",
          "0,12 mm",
          "0,18 mm",
          "0,48 mm",
          "0,30 − 0,18 = 0,12 mm."
        ],
        "en": [
          "How much thickness loss does B avoid in the test?",
          "0.12 mm",
          "0.18 mm",
          "0.48 mm",
          "0.30 − 0.18 = 0.12 mm."
        ]
      },
      {
        "es": [
          "¿Qué reducción relativa representa?",
          "40 %",
          "60 %",
          "12 %",
          "0,12/0,30 = 40 %."
        ],
        "en": [
          "What relative reduction does this represent?",
          "40%",
          "60%",
          "12%",
          "0.12/0.30 = 40%."
        ]
      },
      {
        "es": [
          "¿Qué afirmación es válida?",
          "B perdió 40 % menos espesor en el ensayo ficticio",
          "B aumenta 40 % la vida del producto",
          "B reduce 40 % los costes de mantenimiento",
          "El ensayo solo apoya una comparación de pérdida de espesor en sus condiciones."
        ],
        "en": [
          "Which claim is valid?",
          "B lost 40% less thickness in the fictional test",
          "B increases product life by 40%",
          "B reduces maintenance cost by 40%",
          "The test only supports a thickness-loss comparison under its conditions."
        ]
      },
      {
        "es": [
          "¿Cómo usar el ensayo con partículas diferentes?",
          "Evaluar comparabilidad antes de combinar resultados",
          "Promediarlo directamente con los otros ensayos",
          "Tomarlo como confirmación de durabilidad",
          "Cambiar condiciones puede alterar mecanismos y tasas de deterioro."
        ],
        "en": [
          "How should the test with different particles be used?",
          "Assess comparability before combining results",
          "Average directly with the other tests",
          "Treat it as durability confirmation",
          "Changed conditions can alter degradation mechanisms and rates."
        ]
      },
      {
        "es": [
          "¿Qué compromiso introduce una protección superficial?",
          "Posibles cambios de masa, inspección, reparación y fin de vida",
          "Solo coste de compra",
          "Ningún compromiso si reduce erosión",
          "Una mejora local puede desplazar otros impactos o requisitos."
        ],
        "en": [
          "What trade-off can surface protection introduce?",
          "Possible mass, inspection, repair and end-of-life changes",
          "Purchase cost only",
          "No trade-off if it reduces erosion",
          "A local improvement can shift other impacts or requirements."
        ]
      },
      {
        "es": [
          "Un filtro retiene más polvo. ¿Qué comprobar adicionalmente?",
          "Pérdida de carga, función, mantenimiento y comportamiento saturado",
          "Solo cantidad de polvo retenido",
          "Solo reciclabilidad del filtro",
          "La retención no basta si compromete la función o la mantenibilidad."
        ],
        "en": [
          "A filter captures more dust. What else should be checked?",
          "Pressure loss, function, maintenance and loaded behaviour",
          "Only dust captured",
          "Only filter recyclability",
          "Retention is insufficient if function or maintainability is compromised."
        ]
      },
      {
        "es": [
          "Una superficie bioinspirada parece autolimpiable. ¿Qué falta?",
          "Ensayar la función relevante, erosión, durabilidad y condiciones equivalentes",
          "Asumir resistencia a abrasión por su aspecto",
          "Medir únicamente repelencia al agua",
          "Autolimpieza y resistencia a abrasión son propiedades diferentes."
        ],
        "en": [
          "A bio-inspired surface appears self-cleaning. What is missing?",
          "Test relevant function, erosion, durability and equivalent conditions",
          "Assume abrasion resistance from appearance",
          "Measure water repellence only",
          "Self-cleaning and abrasion resistance are distinct properties."
        ]
      },
      {
        "es": [
          "¿Cómo convertir los datos en una revisión de diseño?",
          "Registrar exposición, mecanismo, requisito, evidencia y responsable",
          "Cambiar intervalos de mantenimiento a partir de 100 h de ensayo",
          "Publicar el 40 % como mejora de disponibilidad",
          "No se extrapolan intervalos ni disponibilidad de un ensayo de cupón."
        ],
        "en": [
          "How can data support design review?",
          "Record exposure, mechanism, requirement, evidence and owner",
          "Change maintenance intervals based on 100 test hours",
          "Publish 40% as improved availability",
          "Coupon tests do not establish maintenance intervals or availability."
        ]
      }
    ]
  },
  {
    "title": {
      "es": "Tormentas severas",
      "en": "Severe storms"
    },
    "sub": {
      "es": "Exposición combinada y requisitos",
      "en": "Compound exposure and requirements"
    },
    "icon": "storm",
    "theory": [
      {
        "es": "Amenazas diferentes|Tormentas severas pueden combinar precipitación intensa, viento, granizo, rayos y turbulencia. No son un único fenómeno ni evolucionan igual en todas las regiones. Las proyecciones de frecuencia e intensidad tienen diferentes niveles de certeza. Para adaptar un producto hay que identificar cada exposición relevante y también sus combinaciones.",
        "en": "Distinct hazards|Severe storms may combine heavy precipitation, wind, hail, lightning and turbulence. They are not a single phenomenon and do not evolve identically across regions. Frequency and intensity projections have different certainty levels. Product adaptation requires identifying each relevant exposure and combinations."
      },
      {
        "es": "Funciones vulnerables|La humedad y entrada de agua pueden afectar equipos y conectores; el granizo puede dañar superficies; los fenómenos eléctricos y cargas mecánicas tienen otros mecanismos. Los requisitos técnicos y evidencias aplicables dependen de la función, arquitectura y configuración. Una medida física no resuelve necesariamente todos los mecanismos.",
        "en": "Vulnerable functions|Moisture and water ingress may affect equipment and connectors; hail may damage surfaces; electrical phenomena and mechanical loads involve other mechanisms. Applicable requirements and evidence depend on function, architecture and configuration. One physical measure does not necessarily address every mechanism."
      },
      {
        "es": "Ejemplo resuelto|En un ejercicio ficticio de validación, se identifican 12 condiciones relevantes. Ocho disponen de evidencia representativa, dos de evidencia parcial y dos no tienen evidencia. Cobertura completa = 8/12 = 66,7 %. Tener documentación parcial de diez no equivale a validar el 83,3 %: el estado de evidencia debe conservarse.",
        "en": "Worked example|In a fictional validation exercise, 12 relevant conditions are identified. Eight have representative evidence, two partial evidence and two no evidence. Complete coverage = 8/12 = 66.7%. Partial documentation of ten does not mean 83.3% validation: evidence status must be preserved."
      },
      {
        "es": "Fallos comunes y compromisos|Una tormenta puede afectar simultáneamente al producto y a medios de soporte. Una prueba de un solo fenómeno no prueba robustez ante una combinación. Evalúa interfaces y dependencias, medidas de diseño y soporte y riesgos residuales. La adaptación debe preservar seguridad y requisitos; no implica operar durante condiciones fuera de límites aprobados.",
        "en": "Common failures and trade-offs|A storm may affect the product and support assets simultaneously. A single-hazard test does not prove robustness to combinations. Evaluate interfaces and dependencies, design and support measures and residual risks. Adaptation must preserve safety and requirements; it does not mean operating beyond approved limits."
      },
      {
        "es": "Plan de adaptación y revisión|Un registro de brechas conecta peligro y horizonte, elemento expuesto, consecuencia funcional, requisito, estado de evidencia, alternativa, responsable y fecha o desencadenante de revisión. Prioriza según criticidad, no solo cantidad de brechas. El cierre depende de validación y aprobación técnica. Esta disciplina favorece longevidad, pero no demuestra por sí sola una extensión de vida.",
        "en": "Adaptation and review plan|A gap register connects hazard and horizon, exposed element, functional consequence, requirement, evidence status, option, owner and review date or trigger. Prioritise by criticality, not just number of gaps. Closure depends on technical validation and approval. This discipline supports longevity but does not itself prove life extension."
      }
    ],
    "case": {
      "es": "Caso ficticio: 12 condiciones relevantes, 8 con evidencia representativa, 2 parcial, 2 ausente. Un paquete propuesto añadiría evidencia completa para 3 de las 4 brechas si supera las pruebas; una de las brechas restantes afecta a una función crítica. No hay aprobación técnica.",
      "en": "Fictional case: 12 relevant conditions, 8 with representative evidence, 2 partial, 2 absent. A proposed package would provide complete evidence for 3 of the 4 gaps if tests succeed; one remaining gap affects a critical function. There is no technical approval."
    },
    "questions": [
      {
        "es": [
          "¿Qué enfoque es correcto ante tormentas severas?",
          "Distinguir fenómenos y combinaciones relevantes según exposición y función",
          "Usar un único indicador de lluvia para todos los efectos",
          "Tratar toda tormenta futura como de intensidad conocida",
          "Cada fenómeno tiene mecanismos e incertidumbre propios."
        ],
        "en": [
          "What approach is correct for severe storms?",
          "Distinguish relevant phenomena and combinations by exposure and function",
          "Use a single rainfall indicator for every effect",
          "Treat every future storm as having known intensity",
          "Each phenomenon has distinct mechanisms and uncertainty."
        ]
      },
      {
        "es": [
          "¿Qué porcentaje tiene evidencia completa inicialmente?",
          "66,7 %",
          "83,3 %",
          "100 %",
          "8/12 × 100 ≈ 66,7 %."
        ],
        "en": [
          "What percentage has complete evidence initially?",
          "66.7%",
          "83.3%",
          "100%",
          "8/12 × 100 ≈ 66.7%."
        ]
      },
      {
        "es": [
          "¿Cuántas condiciones siguen sin evidencia completa?",
          "4",
          "2",
          "8",
          "Dos parciales más dos ausentes = cuatro."
        ],
        "en": [
          "How many conditions still lack complete evidence?",
          "4",
          "2",
          "8",
          "Two partial plus two absent = four."
        ]
      },
      {
        "es": [
          "Si las tres pruebas nuevas tienen éxito, ¿qué cobertura completa se alcanzaría?",
          "91,7 %",
          "75 %",
          "100 %",
          "(8+3)/12 ≈ 91,7 %, condicionado a pruebas y revisión."
        ],
        "en": [
          "If the three new tests succeed, what complete coverage would be reached?",
          "91.7%",
          "75%",
          "100%",
          "(8+3)/12 ≈ 91.7%, conditional on tests and review."
        ]
      },
      {
        "es": [
          "¿Permitiría eso cerrar todo el riesgo?",
          "No: queda una brecha crítica; revisar consecuencia y evidencia",
          "Sí, porque supera el 90 %",
          "Sí, si la media de resultados es favorable",
          "La cantidad de requisitos cubiertos no sustituye la criticidad de los pendientes."
        ],
        "en": [
          "Would this close all risk?",
          "No: a critical gap remains; review consequence and evidence",
          "Yes, because coverage exceeds 90%",
          "Yes, if average results are favourable",
          "The number covered cannot replace remaining-gap criticality."
        ]
      },
      {
        "es": [
          "Una solución protege contra humedad. ¿Qué se puede inferir sobre granizo?",
          "Nada concluyente sin evidencia del mecanismo correspondiente",
          "También resiste granizo por ser una protección",
          "Reduce a la mitad el daño de granizo",
          "Mecanismos diferentes requieren evidencias pertinentes."
        ],
        "en": [
          "A solution protects against moisture. What can be inferred about hail?",
          "Nothing conclusive without evidence for that mechanism",
          "It also resists hail because it is protective",
          "It halves hail damage",
          "Different mechanisms require relevant evidence."
        ]
      },
      {
        "es": [
          "Una tormenta afecta al equipo y al almacén de repuestos. ¿Qué revisar?",
          "La dependencia conjunta y la recuperación de la función y soporte",
          "Solo resistencia física del equipo",
          "Solo existencias nominales de repuestos",
          "El fallo combinado puede impedir recuperación aunque una parte sobreviva."
        ],
        "en": [
          "A storm affects equipment and spare storage. What should be reviewed?",
          "Joint dependency and recovery of function and support",
          "Only physical equipment resistance",
          "Only nominal spare stocks",
          "Compound failure can prevent recovery even if one part survives."
        ]
      },
      {
        "es": [
          "¿Qué dato aporta una prueba de fenómeno aislado?",
          "Evidencia limitada a sus condiciones y mecanismo",
          "Confirmación de resistencia a cualquier combinación",
          "Un índice completo de adaptación climática",
          "No demuestra comportamiento combinado fuera de sus límites."
        ],
        "en": [
          "What does a single-hazard test provide?",
          "Evidence limited to its conditions and mechanism",
          "Confirmation of resistance to any combination",
          "A complete climate adaptation index",
          "It does not demonstrate combined behaviour outside its boundary."
        ]
      },
      {
        "es": [
          "¿Qué debe registrar el responsable del requisito?",
          "Peligro, función, requisito, estado de evidencia, acción, propietario y revisión",
          "Solo puntuación global de resiliencia",
          "Solo coste y fecha del proyecto",
          "El registro conecta la vulnerabilidad con una acción verificable."
        ],
        "en": [
          "What should a requirement owner record?",
          "Hazard, function, requirement, evidence state, action, owner and review",
          "Only a global resilience score",
          "Only project cost and date",
          "The register links vulnerability to verifiable action."
        ]
      },
      {
        "es": [
          "¿Qué conclusión es defendible sobre la longevidad?",
          "La revisión puede preservar adecuación futura; extensión de vida requiere evidencia",
          "El paquete garantiza diez años adicionales",
          "La cobertura de pruebas es equivalente a años de servicio",
          "La extensión de vida no se deduce de un porcentaje de evidencia."
        ],
        "en": [
          "What conclusion about longevity is defensible?",
          "Review may preserve future suitability; life extension requires evidence",
          "The package guarantees ten additional years",
          "Test coverage is equivalent to years of service",
          "Life extension cannot be inferred from an evidence percentage."
        ]
      }
    ]
  }
];});