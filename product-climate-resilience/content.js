(function(root,factory){const x=factory();if(typeof module==="object"&&module.exports)module.exports=x;else root.SN_CLIMATE_MISSIONS=x;})(typeof globalThis!=="undefined"?globalThis:this,function(){return [
  {
    "title": {
      "es": "Ciencia climática y riesgo físico",
      "en": "Climate science and physical risk"
    },
    "sub": {
      "es": "De la proyección al perfil ambiental",
      "en": "From projection to environmental profile"
    },
    "icon": "climate",
    "theory": [
      {
        "es": "Tiempo, clima y adaptación|El tiempo describe el estado de la atmósfera en un momento; el clima describe distribuciones, variabilidad y extremos durante períodos prolongados. Un episodio aislado no establece una tendencia. La mitigación limita las causas del cambio climático; la adaptación reduce daños o aprovecha oportunidades ante condiciones cambiantes. En un producto, la pregunta no es únicamente cuánto emite, sino si sigue satisfaciendo su función cuando cambia el entorno.",
        "en": "Weather, climate and adaptation|Weather describes atmospheric conditions at a given time; climate describes distributions, variability and extremes over extended periods. A single event does not establish a trend. Mitigation limits climate drivers; adaptation reduces harm or uses opportunities under changing conditions. For a product, the question is not only how much it emits but whether it continues to meet its function as the environment changes."
      },
      {
        "es": "Escenarios y horizontes [1, 2]|Las trayectorias SSP representan futuros condicionados a supuestos socioeconómicos y emisiones, no pronósticos con probabilidad asignada. Selecciona varios escenarios coherentes con la vida de servicio; 2030, 2050 y 2070 son hitos de revisión, no predicciones de un día concreto. La comparación debe mantener una referencia común y distinguir períodos promedio de episodios extremos.",
        "en": "Scenarios and horizons [1, 2]|SSP pathways describe conditional futures based on socioeconomic and emissions assumptions, not forecasts with assigned probabilities. Select several scenarios consistent with service life; 2030, 2050 and 2070 are review milestones, not forecasts for a particular day. Comparisons need a common baseline and must distinguish period averages from extremes."
      },
      {
        "es": "Escala regional y variables|El aumento medio global no equivale al cambio en cada región ni al máximo de una jornada. El Atlas IPCC y el Atlas Copernicus permiten comparar distribuciones regionales, períodos, escenarios e índices. Para un producto interesa la intensidad, frecuencia, duración, estacionalidad y coincidencia de amenazas. La resolución regional no describe necesariamente el microclima de una superficie o compartimento.",
        "en": "Regional scale and variables|Global mean warming is not the change in every region or the maximum on a particular day. The IPCC and Copernicus atlases enable comparison of regional distributions, periods, scenarios and indices. Relevant product variables include intensity, frequency, duration, seasonality and co-occurrence. Regional resolution does not necessarily represent the microclimate of a surface or compartment."
      },
      {
        "es": "Cadena causal del riesgo|Amenaza: fenómeno físico. Exposición: contacto de una función con él. Vulnerabilidad: susceptibilidad y capacidad de respuesta. Consecuencia: pérdida de función, seguridad, vida o disponibilidad. Una misma amenaza puede tener resultados diferentes según arquitectura, estado, protección y soporte. El riesgo no es sinónimo de temperatura o frecuencia.",
        "en": "Risk causal chain|Hazard: physical phenomenon. Exposure: contact of a function with it. Vulnerability: susceptibility and response capability. Consequence: loss of function, safety, life or availability. The same hazard can yield different outcomes depending on architecture, condition, protection and support. Risk is not synonymous with temperature or frequency."
      },
      {
        "es": "Ejemplo de cribado climático|En un conjunto inventado, los días por encima de un umbral ambiental pasan de 12/año de referencia a un rango de 20–35/año para un período futuro. Si un equipo está expuesto solo durante parte del año, no conocemos su número de exposiciones sin cruzar calendario, lugar y estado. El aumento de días no equivale a un aumento proporcional de fallos. El umbral no es una limitación aeronáutica.",
        "en": "Climate screening example|In a fictional dataset, days above an environmental threshold increase from 12/year in the baseline to 20–35/year in a future period. If equipment is exposed only during part of the year, the number of exposures is unknown without combining calendar, location and state. More days do not imply a proportional increase in failures. The threshold is not an aircraft limitation."
      },
      {
        "es": "Incertidumbre y robustez|Distingue variabilidad natural, diferencias entre modelos, escenarios y error de medida o transferencia al equipo. Un rango de modelos no es automáticamente un intervalo de confianza. Registra fuente, versión, variable, unidad, período y escala. Una opción robusta conserva su utilidad bajo varios futuros plausibles, sin depender de un único valor central.",
        "en": "Uncertainty and robustness|Distinguish natural variability, model differences, scenarios and measurement or equipment-transfer error. A model range is not automatically a confidence interval. Record source, version, variable, unit, period and scale. A robust option remains useful across plausible futures without relying on one central value."
      },
      {
        "es": "Perfil ambiental de vida [3, 4, 7]|Relaciona la información climática con las etapas de fabricación, transporte, almacenamiento, mantenimiento, operación y retirada. La exposición de una pieza almacenada difiere de la de un equipo en funcionamiento. Incluye condiciones transitorias y combinadas. El perfil ambiental se convierte en una entrada para Ingeniería; no es por sí mismo una especificación autorizada.",
        "en": "Life-cycle environmental profile [3, 4, 7]|Link climate information to manufacturing, transport, storage, maintenance, operation and retirement. Stored parts and operating equipment have different exposure. Include transient and combined conditions. The environmental profile becomes an engineering input; it is not itself an authorised specification."
      },
      {
        "es": "Producto, infraestructura y cliente|Una interrupción de una instalación de soporte puede reducir disponibilidad aunque el producto esté intacto. Una adaptación del producto modifica su vulnerabilidad física; una adaptación operativa modifica exposición o recuperación. Conserva esta distinción al comunicar valor y no presentes una mejora de infraestructura como cualificación del producto.",
        "en": "Product, infrastructure and customer|A support facility disruption can reduce availability even if the product is intact. Product adaptation changes physical vulnerability; operational adaptation changes exposure or recovery. Preserve this distinction when communicating value and do not portray infrastructure improvement as product qualification."
      }
    ],
    "case": {
      "es": "Datos ficticios: horizonte 2050, referencia 12 días/año por encima de un umbral de estudio; escenarios X e Y: 20 y 35 días/año. La función expuesta y sus registros de uso todavía no están identificados.",
      "en": "Fictional data: 2050 horizon, baseline 12 days/year above a screening threshold; scenarios X and Y: 20 and 35 days/year. The exposed function and usage records have not yet been identified."
    },
    "questions": [
      {
        "es": [
          "¿Qué representa el rango 20–35?",
          "Resultados condicionados a escenarios de estudio",
          "Probabilidad de fallo de 20–35 %",
          "Límite de diseño aprobado",
          "La variable describe exposición climática potencial, no probabilidad de fallo."
        ],
        "en": [
          "What does the 20–35 range represent?",
          "Results conditional on study scenarios",
          "A 20–35% failure probability",
          "An approved design limit",
          "The variable describes potential climatic exposure, not failure probability."
        ]
      },
      {
        "es": [
          "¿Qué dato falta para estimar exposición real?",
          "Lugar, calendario y configuración de uso",
          "Solo la media global",
          "Precio de adquisición",
          "La función debe coincidir espacial y temporalmente con la amenaza."
        ],
        "en": [
          "What is missing to estimate actual exposure?",
          "Location, calendar and usage configuration",
          "Global mean only",
          "Purchase price",
          "The function must coincide spatially and temporally with the hazard."
        ]
      },
      {
        "es": [
          "¿Qué caracteriza mejor una vulnerabilidad?",
          "Susceptibilidad de una función expuesta y capacidad de respuesta",
          "Número de días cálidos exclusivamente",
          "Masa total del producto",
          "La vulnerabilidad depende de cómo responde el sistema."
        ],
        "en": [
          "What best characterises vulnerability?",
          "Susceptibility of an exposed function and response capacity",
          "Number of hot days alone",
          "Total product mass",
          "Vulnerability depends on the system response."
        ]
      },
      {
        "es": [
          "¿Qué comparación climática es válida?",
          "Misma variable, referencia y escala documentada",
          "Comparar una media global con máximo local",
          "Mezclar distintos períodos sin indicarlo",
          "La coherencia de las magnitudes permite interpretar diferencias."
        ],
        "en": [
          "Which climate comparison is valid?",
          "Same documented variable, baseline and scale",
          "Compare a global mean with a local maximum",
          "Mix periods without stating it",
          "Consistent quantities permit interpretation."
        ]
      },
      {
        "es": [
          "¿Qué opción demuestra adaptación del producto?",
          "Una hipótesis de protección de una función ante el peligro, pendiente de verificar",
          "Una campaña de ahorro de papel",
          "Un plan de reducción de CO₂ sin efecto físico estudiado",
          "La adaptación modifica exposición o vulnerabilidad frente al riesgo."
        ],
        "en": [
          "Which option addresses product adaptation?",
          "A hypothesis to protect a function against the hazard, pending verification",
          "A paper-saving campaign",
          "A CO₂ reduction plan with no studied physical effect",
          "Adaptation changes exposure or vulnerability to risk."
        ]
      },
      {
        "es": [
          "¿Qué debe hacerse con una incertidumbre alta?",
          "Estudiar sensibilidad y definir evidencia y umbrales de revisión",
          "Elegir un escenario como certeza",
          "Eliminar el rango del informe",
          "La decisión debe ser transparente ante varios futuros."
        ],
        "en": [
          "What should be done with high uncertainty?",
          "Study sensitivity and set evidence and review triggers",
          "Choose one scenario as certainty",
          "Remove the range from the report",
          "The decision should be transparent across futures."
        ]
      }
    ],
    "refs": [
      1,
      2,
      3,
      4,
      5,
      7
    ],
    "objective": {
      "es": "Interpretar escenarios y construir una cadena amenaza–exposición–vulnerabilidad–consecuencia.",
      "en": "Interpret scenarios and construct a hazard–exposure–vulnerability–consequence chain."
    }
  },
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
        "es": "Balance térmico y mecanismos|La energía interna aumenta cuando la potencia absorbida y disipada por los componentes supera la evacuada. Conducción, convección y radiación actúan simultáneamente. La resistencia térmica efectiva relaciona de forma aproximada potencia y diferencia de temperatura en un estado estacionario; no representa transitorios, geometrías complejas ni cambios de ventilación. La radiación solar puede calentar una superficie por encima del aire ambiente.",
        "en": "Heat balance and mechanisms|Internal energy rises when absorbed and dissipated component power exceeds heat removal. Conduction, convection and radiation act together. Effective thermal resistance approximately relates power to temperature difference at steady state; it does not represent transients, complex geometries or ventilation changes. Solar radiation can heat a surface above ambient air."
      },
      {
        "es": "Envejecimiento y ciclos [7]|Temperatura máxima, tiempo de permanencia, rampas y amplitud de ciclos no son intercambiables. El calor sostenido puede acelerar determinadas reacciones químicas y el desajuste de expansión entre materiales puede causar fatiga de interconexiones. Polímeros y juntas pueden perder propiedades; en baterías la química y condiciones de uso determinan el envejecimiento. No existe un multiplicador universal de vida por cada incremento de temperatura.",
        "en": "Ageing and cycles [7]|Peak temperature, dwell time, ramp rates and cycle amplitude are not interchangeable. Sustained heat may accelerate certain chemical reactions and mismatch in material expansion can fatigue interconnects. Polymers and seals may lose properties; battery chemistry and usage determine ageing. No universal lifetime multiplier applies to each temperature increase."
      },
      {
        "es": "Refrigeración e interfaces|La evacuación de calor depende de las interfaces térmicas y del entorno. Una protección que reduzca radiación puede dificultar disipación; un filtro obstruido puede limitar el intercambio térmico. Considera efectos sobre otras funciones, consumo, masa, inspección y mantenimiento. La adaptación no se demuestra solo por reducir un máximo de temperatura.",
        "en": "Cooling and interfaces|Heat removal depends on thermal interfaces and environment. Protection that reduces radiation may impede heat dissipation; a clogged filter may restrict heat exchange. Consider other functions, energy demand, mass, inspection and maintenance. Adaptation is not demonstrated solely by reducing a temperature peak."
      },
      {
        "es": "Estados y consecuencias funcionales|Separa exposición con el equipo encendido, apagado, almacenado y tras cambios térmicos. Registra la función que debe conservarse, el criterio de aceptación y los efectos de un deterioro gradual. Una alarma térmica o pérdida de margen no equivale automáticamente a fallo; exige análisis específico y evidencia representativa.",
        "en": "States and functional consequences|Separate exposure while powered, unpowered, stored and after thermal transitions. Record the function to preserve, acceptance criterion and effects of gradual degradation. A thermal warning or reduced margin is not automatically a failure; it requires specific analysis and representative evidence."
      },
      {
        "es": "Evaluación de alternativas|Una solución pasiva puede tener menores dependencias energéticas pero mayor masa o limitaciones de integración; una solución activa puede aportar control y añadir alimentación y mantenimiento. Define el mismo servicio para comparar. Usa medidas de protección, rediseño y soporte como hipótesis, no como instrucciones de modificación de un producto real.",
        "en": "Option assessment|A passive solution may have fewer energy dependencies but greater mass or integration limits; an active one may provide control while adding power and maintenance. Define equivalent service for comparison. Treat protection, redesign and support measures as hypotheses, not instructions to modify a real product."
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
    ],
    "refs": [
      1,
      3,
      4,
      7
    ],
    "objective": {
      "es": "Explicar mecanismos térmicos y evaluar márgenes y evidencias.",
      "en": "Explain thermal mechanisms and assess margins and evidence."
    }
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
        "es": "Atmósfera y altitud de densidad [6]|La altitud de densidad expresa qué altitud de una atmósfera estándar tendría la densidad observada. No es la altitud geométrica. Temperatura, presión y humedad modifican la densidad. En aire húmedo, a igual presión y temperatura, la densidad es menor que la del aire seco. La altitud de densidad ayuda a entender por qué condiciones a la misma elevación pueden no ser equivalentes.",
        "en": "Atmosphere and density altitude [6]|Density altitude expresses the altitude in a standard atmosphere with the observed density. It is not geometric altitude. Temperature, pressure and humidity change density. At the same pressure and temperature, moist air is less dense than dry air. Density altitude helps explain why conditions at the same elevation may not be equivalent."
      },
      {
        "es": "Aerodinámica conceptual [8]|La ecuación de sustentación L = ½ρV²SC_L relaciona densidad, velocidad relativa, superficie y coeficiente aerodinámico. Para una comparación manteniendo las demás variables constantes, menor densidad implica menor sustentación. En un sistema real, las variables están acopladas; el coeficiente depende de geometría y condiciones de flujo. La relación no sirve para obtener límites, distancias ni cargas útiles de una aeronave concreta.",
        "en": "Conceptual aerodynamics [8]|The lift equation L = ½ρV²SC_L relates density, relative speed, area and aerodynamic coefficient. In a comparison with other variables held constant, lower density means lower lift. In a real system, variables are coupled; the coefficient depends on geometry and flow conditions. The relation does not yield limits, distances or payloads for a particular aircraft."
      },
      {
        "es": "Propulsión y sistemas auxiliares|La densidad afecta la cantidad de masa de aire que interactúa con los sistemas. El rendimiento de propulsión depende de su tecnología y control; la refrigeración por aire depende también de caudal, temperatura y geometría. No hay una conversión universal de pérdida de densidad a empuje, potencia o alcance. Ingeniería debe identificar modelos y requisitos pertinentes.",
        "en": "Propulsion and auxiliary systems|Density affects the air mass interacting with systems. Propulsion performance depends on technology and control; air cooling also depends on flow rate, temperature and geometry. There is no universal conversion from density loss to thrust, power or range. Engineering must identify relevant models and requirements."
      },
      {
        "es": "Consecuencia de negocio|Los márgenes de prestaciones condicionan la capacidad de prestar un servicio y la flexibilidad de uso. Distingue degradación del entorno, limitación funcional y resultado de disponibilidad. No extrapoles del cálculo físico una cifra comercial ni recomiendes operar fuera de documentación aprobada.",
        "en": "Business consequence|Performance margins affect service capability and flexibility. Distinguish environmental change, functional limitation and availability outcome. Do not extrapolate a commercial figure from the physics calculation or recommend operation outside approved documentation."
      },
      {
        "es": "Brecha de evidencia|Comprueba si los modelos o ensayos autorizados representan los nuevos rangos ambientales, configuraciones y combinaciones. Un modelo validado para un intervalo no queda validado fuera de él automáticamente. Registra el dominio de validez, las hipótesis y el responsable de la decisión técnica.",
        "en": "Evidence gap|Check whether authorised models or tests represent new environmental ranges, configurations and combinations. A model validated within an interval is not automatically valid outside it. Record validity domain, assumptions and technical decision owner."
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
    ],
    "refs": [
      3,
      4,
      6,
      8
    ],
    "objective": {
      "es": "Relacionar densidad y prestaciones sin extrapolar límites de producto.",
      "en": "Relate density to performance without extrapolating product limits."
    }
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
        "es": "Caracterización de partículas|La exposición no se describe solo por masa de polvo por volumen. Tamaño, forma, dureza, composición, humedad y duración condicionan el mecanismo. Arena y polvo fino tienen distribuciones distintas. Cambios del suelo, vegetación, sequía y viento pueden alterar la exposición local, pero su evolución no es uniforme.",
        "en": "Particle characterisation|Exposure is not described by dust mass per volume alone. Size, shape, hardness, composition, moisture and duration affect the mechanism. Sand and fine dust have different distributions. Changes in soil, vegetation, drought and wind can alter local exposure, but trends are not uniform."
      },
      {
        "es": "Erosión y abrasión|La erosión implica pérdida de material por impacto de partículas; la abrasión puede resultar del rozamiento o desplazamiento de partículas entre superficies. La deposición acumula material y la obstrucción restringe pasos de flujo. Pueden coexistir y requieren indicadores diferentes: pérdida de espesor, condición superficial, contaminación o pérdida de carga.",
        "en": "Erosion and abrasion|Erosion involves material loss from particle impact; abrasion may result from rubbing or movement of particles between surfaces. Deposition accumulates material and blockage restricts flow paths. They can coexist and need distinct indicators: thickness loss, surface condition, contamination or pressure drop."
      },
      {
        "es": "Efectos en el producto|Las superficies expuestas, elementos ópticos, sensores, uniones y equipos con intercambio de aire pueden presentar vulnerabilidades distintas. La pérdida de material puede modificar geometría; la deposición puede afectar transmisión óptica o transferencia térmica. Identifica la función afectada y no extrapoles el resultado de un cupón a un conjunto completo.",
        "en": "Product effects|Exposed surfaces, optical elements, sensors, joints and air-exchanging equipment may have different vulnerabilities. Material loss may alter geometry; deposition may affect optical transmission or heat transfer. Identify the affected function and do not extrapolate a coupon result to an entire assembly."
      },
      {
        "es": "Interacciones climáticas|Polvo depositado y humedad pueden modificar la contaminación superficial; calor y filtración pueden interactuar a través de las necesidades de refrigeración. Un ensayo aislado no demuestra efectos acumulados ni secuencias representativas. Distingue daño reversible por limpieza de daño irreversible por pérdida de material.",
        "en": "Climate interactions|Deposited dust and moisture may change surface contamination; heat and filtration can interact through cooling needs. An isolated test does not demonstrate cumulative effects or representative sequences. Distinguish reversible contamination from irreversible material loss."
      },
      {
        "es": "Mantenibilidad y validación [7]|Compara opciones sobre piezas y funciones equivalentes, con criterios de desgaste, inspeccionabilidad, compatibilidad y soporte. Una reducción de daño en condiciones de ensayo no equivale a un nuevo intervalo de mantenimiento ni a una vida de servicio demostrada. Las evidencias deben incluir condiciones, incertidumbre, configuración y revisión autorizada.",
        "en": "Maintainability and validation [7]|Compare options on equivalent parts and functions, with wear, inspectability, compatibility and support criteria. Reduced damage under test conditions does not equal a new maintenance interval or demonstrated service life. Evidence should include conditions, uncertainty, configuration and authorised review."
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
    ],
    "refs": [
      3,
      4,
      7
    ],
    "objective": {
      "es": "Distinguir mecanismos de deterioro y comparar evidencias equivalentes.",
      "en": "Distinguish degradation mechanisms and compare equivalent evidence."
    }
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
        "es": "Convección, granizo y cargas|Las tormentas convectivas pueden generar ráfagas, granizo y cambios rápidos en el flujo. El impacto del granizo y las cargas variables son mecanismos mecánicos distintos. La turbulencia en aire claro es un fenómeno diferente de una tormenta visible. El análisis debe separar amenaza, entorno y consecuencias sin asumir una tendencia común para todos los fenómenos.",
        "en": "Convection, hail and loads|Convective storms can produce gusts, hail and rapid flow changes. Hail impact and variable loads are distinct mechanical mechanisms. Clear-air turbulence differs from a visible storm. Analysis must separate hazard, environment and consequences without assuming a common trend for all phenomena."
      },
      {
        "es": "Agua, humedad y corrosión|La lluvia intensa, entrada de agua y condensación pueden afectar estanqueidad, aislamiento o interfaces. La corrosión depende de materiales, electrolitos y condiciones, no simplemente de la cantidad anual de precipitación. La exposición a humedad repetida puede tener un efecto acumulativo distinto de una inundación puntual.",
        "en": "Water, humidity and corrosion|Heavy rain, water ingress and condensation may affect sealing, insulation or interfaces. Corrosion depends on materials, electrolytes and conditions, not simply annual rainfall. Repeated moisture exposure can have cumulative effects different from a single flooding event."
      },
      {
        "es": "Rayos y compatibilidad|Los fenómenos eléctricos pueden producir efectos directos e indirectos en materiales, sistemas e interfaces. La respuesta depende de arquitectura y protección. La demostración de robustez mecánica no sustituye la evidencia eléctrica o electromagnética. Las categorías de ensayo aplicables deben proceder de la base técnica autorizada.",
        "en": "Lightning and compatibility|Electrical phenomena can produce direct and indirect effects on materials, systems and interfaces. Response depends on architecture and protection. Mechanical robustness evidence does not replace electrical or electromagnetic evidence. Applicable test categories must come from the authorised technical basis."
      },
      {
        "es": "Riesgos compuestos y cascadas|Precipitación, humedad, calor y pérdida de soporte pueden coincidir o sucederse. Un conjunto de pruebas individuales no demuestra necesariamente el comportamiento secuencial o combinado. Distingue dependencia común de fallos independientes. En caso de incertidumbre, formula la hipótesis y solicita una evaluación de interfaces.",
        "en": "Compound and cascading risks|Precipitation, humidity, heat and support loss can coincide or follow one another. Individual tests do not necessarily demonstrate sequential or combined behaviour. Distinguish common dependencies from independent failures. When uncertain, formulate the hypothesis and request interface assessment."
      },
      {
        "es": "Respuesta y límites [3, 4, 5]|Una estrategia puede incluir protección física, robustez de soporte, vigilancia de tendencias y planificación de recuperación. No es una autorización para operar en condiciones adversas fuera de los límites establecidos. La adaptación busca conservar funciones con seguridad y revisar la evidencia a lo largo del tiempo.",
        "en": "Response and limits [3, 4, 5]|A strategy may include physical protection, support robustness, trend monitoring and recovery planning. It is not authorisation to operate in adverse conditions outside established limits. Adaptation seeks to preserve functions safely and review evidence over time."
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
    ],
    "refs": [
      1,
      3,
      4,
      5,
      7
    ],
    "objective": {
      "es": "Diferenciar fenómenos y reconocer riesgos compuestos y carencias críticas.",
      "en": "Differentiate phenomena and recognise compound risks and critical gaps."
    }
  },
  {
    "title": {
      "es": "Análisis de brechas climáticas",
      "en": "Climate gap analysis"
    },
    "sub": {
      "es": "De la exposición a una brecha trazable",
      "en": "From exposure to a traceable gap"
    },
    "icon": "gap",
    "theory": [
      {
        "es": "Qué es una brecha|No es cualquier cambio climático ni un fallo demostrado. Es una diferencia identificada entre una necesidad futura, la capacidad o requisito existente y la evidencia que lo respalda. Puede ser de conocimiento, cobertura, prestaciones, interfaz, validación o responsabilidad. Una brecha de evidencia no equivale a incumplimiento técnico probado.",
        "en": "What is a gap?|It is not any climate change or a demonstrated failure. It is an identified difference between a future need, existing capability or requirement and supporting evidence. It may concern knowledge, coverage, performance, interfaces, validation or ownership. An evidence gap does not equal proven technical non-compliance."
      },
      {
        "es": "Establecer la referencia|Identifica el producto hipotético, función, configuración, fase del ciclo de vida, hipótesis ambientales, requisito y evidencia de origen. Una especificación sin versión o una prueba de otra configuración no constituye una referencia trazable. Registra qué se desconoce en vez de asumir cobertura.",
        "en": "Establish the baseline|Identify the hypothetical product, function, configuration, life-cycle phase, environmental assumptions, requirement and original evidence. An unversioned specification or a test on another configuration is not a traceable baseline. Record unknowns rather than assuming coverage."
      },
      {
        "es": "Comparabilidad y márgenes|La comparación usa magnitudes coherentes: máximo interno con máximo interno, distribución ambiental con perfil ambiental. Para un límite superior didáctico, margen = criterio − demanda. Si un rango de incertidumbre atraviesa cero, el estado es indeterminado. Un valor favorable no sustituye ensayos ni revisión de criticidad.",
        "en": "Comparability and margins|Compare like quantities: internal maximum with internal maximum, environmental distribution with environmental profile. For an illustrative upper limit, margin = criterion − demand. If the uncertainty range crosses zero, the status is indeterminate. A favourable value cannot replace testing or criticality review."
      },
      {
        "es": "Ejemplo de registro|R-FICT-01: función de equipo electrónico; límite interno ficticio 80 °C; estimación futura 78–83 °C; margen −3 a +2 °C; estado abierto por incertidumbre y evidencia no representativa. Responsable propuesto: ingeniería de sistema; evidencia solicitada: análisis de transferencia térmica y verificación de la función en condiciones representativas. El ejemplo no identifica una limitación real.",
        "en": "Register example|R-FICT-01: electronics function; fictional internal limit 80°C; future estimate 78–83°C; margin −3 to +2°C; open due to uncertainty and unrepresentative evidence. Proposed owner: systems engineering; requested evidence: heat-transfer analysis and function verification under representative conditions. The example identifies no real limitation."
      },
      {
        "es": "Criticidad y prioridad|Distingue severidad de la consecuencia, exposición, incertidumbre y posibilidad de recuperación. Una matriz cualitativa ayuda a organizar, no calcula probabilidades automáticamente. Una sola carencia de seguridad puede impedir una conclusión favorable aunque la media del registro sea alta. Conserva el estado de cada requisito crítico.",
        "en": "Criticality and priority|Distinguish consequence severity, exposure, uncertainty and recoverability. A qualitative matrix helps organise; it does not calculate probabilities automatically. One safety-related gap may prevent a favourable conclusion even if average coverage is high. Preserve the status of every critical requirement."
      },
      {
        "es": "Comparar opciones sin sesgo|Define función equivalente, hipótesis, beneficio esperado, impactos adversos y dependencias. Una opción de menor coste no es preferible si incumple una restricción esencial. Separa ausencia de datos de resultado negativo. Evalúa sensibilidad y registra alternativas descartadas y motivo.",
        "en": "Compare options without bias|Define equivalent function, assumptions, expected benefit, adverse effects and dependencies. A lower-cost option is not preferable if it violates an essential constraint. Distinguish missing data from a negative result. Assess sensitivity and record rejected options and reasons."
      },
      {
        "es": "Trazabilidad [9]|La cadena debe conectar escenario y fuente → exposición → función → requisito y versión → evidencia → estado → acción y responsable → criterio de cierre. La trazabilidad bidireccional permite detectar qué documentos y pruebas se ven afectados cuando cambia una hipótesis. Una hoja de cribado no reemplaza el sistema autorizado de requisitos.",
        "en": "Traceability [9]|Connect scenario and source → exposure → function → requirement and version → evidence → status → action and owner → closure criterion. Bidirectional traceability helps identify affected documents and tests when an assumption changes. A screening sheet does not replace the authorised requirements system."
      },
      {
        "es": "Seguimiento y cierre|Una brecha se cierra solo con evidencia suficiente para el criterio correspondiente y decisión de la autoridad responsable. Diferencia propuesta, análisis, ensayo, revisión y aprobación. Define desencadenantes de reapertura, por ejemplo una revisión de escenarios o de configuración. El riesgo residual permanece visible.",
        "en": "Follow-up and closure|Close a gap only with evidence sufficient for the relevant criterion and a responsible authority's decision. Separate proposal, analysis, test, review and approval. Define reopening triggers, such as revised scenarios or configuration. Keep residual risk visible."
      }
    ],
    "case": {
      "es": "Registro ficticio: R-01 límite interno 80 °C, demanda futura 78–83 °C, evidencia parcial; R-02 evidencia representativa de la condición estudiada; R-03 función crítica, evidencia ausente. No hay autorización de cambio.",
      "en": "Fictional register: R-01 internal limit 80°C, future demand 78–83°C, partial evidence; R-02 representative evidence for the studied condition; R-03 critical function, absent evidence. No change authorisation."
    },
    "questions": [
      {
        "es": [
          "¿Cuál es el margen de R-01?",
          "−3 a +2 °C",
          "+2 a +3 °C",
          "−5 °C fijo",
          "80−83=−3 y 80−78=+2; el intervalo atraviesa cero."
        ],
        "en": [
          "What is R-01's margin?",
          "−3 to +2°C",
          "+2 to +3°C",
          "Fixed −5°C",
          "80−83=−3 and 80−78=+2; the interval crosses zero."
        ]
      },
      {
        "es": [
          "¿Qué estado corresponde a R-01?",
          "Abierto, resultado indeterminado",
          "Aprobado por margen máximo positivo",
          "Fallo confirmado",
          "La incertidumbre y evidencia parcial impiden cerrar."
        ],
        "en": [
          "What status fits R-01?",
          "Open, indeterminate result",
          "Approved due to positive maximum margin",
          "Confirmed failure",
          "Uncertainty and partial evidence prevent closure."
        ]
      },
      {
        "es": [
          "¿Qué prioridad tiene R-03?",
          "Escalar por criticidad y falta de evidencia",
          "Cerrar porque R-02 está cubierto",
          "Asignar riesgo cero sin ensayos",
          "La criticidad no se compensa mediante promedios."
        ],
        "en": [
          "What is R-03's priority?",
          "Escalate due to criticality and missing evidence",
          "Close because R-02 is covered",
          "Assign zero risk without tests",
          "Criticality cannot be offset by averages."
        ]
      },
      {
        "es": [
          "¿Qué permite la trazabilidad bidireccional?",
          "Identificar requisitos, interfaces y pruebas afectados",
          "Sustituir las pruebas por una lista",
          "Aprobar cambios de forma automática",
          "Conecta origen, implementación y evidencia."
        ],
        "en": [
          "What does bidirectional traceability enable?",
          "Identify affected requirements, interfaces and tests",
          "Replace tests with a list",
          "Automatically approve changes",
          "It connects origin, implementation and evidence."
        ]
      },
      {
        "es": [
          "¿Qué es una comparación válida de alternativas?",
          "Misma función y criterios, con incertidumbre y efectos adversos",
          "Solo el precio inicial",
          "La que presenta el mejor valor sin revisar alcance",
          "La equivalencia funcional y los compromisos son esenciales."
        ],
        "en": [
          "What is a valid option comparison?",
          "Same function and criteria, with uncertainty and adverse effects",
          "Initial price only",
          "The best value without checking scope",
          "Functional equivalence and trade-offs are essential."
        ]
      },
      {
        "es": [
          "¿Cuándo se puede cerrar una brecha?",
          "Tras evidencia suficiente y revisión autorizada",
          "Al proponer una solución",
          "Cuando desaparece del informe",
          "El estado de cierre exige evidencia y responsabilidad."
        ],
        "en": [
          "When may a gap be closed?",
          "After sufficient evidence and authorised review",
          "When a solution is proposed",
          "When it disappears from the report",
          "Closure requires evidence and accountability."
        ]
      }
    ],
    "refs": [
      1,
      5,
      7,
      9
    ],
    "objective": {
      "es": "Construir un registro trazable, calcular márgenes ilustrativos y priorizar por criticidad.",
      "en": "Build a traceable register, calculate illustrative margins and prioritise by criticality."
    }
  },
  {
    "title": {
      "es": "Requisitos, manuales y cualificación",
      "en": "Requirements, manuals and qualification"
    },
    "sub": {
      "es": "Gobernanza del cambio de diseño",
      "en": "Design-change governance"
    },
    "icon": "design",
    "theory": [
      {
        "es": "Jerarquía documental|Una necesidad de cliente y una función de producto se transforman en requisitos de sistema y componentes; de ellos derivan criterios, interfaces y métodos de verificación. Un manual de diseño puede orientar decisiones, pero no sustituye la base de requisitos ni la evidencia de una configuración. La documentación de operación o mantenimiento tiene un propósito diferente.",
        "en": "Document hierarchy|Customer needs and product functions become system and component requirements, from which criteria, interfaces and verification methods derive. A design manual may guide decisions but does not replace the requirements baseline or configuration evidence. Operating and maintenance documents serve different purposes."
      },
      {
        "es": "Perfil ambiental y tailoring [7]|MIL-STD-810 presenta un proceso para adaptar criterios y pruebas al entorno previsto durante la vida del material. No impone un ensayo único que garantice aptitud para cualquier producto. El método, severidad, duración, secuencia y estado funcional dependen del perfil, requisitos y base aplicable. Su uso es una referencia pública, no una afirmación de obligatoriedad para un programa.",
        "en": "Environmental profile and tailoring [7]|MIL-STD-810 describes a process to tailor criteria and tests to the expected life-cycle environment. It does not impose one test that guarantees suitability for every product. Method, severity, duration, sequence and functional state depend on profile, requirements and applicable basis. Its use here is public reference, not a claim of mandatory programme applicability."
      },
      {
        "es": "Requisitos verificables|Una redacción útil identifica función, condición, criterio medible y ámbito; evita expresiones como 'resistente al clima'. Ejemplo ficticio: verificar la función definida de un equipo bajo el perfil ambiental E-FICT-01 y el criterio C-FICT-01, ambos sujetos a aprobación. Los valores y métodos deben derivarse del análisis, no copiarse de una fuente sin justificar.",
        "en": "Verifiable requirements|Useful wording identifies function, condition, measurable criterion and scope; avoid phrases such as 'climate resistant'. Fictional example: verify a specified equipment function under environmental profile E-FICT-01 and criterion C-FICT-01, both subject to approval. Values and methods must derive from analysis, not be copied without justification."
      },
      {
        "es": "Verificación y validación [9]|Verificación: demostrar que se cumplen requisitos especificados mediante métodos adecuados, como análisis, ensayo, inspección o demostración. Validación: comprobar que el producto o requisito responde a la necesidad prevista en su contexto. Un ensayo favorable de una pieza no valida automáticamente una arquitectura ni una necesidad de cliente.",
        "en": "Verification and validation [9]|Verification: demonstrate compliance with specified requirements through suitable methods such as analysis, test, inspection or demonstration. Validation: assess whether the product or requirement meets the intended need in context. A favourable component test does not automatically validate an architecture or customer need."
      },
      {
        "es": "Representatividad de evidencia|El expediente debe identificar configuración, procedimiento, criterios, condiciones, incertidumbre, resultados y desviaciones. Los ensayos acelerados requieren una relación justificada con mecanismos de deterioro de servicio; no basta multiplicar horas. Ensayos combinados o secuenciales necesitan justificación específica.",
        "en": "Evidence representativeness|The dossier should identify configuration, procedure, criteria, conditions, uncertainty, results and deviations. Accelerated tests require a justified relationship to service degradation mechanisms; multiplying hours is insufficient. Combined or sequential tests require specific justification."
      },
      {
        "es": "Cambio controlado y manuales|Una propuesta parte de una brecha y evalúa requisitos, arquitectura, interfaces, evidencias, configuración, soporte y documentación afectada. Después se somete al proceso autorizado, se decide el alcance de verificación y se controla la nueva revisión y aplicabilidad. No se modifica unilateralmente un manual ni se declara un nuevo límite de operación.",
        "en": "Controlled change and manuals|A proposal starts from a gap and assesses affected requirements, architecture, interfaces, evidence, configuration, support and documentation. It then enters the authorised process, verification scope is decided and revision and applicability are controlled. Do not unilaterally amend a manual or declare a new operating limit."
      },
      {
        "es": "Aeronavegabilidad [10]|La seguridad y conformidad se gestionan conforme al marco aplicable al producto y a la autoridad competente. Los documentos EMAR de EDA ilustran un marco armonizado militar cuya adopción nacional y aplicabilidad deben comprobarse; la normativa civil no se presupone aplicable. Una experiencia formativa no acredita cumplimiento, cualificación ni autorización.",
        "en": "Airworthiness [10]|Safety and conformity are managed under the applicable product framework and competent authority. EDA EMAR documents illustrate a harmonised military framework whose national adoption and applicability must be checked; civil rules are not assumed applicable. A learning experience does not establish compliance, qualification or authorisation."
      },
      {
        "es": "Responsabilidades y decisión|Ingeniería define y analiza requisitos; especialistas de calidad y validación evalúan evidencia; Programa gestiona alcance y recursos; In-Service aporta experiencia de servicio; las autoridades y responsables autorizados deciden según sus competencias. Las funciones exactas dependen de la organización y del programa. El informe educativo debe identificar el responsable por confirmar.",
        "en": "Responsibilities and decisions|Engineering defines and analyses requirements; quality and validation specialists assess evidence; Programme manages scope and resources; In-Service contributes service experience; authorised authorities and owners decide within their remit. Exact roles depend on organisation and programme. A learning report should identify the owner to be confirmed."
      }
    ],
    "case": {
      "es": "Caso ficticio: el manual de diseño M-01 revisión A referencia un perfil E-01 histórico. Se propone un perfil E-02 futuro; un ensayo parcial se realizó en configuración K1 y se pretende aplicarlo a K2. No existe aprobación del cambio.",
      "en": "Fictional case: design manual M-01 revision A refers to historical profile E-01. A future E-02 profile is proposed; a partial test was performed on configuration K1 and intended for K2. The change is not approved."
    },
    "questions": [
      {
        "es": [
          "¿Qué justifica revisar M-01?",
          "Brecha trazable entre perfil, función y requisitos",
          "Una proyección aislada sin función afectada",
          "Copiar todos los límites de otro producto",
          "La revisión requiere una necesidad técnica identificada."
        ],
        "en": [
          "What justifies reviewing M-01?",
          "Traceable gap between profile, function and requirements",
          "An isolated projection with no affected function",
          "Copy every limit from another product",
          "Review requires an identified technical need."
        ]
      },
      {
        "es": [
          "¿Cómo tratar evidencia de K1 para K2?",
          "Analizar diferencias y justificar aplicabilidad",
          "Considerarla automáticamente válida",
          "Descartarla siempre sin análisis",
          "La configuración condiciona la representatividad."
        ],
        "en": [
          "How should K1 evidence be treated for K2?",
          "Analyse differences and justify applicability",
          "Treat as automatically valid",
          "Always discard without analysis",
          "Configuration affects representativeness."
        ]
      },
      {
        "es": [
          "¿Qué establece MIL-STD-810 como enfoque?",
          "Adaptar diseño y ensayos al perfil y requisitos",
          "Un límite universal para toda aeronave",
          "Un certificado automático por ensayo",
          "Tailoring no equivale a cualificación universal."
        ],
        "en": [
          "What approach does MIL-STD-810 establish?",
          "Tailor design and tests to profile and requirements",
          "A universal limit for every aircraft",
          "An automatic certificate after testing",
          "Tailoring is not universal qualification."
        ]
      },
      {
        "es": [
          "¿Qué diferencia validación de verificación?",
          "Necesidad prevista frente a requisitos especificados",
          "Validación es siempre inspección visual",
          "Son equivalentes en cualquier situación",
          "Ambas son complementarias, con objetivos distintos."
        ],
        "en": [
          "What distinguishes validation from verification?",
          "Intended need versus specified requirements",
          "Validation is always visual inspection",
          "They are equivalent in every situation",
          "Both are complementary and have different objectives."
        ]
      },
      {
        "es": [
          "¿Qué procede antes de incorporar E-02?",
          "Evaluar impacto, evidencia y proceso autorizado",
          "Actualizar el manual sin revisar interfaces",
          "Declarar aptitud al publicar el perfil",
          "Un cambio requiere control, trazabilidad y decisión."
        ],
        "en": [
          "What precedes adoption of E-02?",
          "Assess impact, evidence and authorised process",
          "Update the manual without interface review",
          "Claim suitability on publishing the profile",
          "Change requires control, traceability and decision."
        ]
      },
      {
        "es": [
          "¿Son los EMAR automáticamente aplicables?",
          "No; debe comprobarse adopción, alcance y autoridad",
          "Sí a cualquier producto",
          "Sí, sustituyen todos los requisitos",
          "El marco aplicable es específico."
        ],
        "en": [
          "Are EMAR automatically applicable?",
          "No; adoption, scope and authority must be checked",
          "Yes, to every product",
          "Yes, they replace all requirements",
          "The applicable framework is specific."
        ]
      }
    ],
    "refs": [
      7,
      9,
      10
    ],
    "objective": {
      "es": "Justificar una revisión documental y distinguir requisitos, verificación, validación y aprobación.",
      "en": "Justify document review and distinguish requirements, verification, validation and approval."
    }
  },
  {
    "title": {
      "es": "Longevidad y estrategia de adaptación",
      "en": "Longevity and adaptation strategy"
    },
    "sub": {
      "es": "Preservar función durante décadas",
      "en": "Preserving function over decades"
    },
    "icon": "life",
    "theory": [
      {
        "es": "Longevidad funcional|La longevidad no es simplemente mantener un producto físicamente existente. Implica que su función siga siendo adecuada, segura, mantenible y soportable frente a condiciones cambiantes. Distingue vida física, vida económica, obsolescencia tecnológica y adecuación a nuevas condiciones ambientales. Una mejora puntual no demuestra una extensión de vida.",
        "en": "Functional longevity|Longevity is not simply keeping a product physically in existence. Its function must remain suitable, safe, maintainable and supportable as conditions change. Distinguish physical life, economic life, technological obsolescence and suitability for new environmental conditions. A local improvement does not demonstrate life extension."
      },
      {
        "es": "Fiabilidad, mantenibilidad y disponibilidad|Fiabilidad se refiere a cumplir la función durante un período y condiciones definidos; mantenibilidad, a restaurarla bajo condiciones de soporte; disponibilidad, a estar en estado de prestar servicio cuando se necesita. Dependen de datos y definiciones consistentes. No conviertas una reducción de desgaste en un incremento de disponibilidad sin modelar el sistema y el soporte.",
        "en": "Reliability, maintainability and availability|Reliability concerns fulfilling a function for a defined period and conditions; maintainability concerns restoration under support conditions; availability concerns being able to deliver service when required. They depend on consistent data and definitions. Do not convert reduced wear into improved availability without system and support modelling."
      },
      {
        "es": "Adaptación por etapas|Puede ser prudente investigar ahora, diseñar una opción compatible con futuras revisiones y decidir inversiones cuando se alcance un desencadenante. Compara decisiones reversibles, dependencias, tiempos de preparación y riesgo de bloqueo. Evitar una decisión inmediata no equivale a no actuar; documenta qué información falta y cuándo se reconsiderará.",
        "en": "Staged adaptation|It may be prudent to investigate now, design an option compatible with future revisions and decide investments when a trigger is reached. Compare reversible choices, dependencies, lead times and lock-in risk. Avoiding an immediate decision does not mean doing nothing; document information gaps and review timing."
      },
      {
        "es": "Retrofit frente a nuevo diseño|La modificación de productos existentes requiere estudiar compatibilidad, variantes, interfaces, estado, evidencia y logística de incorporación. Un nuevo diseño puede integrar requisitos desde el inicio, pero también introduce dependencias y costes de validación. No se presupone que ninguna opción sea mejor sin comparar funciones y restricciones equivalentes.",
        "en": "Retrofit versus new design|Modification of existing products requires compatibility, variants, interfaces, condition, evidence and incorporation logistics to be studied. A new design can integrate requirements from the outset but also introduces dependencies and validation costs. Neither option is assumed superior without comparing equivalent functions and constraints."
      },
      {
        "es": "Coste del ciclo de vida|Diferencia inversión, cualificación, incorporación, soporte, consumo, mantenimiento y retirada. Ejemplo ficticio y sin descuento: A cuesta 100 unidades iniciales y 12/año de soporte; B, 160 iniciales y 5/año. A diez años: 220 y 210. Es una comparación ilustrativa, no un business case: no incluye incertidumbre, descuento, riesgo residual ni equivalencia técnica demostrada.",
        "en": "Life-cycle cost|Separate investment, qualification, incorporation, support, consumption, maintenance and retirement. Fictional undiscounted example: A costs 100 units initially and 12/year for support; B, 160 initially and 5/year. At ten years: 220 and 210. This is illustrative, not a business case: it excludes uncertainty, discounting, residual risk and demonstrated technical equivalence."
      },
      {
        "es": "Indicadores útiles|Distingue indicadores de exposición, estado, evidencia y resultados: cobertura de escenarios, margen frente a criterio, brechas críticas abiertas, estado de cualificación, tendencia de deterioro, coste y disponibilidad observada. Cada indicador necesita alcance, unidad, fuente, responsable y frecuencia. La puntuación de un curso nunca mide disponibilidad de producto.",
        "en": "Useful indicators|Distinguish exposure, condition, evidence and outcome metrics: scenario coverage, margin to criterion, open critical gaps, qualification status, degradation trend, cost and observed availability. Each indicator needs scope, unit, source, owner and frequency. A course score never measures product availability."
      },
      {
        "es": "Evitar maladaptación|Una medida puede desplazar el riesgo: aumentar masa o consumo, crear una dependencia única, dificultar reparación o introducir materiales difíciles de gestionar. Evalúa efectos sobre seguridad, sostenibilidad, coste y soporte; conserva incertidumbres y riesgos residuales. El beneficio ambiental no compensa por sí solo una carencia crítica de producto.",
        "en": "Avoid maladaptation|A measure may shift risk: increasing mass or energy use, creating a single dependency, hindering repair or introducing difficult-to-manage materials. Assess effects on safety, sustainability, cost and support; preserve uncertainty and residual risks. Environmental benefit alone cannot offset a critical product gap."
      },
      {
        "es": "Hoja de ruta y colaboración|Establece puntos de revisión 2030, 2050 y 2070 si son pertinentes al horizonte ficticio: datos necesarios, responsable, decisión y desencadenante. Ingeniería, Programa, In-Service, Compras y Calidad pueden contribuir de maneras distintas. Comunica al cliente solo beneficios condicionados a evidencias, no promesas de prestaciones o longevidad.",
        "en": "Roadmap and collaboration|Set 2030, 2050 and 2070 review points if relevant to the fictional horizon: needed data, owner, decision and trigger. Engineering, Programme, In-Service, Procurement and Quality can contribute differently. Communicate only evidence-conditioned benefits to customers, not performance or longevity promises."
      }
    ],
    "case": {
      "es": "Caso ficticio: opciones A y B con costes iniciales de 100 y 160 unidades y soporte anual de 12 y 5. Horizonte 10 años. B tiene una interfaz sin verificar; A conserva una brecha ambiental abierta. Ninguna opción está aprobada.",
      "en": "Fictional case: options A and B have initial costs of 100 and 160 units and annual support costs of 12 and 5. Ten-year horizon. B has an unverified interface; A retains an open environmental gap. Neither option is approved."
    },
    "questions": [
      {
        "es": [
          "¿Cuál es el coste simple de A y B a 10 años?",
          "220 y 210 unidades",
          "112 y 165 unidades",
          "100 y 160 unidades",
          "Se suma inversión y diez años de soporte; no hay descuento."
        ],
        "en": [
          "What is the simple ten-year cost of A and B?",
          "220 and 210 units",
          "112 and 165 units",
          "100 and 160 units",
          "Add investment and ten years of support; no discounting."
        ]
      },
      {
        "es": [
          "¿Permite ese cálculo elegir B definitivamente?",
          "No; faltan equivalencia, interfaz y riesgo",
          "Sí, siempre gana el menor coste",
          "Sí, demuestra seguridad",
          "La evaluación económica no sustituye restricciones técnicas."
        ],
        "en": [
          "Does this calculation permit a definitive choice of B?",
          "No; equivalence, interface and risk are missing",
          "Yes, lowest cost always wins",
          "Yes, it demonstrates safety",
          "Economic assessment does not replace technical constraints."
        ]
      },
      {
        "es": [
          "¿Qué mide la mantenibilidad?",
          "Capacidad de restaurar función bajo condiciones de soporte",
          "Días cálidos por año",
          "Emisiones exclusivamente",
          "Es una propiedad distinta de fiabilidad y disponibilidad."
        ],
        "en": [
          "What does maintainability measure?",
          "Ability to restore function under support conditions",
          "Hot days per year",
          "Emissions alone",
          "It differs from reliability and availability."
        ]
      },
      {
        "es": [
          "¿Qué es un desencadenante de revisión útil?",
          "Nueva evidencia o escenario que cruza un criterio definido",
          "Fecha arbitraria sin responsable",
          "Solo un fallo grave ocurrido",
          "Permite revisar de forma anticipada una hipótesis."
        ],
        "en": [
          "What is a useful review trigger?",
          "New evidence or scenario crossing a defined criterion",
          "Arbitrary date without owner",
          "Only a serious failure already occurring",
          "It allows anticipatory review of an assumption."
        ]
      },
      {
        "es": [
          "¿Qué representa una maladaptación?",
          "Reducir un riesgo creando una vulnerabilidad mayor",
          "Documentar un efecto adverso",
          "Pedir revisión de interfaces",
          "Una mejora local puede perjudicar al conjunto."
        ],
        "en": [
          "What represents maladaptation?",
          "Reducing one risk while creating a larger vulnerability",
          "Documenting an adverse effect",
          "Requesting interface review",
          "A local improvement can harm the whole system."
        ]
      },
      {
        "es": [
          "¿Qué afirmación al cliente es defendible?",
          "Beneficio potencial condicionado a validación y límites explícitos",
          "Garantía de longevidad por una prueba aislada",
          "Disponibilidad mejorada por haber terminado el curso",
          "La comunicación debe conservar el alcance de la evidencia."
        ],
        "en": [
          "What customer statement is defensible?",
          "Potential benefit conditional on validation and explicit limits",
          "Guaranteed longevity from an isolated test",
          "Improved availability because the course was completed",
          "Communication must preserve evidence scope."
        ]
      }
    ],
    "refs": [
      3,
      5,
      7,
      9,
      10
    ],
    "objective": {
      "es": "Comparar estrategias de adaptación y definir indicadores, compromisos y revisión de ciclo de vida.",
      "en": "Compare adaptation strategies and define indicators, trade-offs and life-cycle review."
    }
  }
];});
