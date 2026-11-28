(function(root){root.SN_CLIMATE_ACADEMY=[
  {
    "chapters": [
      {
        "title": {
          "es": "1. El cambio climático como problema de diseño",
          "en": "1. Climate change as a design problem"
        },
        "paragraphs": {
          "es": [
            "Una aeronave no se diseña para una temperatura promedio: se diseña para satisfacer funciones dentro de un conjunto de condiciones, configuraciones y estados de uso. La información climática entra en esa definición como una fuente de evidencia ambiental. El problema surge cuando las distribuciones de calor, precipitación, viento o polvo que sustentaron las hipótesis originales dejan de representar el entorno durante la vida del producto. La adaptación no implica que el producto sea hoy inseguro; identifica si su base de diseño podría requerir revisión.",
            "Conviene separar adaptación, mitigación y resiliencia. Reducir emisiones es mitigación; reducir la susceptibilidad de una función al calor es adaptación; mantener o recuperar el servicio ante una perturbación es resiliencia. Una medida puede contribuir a las tres, pero debe justificarse por mecanismos distintos. Por ejemplo, un cambio de refrigeración puede disminuir una vulnerabilidad térmica y aumentar consumo eléctrico: la mejora adaptativa no convierte automáticamente la medida en una mejora climática global."
          ],
          "en": [
            "Aircraft are not designed for an average temperature: they are designed to satisfy functions within a set of conditions, configurations and use states. Climate information enters that definition as environmental evidence. Problems arise when distributions of heat, precipitation, wind or dust underpinning original assumptions cease to represent the environment over product life. Adaptation does not imply that today's product is unsafe; it identifies whether its design basis may need review.",
            "Separate adaptation, mitigation and resilience. Cutting emissions is mitigation; reducing a function's susceptibility to heat is adaptation; maintaining or recovering service during disruption is resilience. One measure may contribute to all three, but different mechanisms must justify each. A cooling change may reduce thermal vulnerability while increasing electricity demand: adaptation does not automatically establish a net climate benefit."
          ]
        }
      },
      {
        "title": {
          "es": "2. Del escenario climático a la exposición real",
          "en": "2. From climate scenario to actual exposure"
        },
        "paragraphs": {
          "es": [
            "Los escenarios SSP de IPCC describen futuros condicionados a trayectorias de emisiones y desarrollo; no son pronósticos meteorológicos ni tienen una probabilidad asignada de forma general. Para estudiar un producto con décadas de vida se comparan varios escenarios, un período histórico coherente y horizontes relevantes. El Atlas interactivo IPCC y Copernicus permiten examinar variables regionales e índices de extremos. Debemos registrar región, período, variable, unidad, resolución y conjunto de modelos. Un máximo diario de una celda de modelo no equivale al máximo interno de un equipo.",
            "La exposición es la coincidencia de la amenaza con una función, durante un estado de uso. Un producto puede estar almacenado, transportado, en mantenimiento o funcionando; cada fase tiene mecanismos diferentes. La frecuencia de excedencia de un umbral ambiental indica qué investigar, no la frecuencia de fallo. Un perfil de vida ambiental combina intensidad, duración, repetición, secuencia y condiciones inducidas por el propio sistema. La incertidumbre surge del futuro de emisiones, variabilidad natural, modelos, resolución y transferencia del entorno al producto; no se resuelve sustituyéndola por un promedio."
          ],
          "en": [
            "IPCC SSP scenarios describe futures conditional on emissions and development pathways; they are not weather forecasts and are not generally assigned a probability. For a product lasting decades, compare several scenarios, a coherent historical period and relevant horizons. The IPCC and Copernicus interactive atlases enable exploration of regional variables and extreme indices. Record region, period, variable, unit, resolution and model ensemble. A daily maximum in a model grid cell is not an equipment internal maximum.",
            "Exposure is the coincidence of a hazard and a function during a use state. A product may be stored, transported, maintained or operating; each phase has different mechanisms. Frequency above an environmental threshold indicates what to investigate, not failure frequency. A life-cycle environmental profile combines intensity, duration, repetition, sequence and system-induced conditions. Uncertainty arises from emissions futures, natural variability, models, resolution and environment-to-product transfer; averaging does not remove it."
          ]
        }
      },
      {
        "title": {
          "es": "3. De la amenaza al riesgo y a la decisión",
          "en": "3. From hazard to risk and decision"
        },
        "paragraphs": {
          "es": [
            "Una cadena de análisis defendible incluye amenaza, exposición, vulnerabilidad, consecuencia y evidencia. Si el peligro es una ola de calor, el elemento expuesto puede ser un conjunto electrónico, la vulnerabilidad una pérdida de margen térmico y la consecuencia una reducción de funcionalidad. El análisis debe demostrar cada vínculo; no saltar del aumento de temperatura global a una afirmación de disponibilidad de producto. También importa si la función dispone de redundancia, recuperación o soporte, sin asumir que estas capacidades existen.",
            "Para priorizar se comparan consecuencias, exposición, incertidumbre y posibilidad de recuperación. Los riesgos compuestos merecen atención: calor y partículas pueden coincidir, o una perturbación puede dañar el producto y su soporte a la vez. Las tendencias regionales no son iguales para todos los fenómenos. El primer producto del análisis es un registro de hipótesis y carencias que indica qué evidencia buscar, quién debería revisarla y cuándo volver a evaluar. El objetivo no es inventar una predicción precisa sino evitar decisiones dependientes de un futuro único."
          ],
          "en": [
            "A defensible analysis chain includes hazard, exposure, vulnerability, consequence and evidence. For a heatwave, the exposed element might be an electronic assembly, vulnerability a loss of thermal margin and consequence reduced functionality. Each link must be established; do not jump from global temperature rise to a product availability claim. Redundancy, recovery and support matter too, without assuming those capacities exist.",
            "Prioritisation compares consequences, exposure, uncertainty and recoverability. Compound risks matter: heat and particles may coincide, or a disruption may affect both product and support. Regional trends are not uniform across phenomena. The first analytical output is an assumptions and gaps register specifying evidence needs, proposed reviewers and review timing. The objective is not to invent a precise prediction but to avoid decisions dependent on a single future."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 01 · Cribado de escenarios",
        "en": "Lab 01 · Scenario screening"
      },
      "brief": {
        "es": "Conjunto ficticio: días por año por encima de un umbral ambiental de estudio. No representa un emplazamiento real ni un límite de operación.",
        "en": "Fictional dataset: days per year above an environmental screening threshold. Not a real location or operating limit."
      },
      "rows": [
        [
          {
            "es": "Días de referencia",
            "en": "Baseline days"
          },
          "12",
          "12",
          "12"
        ],
        [
          {
            "es": "Escenario 2050",
            "en": "2050 scenario"
          },
          "20",
          "28",
          "35"
        ],
        [
          {
            "es": "Registros de uso disponibles",
            "en": "Usage records available"
          },
          "—",
          "—",
          "—"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "¿En cuántos días aumenta la exposición climática potencial en el escenario alto respecto a referencia?",
            "en": "How many additional potential exposure days occur in the high scenario relative to baseline?"
          },
          "kind": "number",
          "answer": 23,
          "feedback": {
            "es": "35 − 12 = 23 días; no es exposición efectiva del equipo.",
            "en": "35 − 12 = 23 days; not actual equipment exposure."
          }
        },
        {
          "prompt": {
            "es": "¿Qué debe hacerse para estimar la exposición efectiva?",
            "en": "What is needed to estimate actual exposure?"
          },
          "kind": "select",
          "answer": 1,
          "feedback": {
            "es": "Cruzar localización, estado y uso con los datos ambientales.",
            "en": "Match location, state and usage with environmental data."
          },
          "options": [
            {
              "es": "Aplicar los 35 días a toda la flota",
              "en": "Apply 35 days to the entire fleet"
            },
            {
              "es": "Cruzar datos de uso y condiciones ambientales",
              "en": "Match usage and environmental conditions"
            },
            {
              "es": "Interpretar los días como fallos",
              "en": "Interpret days as failures"
            }
          ]
        },
        {
          "prompt": {
            "es": "¿Qué representa el rango 20–35?",
            "en": "What does the 20–35 range represent?"
          },
          "kind": "select",
          "answer": 2,
          "feedback": {
            "es": "Es un rango condicionado a escenarios, no un intervalo probabilístico.",
            "en": "It is a scenario-dependent range, not a probability interval."
          },
          "options": [
            {
              "es": "Una probabilidad de fallo",
              "en": "A failure probability"
            },
            {
              "es": "Un requisito aprobado",
              "en": "An approved requirement"
            },
            {
              "es": "Resultados de escenarios ficticios",
              "en": "Fictional scenario results"
            }
          ]
        }
      ],
      "reason": {
        "es": "Construye una cadena amenaza → exposición → vulnerabilidad → consecuencia. Identifica dos datos que faltan y un desencadenante de revisión.",
        "en": "Construct a hazard → exposure → vulnerability → consequence chain. Identify two missing data items and a review trigger."
      },
      "review": {
        "es": "Una respuesta sólida distingue el umbral ambiental de la condición del equipo, identifica función y estado, y propone revisar si cambian los escenarios o registros de exposición.",
        "en": "A strong answer distinguishes the environmental threshold from equipment conditions, identifies function and state, and proposes reviewing revised scenarios or exposure records."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. Por qué el calor exterior no es la temperatura del equipo",
          "en": "1. Why ambient heat is not equipment temperature"
        },
        "paragraphs": {
          "es": [
            "Un producto intercambia energía por conducción a través de sus materiales, convección con el fluido que lo rodea y radiación entre superficies. Su temperatura interna depende también de la potencia que disipa, el estado de funcionamiento, el tiempo de exposición y las condiciones de contorno. Un compartimento expuesto al sol puede encontrarse en un estado térmico distinto del aire exterior; un equipo apagado puede calentarse aunque no genere potencia interna. Por eso no es válido sumar el aumento climático regional directamente a la temperatura interna sin estudiar la transferencia.",
            "El estado estacionario es una simplificación en la que la energía almacenada deja de variar. Los transitorios importan cuando cambia la exposición o el estado del equipo. Una temperatura máxima puede alcanzarse después de un período de acumulación; una duración corta no tiene necesariamente el mismo efecto que una exposición prolongada. Los modelos y ensayos térmicos deben justificar qué estados representan. En aprendizaje se pueden comparar márgenes ficticios, pero un modelo didáctico no describe un conjunto aeronáutico autorizado."
          ],
          "en": [
            "A product exchanges energy through conduction in materials, convection with the surrounding fluid and radiation between surfaces. Internal temperature also depends on dissipated power, operating state, exposure duration and boundary conditions. A sun-exposed compartment can have a different thermal state from ambient air; unpowered equipment can heat despite no internal power generation. Therefore regional warming cannot simply be added to equipment temperature without studying heat transfer.",
            "Steady state is a simplification in which stored energy stops changing. Transients matter when exposure or equipment state changes. A peak temperature may follow a period of accumulation; short exposure does not necessarily have the same effect as sustained exposure. Thermal models and tests must justify represented states. Fictional margins can be compared for learning, but a teaching model does not describe an authorised aerospace assembly."
          ]
        }
      },
      {
        "title": {
          "es": "2. Mecanismos de degradación y fallos funcionales",
          "en": "2. Degradation mechanisms and functional failures"
        },
        "paragraphs": {
          "es": [
            "Los sistemas electrónicos, materiales poliméricos, adhesivos, juntas y baterías no responden del mismo modo al calor. El envejecimiento químico puede depender de la temperatura y del tiempo, mientras que las diferencias de expansión entre materiales pueden producir tensiones durante ciclos térmicos. La pérdida de propiedades de una junta puede aparecer antes de que se pierda una función eléctrica. Separar mecanismo, parámetro observable y consecuencia evita confundir deterioro gradual con fallo inmediato.",
            "Hay que estudiar los márgenes funcionales y la evidencia de durabilidad de forma independiente. Que un equipo siga funcionando durante una prueba corta no demuestra que conserve propiedades tras años de ciclos; y una variación de un parámetro no demuestra una pérdida de seguridad. La relación entre envejecimiento acelerado y servicio depende del mecanismo y requiere justificación. Las extrapolaciones universales de vida útil a partir de una temperatura son inadecuadas sin datos representativos."
          ],
          "en": [
            "Electronic systems, polymers, adhesives, seals and batteries do not respond to heat identically. Chemical ageing can depend on temperature and time, while differential thermal expansion can create stresses during cycles. A seal may lose properties before an electrical function is lost. Separating mechanism, observable parameter and consequence avoids confusing gradual deterioration with immediate failure.",
            "Functional margins and durability evidence must be assessed independently. Equipment continuing to function during a short test does not prove property retention after years of cycling; a parameter change does not prove loss of safety. The relation between accelerated ageing and service depends on the mechanism and needs justification. Universal lifetime extrapolations from temperature are inappropriate without representative data."
          ]
        }
      },
      {
        "title": {
          "es": "3. Adaptar sin desplazar el riesgo",
          "en": "3. Adaptation without shifting risk"
        },
        "paragraphs": {
          "es": [
            "Un estudio de alternativas comienza identificando la función y su requisito, no eligiendo una solución favorita. Las medidas de protección térmica, gestión de calor o arquitectura pueden presentar compromisos de masa, energía, interfaces, mantenibilidad y durabilidad. Una reducción de temperatura estimada no significa por sí sola que la función esté cualificada. Deben compararse alternativas con servicio equivalente, incertidumbre explícita y evidencia adecuada.",
            "El margen es la distancia entre una condición y un criterio, siempre usando magnitudes comparables. Si un límite superior ficticio es 80 °C y un intervalo estimado es 77–83 °C, el margen abarca −3 a +3 °C. Ese intervalo indica una carencia abierta, no una probabilidad de fallo del 50 %. El resultado orienta el trabajo: comprobar modelo, configuración y estados representativos, investigar efectos adversos y someter el cambio a revisión autorizada. No autoriza a cambiar límites de uso."
          ],
          "en": [
            "Option assessment begins with the function and requirement, not a favoured solution. Thermal protection, heat management or architecture measures may involve weight, energy, interface, maintainability and durability trade-offs. An estimated temperature reduction does not by itself qualify the function. Compare options delivering equivalent service, with explicit uncertainty and suitable evidence.",
            "Margin is the distance between a condition and a criterion, using comparable quantities. If a fictional upper limit is 80°C and an estimate ranges from 77–83°C, margin spans −3 to +3°C. That interval indicates an open gap, not a 50% failure probability. It guides work: check model, configuration and representative states, investigate adverse effects and submit changes to authorised review. It does not authorise new operating limits."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 02 · Margen y evidencia térmica",
        "en": "Lab 02 · Thermal margin and evidence"
      },
      "brief": {
        "es": "Un equipo electrónico genérico tiene un criterio interno ficticio de 80 °C. Compara estimaciones, no prestaciones reales.",
        "en": "A generic electronic device has a fictional 80°C internal criterion. Compare estimates, not real performance."
      },
      "rows": [
        [
          {
            "es": "Máximo estimado (°C)",
            "en": "Estimated maximum (°C)"
          },
          "76",
          "79",
          "74"
        ],
        [
          {
            "es": "Incertidumbre (± °C)",
            "en": "Uncertainty (± °C)"
          },
          "2",
          "3",
          "3"
        ],
        [
          {
            "es": "Evidencia de durabilidad",
            "en": "Durability evidence"
          },
          "Parcial / Partial",
          "Ausente / Absent",
          "Ausente / Absent"
        ],
        [
          {
            "es": "Dependencia adicional",
            "en": "Additional dependency"
          },
          "—",
          "—",
          "Energía / Power"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "Calcula el margen mínimo de A (estimación 79 °C).",
            "en": "Calculate A's minimum margin (79°C estimate)."
          },
          "kind": "number",
          "answer": -2,
          "feedback": {
            "es": "80 − (79 + 3) = −2 °C; el intervalo no garantiza margen.",
            "en": "80 − (79 + 3) = −2°C; the interval does not guarantee margin."
          }
        },
        {
          "prompt": {
            "es": "Calcula el margen mínimo de B (estimación 74 °C).",
            "en": "Calculate B's minimum margin (74°C estimate)."
          },
          "kind": "number",
          "answer": 3,
          "feedback": {
            "es": "80 − (74 + 3) = 3 °C; margen positivo estimado, no cualificación.",
            "en": "80 − (74 + 3) = 3°C; estimated positive margin, not qualification."
          }
        },
        {
          "prompt": {
            "es": "¿Qué recomendación soportan los datos?",
            "en": "Which recommendation is supported?"
          },
          "kind": "select",
          "answer": 1,
          "feedback": {
            "es": "B merece investigación, pero requiere verificar dependencias y durabilidad.",
            "en": "B merits investigation, but dependencies and durability need verification."
          },
          "options": [
            {
              "es": "Aprobación inmediata de B",
              "en": "Immediate approval of B"
            },
            {
              "es": "Investigar B, comprobar interfaces y evidencia",
              "en": "Investigate B, check interfaces and evidence"
            },
            {
              "es": "Declarar fallida A en servicio",
              "en": "Declare A failed in service"
            }
          ]
        }
      ],
      "reason": {
        "es": "Redacta una recomendación que distinga margen, durabilidad y consumo. Indica qué ensayo o análisis pedirías y qué no puedes afirmar.",
        "en": "Write a recommendation distinguishing margin, durability and energy demand. State what evidence you would request and what cannot be claimed."
      },
      "review": {
        "es": "Debe incluir ambos márgenes, la incertidumbre, la dependencia de B y la necesidad de evidencia representativa, sin declarar aptitud.",
        "en": "Include both margins, uncertainty, B's dependency and the need for representative evidence, without claiming suitability."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. Qué es la densidad y por qué cambia",
          "en": "1. What density is and why it changes"
        },
        "paragraphs": {
          "es": [
            "La densidad es masa por unidad de volumen. En aire seco ideal se relaciona con presión absoluta y temperatura absoluta: ρ = p/(R·T). El uso de kelvin es imprescindible; una temperatura de 20 °C no es 20 K. A presión constante, el aumento de temperatura reduce la densidad. A temperatura constante, una presión menor reduce la densidad. El aire húmedo tiene menor densidad que el seco a igual temperatura y presión porque cambia la composición de la mezcla. La altitud de densidad expresa esa densidad mediante una atmósfera de referencia; no equivale necesariamente a la elevación geográfica.",
            "Un cambio climático regional en temperatura modifica uno de los factores que intervienen, pero no determina por sí solo toda la distribución de densidad. Hay que estudiar también presión, humedad, estacionalidad y condiciones de referencia. La comparación física es útil para reconocer una posible brecha ambiental; no permite calcular la aptitud de una plataforma ni cambiar sus límites. Las fuentes de FAA y EUROCONTROL explican este vínculo en aviación civil; aquí se estudia como principio físico general."
          ],
          "en": [
            "Density is mass per unit volume. For ideal dry air it relates to absolute pressure and temperature: ρ = p/(R·T). Kelvin is essential; 20°C is not 20 K. At constant pressure, increasing temperature reduces density. At constant temperature, lower pressure reduces density. Humid air is less dense than dry air at equal temperature and pressure because mixture composition changes. Density altitude expresses that density in a reference atmosphere; it is not necessarily geographic elevation.",
            "A regional climate temperature change modifies one factor but does not determine the entire density distribution. Pressure, humidity, seasonality and reference conditions matter too. Physical comparison helps recognise a possible environmental gap; it cannot establish platform suitability or change limits. FAA and EUROCONTROL sources explain this relationship in civil aviation; here it is studied as general physics."
          ]
        }
      },
      {
        "title": {
          "es": "2. Relación con la función aeronáutica",
          "en": "2. Relationship with aeronautical function"
        },
        "paragraphs": {
          "es": [
            "La sustentación aerodinámica depende de la densidad, la velocidad relativa del aire, la geometría y el coeficiente aerodinámico. La ecuación general permite entender por qué la densidad interviene en la función, pero los parámetros no son independientes en un sistema real. La propulsión y los sistemas que intercambian calor con el aire también responden a propiedades del flujo. Su comportamiento depende de tecnología, arquitectura, control y condiciones de funcionamiento. El mismo cambio de densidad no implica el mismo cambio de prestaciones en todos los sistemas.",
            "Los efectos en prestaciones pueden traducirse en cambios de capacidad o disponibilidad de servicio, siempre que se demuestre la cadena completa. Distinguir el efecto físico, el margen de un requisito y el resultado de negocio impide afirmar que una reducción de densidad del 6 % implique una reducción del 6 % en capacidad. Las prestaciones reales se establecen mediante datos y procedimientos aprobados. La aplicación no debe ofrecer recomendaciones de uso de aeronaves ni extrapolaciones de modelos fuera de su dominio."
          ],
          "en": [
            "Aerodynamic lift depends on density, relative air speed, geometry and aerodynamic coefficient. The general equation explains why density matters, but parameters are not independent in a real system. Propulsion and air heat-exchange systems also respond to flow properties. Behaviour depends on technology, architecture, control and operating conditions. The same density change does not imply identical performance change in all systems.",
            "Performance effects can translate into service capability or availability changes only when the entire chain is established. Distinguish physical effect, requirement margin and business outcome to avoid claiming that a 6% density reduction means a 6% capability reduction. Actual performance is established through approved data and procedures. This application must not offer aircraft use recommendations or extrapolate models beyond their domain."
          ]
        }
      },
      {
        "title": {
          "es": "3. Interpretar resultados y revisar la evidencia",
          "en": "3. Interpret results and review evidence"
        },
        "paragraphs": {
          "es": [
            "Un modelo puede estar validado para un conjunto de condiciones ambientales y configuraciones. Cuando una condición futura queda fuera de ese dominio, hay una pregunta sobre representatividad de la evidencia. No equivale a una demostración de incumplimiento. El registro debe identificar el fenómeno, función afectada, variable ambiental, alcance del modelo o ensayo y responsable de la evaluación. Si hay información insuficiente, se registra como brecha abierta, no se rellena con una estimación arbitraria.",
            "Para decidir qué revisar, conviene separar la física conocida de las hipótesis específicas y de las consecuencias aún no cuantificadas. En un cálculo general de aire seco, puede compararse la densidad relativa entre dos temperaturas a igual presión; si cambian simultáneamente la presión y la humedad, deben declararse nuevas condiciones. El resultado es un aprendizaje de sensibilidad y no una calculadora de prestaciones aeronáuticas."
          ],
          "en": [
            "A model may be validated for a set of environmental conditions and configurations. When a future condition lies outside that domain, evidence representativeness is in question. This is not proof of non-compliance. The register should identify the phenomenon, affected function, environmental variable, scope of model or test and assessment owner. Insufficient information remains an open gap rather than an arbitrary estimate.",
            "Separate known physics from specific assumptions and unquantified consequences when deciding what to review. In a general dry-air calculation, relative density can be compared between temperatures at equal pressure; if pressure and humidity also change, new conditions must be declared. The result teaches sensitivity rather than acting as an aircraft performance calculator."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 03 · Sensibilidad de la densidad",
        "en": "Lab 03 · Density sensitivity"
      },
      "brief": {
        "es": "Compara dos estados idealizados de aire seco a igual presión. No se calcula ninguna prestación aeronáutica.",
        "en": "Compare two idealised dry-air states at equal pressure. No aircraft performance is calculated."
      },
      "rows": [
        [
          {
            "es": "Temperatura absoluta (K)",
            "en": "Absolute temperature (K)"
          },
          "293",
          "313",
          "313"
        ],
        [
          {
            "es": "Presión relativa",
            "en": "Relative pressure"
          },
          "1,00",
          "1,00",
          "0,95"
        ],
        [
          {
            "es": "Modelo específico de producto",
            "en": "Product-specific model"
          },
          "—",
          "—",
          "—"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "¿Cuánto disminuye la densidad en A respecto a referencia, en %? (Un decimal)",
            "en": "How much does density decrease in A relative to baseline, in %? (One decimal)"
          },
          "kind": "number",
          "answer": 6.4,
          "feedback": {
            "es": "100 × (1 − 293/313) ≈ 6,4 %. Es una propiedad física.",
            "en": "100 × (1 − 293/313) ≈ 6.4%. It is a physical property."
          }
        },
        {
          "prompt": {
            "es": "¿Cuánto disminuye en B, en %? (Un decimal)",
            "en": "How much does it decrease in B, in %? (One decimal)"
          },
          "kind": "number",
          "answer": 11.1,
          "feedback": {
            "es": "100 × (1 − 0,95 × 293/313) ≈ 11,1 %.",
            "en": "100 × (1 − 0.95 × 293/313) ≈ 11.1%."
          }
        },
        {
          "prompt": {
            "es": "¿Qué conclusión está respaldada?",
            "en": "Which conclusion is supported?"
          },
          "kind": "select",
          "answer": 0,
          "feedback": {
            "es": "Se identifica un cambio ambiental; hay que revisar la evidencia específica.",
            "en": "An environmental change is identified; specific evidence must be reviewed."
          },
          "options": [
            {
              "es": "Cambió una propiedad ambiental relevante",
              "en": "A relevant environmental property changed"
            },
            {
              "es": "Se conoce la reducción de capacidad del producto",
              "en": "Product capability reduction is known"
            },
            {
              "es": "El requisito queda automáticamente validado",
              "en": "The requirement is automatically validated"
            }
          ]
        }
      ],
      "reason": {
        "es": "Explica qué funciones podrían necesitar revisión, qué información necesitaría Ingeniería y por qué no es válido extrapolar el porcentaje a prestaciones.",
        "en": "Explain which functions may need review, what Engineering needs and why extrapolating the percentage to performance is invalid."
      },
      "review": {
        "es": "Relaciona densidad con fenómenos dependientes del aire y distingue variable ambiental, modelo específico, requisito y resultado de negocio.",
        "en": "Link density to air-dependent phenomena and distinguish environmental variable, specific model, requirement and business outcome."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. De la climatología del polvo al contacto con el producto",
          "en": "1. From dust climatology to product contact"
        },
        "paragraphs": {
          "es": [
            "Los episodios de polvo y arena dependen de condiciones de suelo, humedad, cobertura vegetal, viento y transporte atmosférico. El cambio climático puede modificar estos factores, pero no existe una tendencia uniforme para todas las regiones. Un mapa de sequía no permite inferir directamente concentración de partículas sobre un equipo. El perfil ambiental debe distinguir exposición durante almacenamiento, transporte y uso, además de la frecuencia, duración y naturaleza de las partículas.",
            "La concentración másica es solo una parte de la caracterización. Tamaño, forma, dureza, composición y humedad determinan cómo una partícula interacciona con una superficie o un mecanismo. La distribución de tamaños cambia la capacidad de penetración, deposición y desgaste. Un ensayo que solo coincide en concentración no es necesariamente comparable si difieren partículas o condiciones de contacto. Para un análisis de brechas, debe registrarse qué perfil de partículas representa la evidencia existente."
          ],
          "en": [
            "Dust and sand events depend on soil, moisture, vegetation cover, wind and atmospheric transport. Climate change can modify these factors, but trends are not uniform across regions. A drought map does not directly yield particle concentration on equipment. Environmental profiles must distinguish storage, transport and use exposure, along with particle frequency, duration and nature.",
            "Mass concentration is only one characteristic. Size, shape, hardness, composition and moisture determine how particles interact with a surface or mechanism. Size distribution changes penetration, deposition and wear behaviour. A test matching concentration alone is not necessarily comparable when particles or contact conditions differ. Gap assessment must record which particle profile existing evidence represents."
          ]
        }
      },
      {
        "title": {
          "es": "2. Cuatro mecanismos que no deben confundirse",
          "en": "2. Four mechanisms that must not be confused"
        },
        "paragraphs": {
          "es": [
            "La erosión implica pérdida de material por impacto repetido; la abrasión implica desgaste por contacto o movimiento relativo con partículas. La deposición consiste en acumulación superficial, mientras que la obstrucción restringe un paso de flujo o un elemento filtrante. Pueden ocurrir simultáneamente y producir resultados distintos. Un cambio óptico causado por deposición puede ser reversible mediante una intervención autorizada; la pérdida de espesor por erosión no se recupera simplemente retirando el polvo.",
            "Un estudio de producto debe relacionar cada mecanismo con un indicador y una función. El estado superficial, la pérdida de espesor, la transmisión óptica, la contaminación o la pérdida de carga son ejemplos de indicadores diferentes. La reducción de desgaste medida en un cupón no demuestra automáticamente protección de todo un conjunto. Las interfaces, geometría, estados de uso y posibles interacciones con humedad o calor pueden modificar el resultado. El objetivo es entender qué evidencia falta y no generar una tasa real de desgaste."
          ],
          "en": [
            "Erosion involves material loss through repeated impact; abrasion involves wear through contact or relative motion with particles. Deposition is surface accumulation, while blockage restricts a flow path or filter. They may coexist and yield different outcomes. An optical change from deposition may be reversible through authorised intervention; thickness loss from erosion is not restored simply by removing dust.",
            "Product assessment should link each mechanism to an indicator and function. Surface condition, thickness loss, optical transmission, contamination or pressure drop are examples of different indicators. Reduced wear measured on a coupon does not automatically prove protection of an entire assembly. Interfaces, geometry, use states and interactions with humidity or heat can change results. The objective is to understand evidence gaps rather than generate actual wear rates."
          ]
        }
      },
      {
        "title": {
          "es": "3. Evaluar protección y mantenibilidad",
          "en": "3. Assess protection and maintainability"
        },
        "paragraphs": {
          "es": [
            "Una alternativa puede mejorar un indicador y empeorar otro. Una protección superficial puede dificultar inspección, reparación o retirada de material; un elemento filtrante puede introducir una dependencia de mantenimiento y una restricción de flujo. Se debe comparar la misma función, comprobar compatibilidad y valorar la durabilidad de la alternativa. Si el mecanismo cambia con el tiempo, una prueba corta no permite extrapolar linealmente la vida útil.",
            "En una revisión, la comparación de cupones bajo las mismas condiciones sirve para cuantificar una diferencia experimental acotada. Para trasladarla a un producto se requieren evidencias de representatividad, comportamiento de interfaces, mantenimiento y condiciones acumuladas. La estrategia debe conservar explícitamente los resultados desfavorables, los datos ausentes y los riesgos residuales; no convertir una reducción de pérdida de espesor en una garantía de vida o disponibilidad."
          ],
          "en": [
            "An option may improve one indicator and worsen another. Surface protection may complicate inspection, repair or material removal; a filter may introduce maintenance dependency and restrict flow. Compare equivalent functions, check compatibility and assess option durability. If mechanisms change over time, a short test does not permit linear lifetime extrapolation.",
            "In review, comparing coupons under identical conditions quantifies a bounded experimental difference. Transferring it to a product requires representativeness, interface behaviour, maintenance and cumulative-condition evidence. Preserve adverse results, missing data and residual risks explicitly; do not turn reduced thickness loss into a guarantee of life or availability."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 04 · Comparabilidad de ensayos",
        "en": "Lab 04 · Test comparability"
      },
      "brief": {
        "es": "Cupones ficticios, no componentes reales. A y B usan el mismo ensayo; C utiliza un perfil de partículas distinto.",
        "en": "Fictional coupons, not actual components. A and B share the same test; C uses a different particle profile."
      },
      "rows": [
        [
          {
            "es": "Pérdida de espesor (mm)",
            "en": "Thickness loss (mm)"
          },
          "0,30",
          "0,18",
          "0,10"
        ],
        [
          {
            "es": "Perfil de partículas",
            "en": "Particle profile"
          },
          "P1",
          "P1",
          "P2"
        ],
        [
          {
            "es": "Reparabilidad verificada",
            "en": "Repairability verified"
          },
          "—",
          "No",
          "No"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "¿Qué reducción relativa de pérdida presenta B frente a A, en %?",
            "en": "What relative reduction in loss does B show against A, in %?"
          },
          "kind": "number",
          "answer": 40,
          "feedback": {
            "es": "(0,30 − 0,18)/0,30 × 100 = 40 %.",
            "en": "(0.30 − 0.18)/0.30 × 100 = 40%."
          }
        },
        {
          "prompt": {
            "es": "¿Puede clasificarse C como mejor protección con estos datos?",
            "en": "Can C be ranked as the better protection using these data?"
          },
          "kind": "select",
          "answer": 1,
          "feedback": {
            "es": "C no comparte perfil; hace falta una comparación representativa.",
            "en": "C has a different profile; representative comparison is needed."
          },
          "options": [
            {
              "es": "Sí, menor pérdida absoluta",
              "en": "Yes, lower absolute loss"
            },
            {
              "es": "No, perfiles no comparables",
              "en": "No, non-comparable profiles"
            },
            {
              "es": "Sí, demuestra mayor vida útil",
              "en": "Yes, it proves longer life"
            }
          ]
        },
        {
          "prompt": {
            "es": "¿Qué indicador adicional aborda la reparabilidad?",
            "en": "Which additional evidence addresses repairability?"
          },
          "kind": "select",
          "answer": 2,
          "feedback": {
            "es": "La capacidad de inspección y reparación debe estudiarse por separado.",
            "en": "Inspection and repair capability must be studied separately."
          },
          "options": [
            {
              "es": "Frecuencia de días cálidos",
              "en": "Frequency of hot days"
            },
            {
              "es": "Precio del cupón únicamente",
              "en": "Coupon price alone"
            },
            {
              "es": "Evidencia de reparación e interfaces",
              "en": "Repair and interface evidence"
            }
          ]
        }
      ],
      "reason": {
        "es": "Redacta la conclusión del ensayo, los límites y dos verificaciones posteriores. Distingue erosión, deposición y obstrucción.",
        "en": "Write the test conclusion, boundaries and two follow-up checks. Distinguish erosion, deposition and blockage."
      },
      "review": {
        "es": "La comparación válida es A/B y se limita al ensayo; C requiere condiciones equivalentes. La reparación y exposición acumulada permanecen abiertas.",
        "en": "A/B is the valid comparison and is bounded to the test; C needs equivalent conditions. Repair and cumulative exposure remain open."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. Una tormenta no es una única carga ambiental",
          "en": "1. A storm is not one environmental load"
        },
        "paragraphs": {
          "es": [
            "Los fenómenos convectivos pueden combinar precipitaciones intensas, granizo, actividad eléctrica y cambios de viento. La turbulencia en aire claro y la formación de hielo tienen mecanismos diferentes y no deben tratarse como sinónimos de tormenta. Los estudios de clima distinguen qué variables se proyectan con mayor o menor confianza. Una tendencia de lluvia intensa no determina automáticamente la frecuencia de todos los fenómenos asociados. El análisis debe separar cada amenaza y su exposición.",
            "Desde la perspectiva de producto, el granizo puede provocar impactos mecánicos, el agua puede afectar estanqueidad e interfaces, la humedad puede contribuir a degradación y los fenómenos eléctricos requieren evidencias específicas. Una prueba mecánica favorable no valida una respuesta eléctrica ni una protección contra entrada de agua. Los criterios técnicos dependen de función, configuración y base aplicable; no se fijan mediante una descripción meteorológica genérica."
          ],
          "en": [
            "Convective phenomena can combine heavy precipitation, hail, electrical activity and wind changes. Clear-air turbulence and icing have different mechanisms and are not synonyms for storms. Climate assessments distinguish variables with greater or lower projection confidence. A heavy-rain trend does not automatically determine frequency of all associated phenomena. Analysis must separate each hazard and exposure.",
            "From a product perspective, hail can produce mechanical impacts, water can affect sealing and interfaces, moisture can contribute to degradation and electrical phenomena require specific evidence. A favourable mechanical test does not validate electrical response or water-ingress protection. Technical criteria depend on function, configuration and applicable basis; they cannot be set using generic meteorological descriptions."
          ]
        }
      },
      {
        "title": {
          "es": "2. Efectos combinados, secuencias y dependencias",
          "en": "2. Combined effects, sequences and dependencies"
        },
        "paragraphs": {
          "es": [
            "Las condiciones no siempre actúan de forma independiente. Una exposición puede alterar el estado de un elemento y modificar su respuesta a una exposición posterior. El agua puede entrar por una interfaz previamente degradada; la humedad repetida puede contribuir a deterioro acumulado. La exposición simultánea o secuencial debe analizarse cuando exista un mecanismo plausible. No es suficiente sumar puntuaciones de riesgos ni asumir que cada prueba aislada representa la combinación.",
            "Una perturbación puede afectar simultáneamente a un producto y al servicio que permite inspeccionarlo o recuperarlo. Distingue la capacidad del producto, la disponibilidad del soporte y la consecuencia para el cliente. Cuando existe una dependencia común, dos capacidades aparentemente separadas pueden verse afectadas a la vez. La evaluación requiere documentar dependencias y límites de la evidencia, sin diseñar procedimientos operativos fuera de los procesos autorizados."
          ],
          "en": [
            "Conditions do not always act independently. An exposure can change an element's state and modify its response to subsequent exposure. Water can enter via a previously degraded interface; repeated moisture can contribute to cumulative deterioration. Simultaneous or sequential exposure should be assessed when a plausible mechanism exists. Adding risk scores or assuming isolated tests represent a combination is insufficient.",
            "A disruption may affect both a product and the service enabling inspection or recovery. Distinguish product capability, support availability and customer consequence. Where common dependencies exist, two apparently separate capacities may be affected together. Assessment requires documenting dependencies and evidence boundaries, without designing operational procedures outside authorised processes."
          ]
        }
      },
      {
        "title": {
          "es": "3. Priorizar una carencia crítica",
          "en": "3. Prioritise a critical gap"
        },
        "paragraphs": {
          "es": [
            "La cobertura documental es una medida de estado de evidencia, no una medida de seguridad ni una probabilidad de éxito. Si diez condiciones están verificadas y dos carecen de evidencia, la prioridad depende de las consecuencias y requisitos afectados, no solo del porcentaje. Una condición crítica abierta no queda compensada por un gran número de condiciones no críticas cubiertas. Los resultados parciales deben permanecer identificados.",
            "Una decisión responsable puede consistir en solicitar un estudio de mecanismos, revisar la aplicabilidad de pruebas y escalar una carencia crítica al responsable correspondiente. La conclusión debe dejar claro qué se sabe, qué falta y quién tiene autoridad para cerrar la brecha. Las medidas de adaptación se evalúan por su capacidad de preservar funciones bajo condiciones representativas, sin afirmar que permiten operar durante situaciones fuera de límites aprobados."
          ],
          "en": [
            "Documentary coverage measures evidence status, not safety or success probability. If ten conditions are verified and two lack evidence, priority depends on consequences and affected requirements, not only the percentage. An open critical condition is not offset by numerous covered non-critical conditions. Partial results must remain identified.",
            "A responsible decision may request mechanism study, review test applicability and escalate a critical gap to the appropriate owner. The conclusion must state what is known, what is missing and who can close the gap. Adaptation measures are evaluated for preserving functions under representative conditions, without claiming operation beyond approved limits."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 05 · Evidencia combinada",
        "en": "Lab 05 · Combined evidence"
      },
      "brief": {
        "es": "Registro ficticio de condiciones. Identifica evidencia suficiente y prioriza sin convertir cobertura documental en seguridad.",
        "en": "Fictional conditions register. Identify sufficient evidence and prioritise without converting coverage into safety."
      },
      "rows": [
        [
          {
            "es": "Condiciones con evidencia completa",
            "en": "Conditions with complete evidence"
          },
          "8",
          "8",
          "8"
        ],
        [
          {
            "es": "Condiciones con evidencia parcial",
            "en": "Conditions with partial evidence"
          },
          "2",
          "2",
          "2"
        ],
        [
          {
            "es": "Condiciones sin evidencia",
            "en": "Conditions without evidence"
          },
          "2",
          "2",
          "2"
        ],
        [
          {
            "es": "Brecha crítica combinada",
            "en": "Critical combined gap"
          },
          "1",
          "1",
          "1"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "¿Qué porcentaje tiene evidencia completa? (Un decimal)",
            "en": "What percentage has complete evidence? (One decimal)"
          },
          "kind": "number",
          "answer": 66.7,
          "feedback": {
            "es": "8/12 × 100 ≈ 66,7 %. No es un índice de seguridad.",
            "en": "8/12 × 100 ≈ 66.7%. Not a safety index."
          }
        },
        {
          "prompt": {
            "es": "Si se completan 3 de las 4 brechas, ¿cuál sería la cobertura documental?",
            "en": "If 3 of the 4 gaps are closed, what would documentary coverage be?"
          },
          "kind": "number",
          "answer": 91.7,
          "feedback": {
            "es": "11/12 × 100 ≈ 91,7 %. La carencia restante debe conservar su criticidad.",
            "en": "11/12 × 100 ≈ 91.7%. The remaining gap retains its criticality."
          }
        },
        {
          "prompt": {
            "es": "Si la carencia restante es crítica, ¿qué procede?",
            "en": "If the remaining gap is critical, what is appropriate?"
          },
          "kind": "select",
          "answer": 1,
          "feedback": {
            "es": "Escalar y solicitar evidencia; el promedio no permite cerrar.",
            "en": "Escalate and request evidence; an average does not allow closure."
          },
          "options": [
            {
              "es": "Cerrar por cobertura superior al 90 %",
              "en": "Close because coverage exceeds 90%"
            },
            {
              "es": "Mantener abierta y escalar",
              "en": "Keep open and escalate"
            },
            {
              "es": "Reclasificarla sin evidencia",
              "en": "Reclassify without evidence"
            }
          ]
        }
      ],
      "reason": {
        "es": "Diferencia fenómeno individual y combinación. Justifica prioridad y evidencia necesaria para cerrar la carencia.",
        "en": "Distinguish individual phenomenon and combination. Justify priority and evidence needed for closure."
      },
      "review": {
        "es": "Debe conservarse la carencia crítica, explicar por qué los ensayos individuales no prueban la combinación y asignar revisión autorizada.",
        "en": "Retain the critical gap, explain why individual tests do not prove combined behaviour and assign authorised review."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. Construir una referencia trazable",
          "en": "1. Build a traceable baseline"
        },
        "paragraphs": {
          "es": [
            "El análisis de brechas comienza con una referencia explícita: función, configuración, estado de uso, requisito, perfil ambiental y evidencia disponible. Una referencia incompleta produce falsos resultados. Por ejemplo, comparar temperatura exterior de un escenario futuro con un límite interno de equipo mezcla magnitudes distintas; comparar una prueba de otra configuración sin evaluar interfaces mezcla alcances distintos. La primera tarea es validar que la comparación tiene sentido.",
            "Cada brecha debe distinguir falta de conocimiento, falta de cobertura de evidencia y posible incumplimiento de un criterio. La ausencia de un ensayo no demuestra un fallo; una estimación adversa no constituye por sí sola una conclusión aprobada. Registrar estos estados por separado evita que un informe exagere o oculte riesgos. El expediente puede incluir una fuente climática, una hipótesis de exposición y una evidencia de producto con versiones y responsables; ninguna se sustituye por una mera etiqueta."
          ],
          "en": [
            "Gap analysis starts with an explicit baseline: function, configuration, use state, requirement, environmental profile and available evidence. An incomplete baseline produces false results. Comparing future outdoor temperature with an internal equipment limit mixes quantities; comparing a test of another configuration without assessing interfaces mixes scopes. First establish whether the comparison is meaningful.",
            "Each gap must distinguish lack of knowledge, missing evidence coverage and possible criterion non-compliance. Absence of a test does not prove failure; an adverse estimate is not itself an approved conclusion. Recording states separately avoids overstating or hiding risk. A dossier may include a climate source, exposure assumption and product evidence with versions and owners; none can be replaced with a label."
          ]
        }
      },
      {
        "title": {
          "es": "2. Márgenes, incertidumbre y criticidad",
          "en": "2. Margins, uncertainty and criticality"
        },
        "paragraphs": {
          "es": [
            "Para un criterio superior, se calcula un margen restando la demanda al criterio. Si la demanda se expresa como intervalo, el margen también es un intervalo. Un valor positivo en un extremo no garantiza un resultado positivo en el otro. Si el intervalo cruza cero, se requiere mejor evidencia o una decisión robusta que contemple ambos resultados. La incertidumbre no debe mezclarse con tolerancia de un criterio, y no debe tratarse como probabilidad sin fundamento estadístico.",
            "La prioridad de la brecha depende de la consecuencia sobre la función, de la exposición, la recuperación y la confianza en la evidencia. La criticidad es específica de los requisitos y no se decide por intuición en una herramienta formativa. Una carencia crítica abierta se identifica y escala. Un registro de riesgos cualitativo ayuda a ordenar el trabajo; no sustituye un análisis de seguridad, ni puede otorgar por sí solo aprobación o conformidad."
          ],
          "en": [
            "For an upper criterion, margin is criterion minus demand. If demand is an interval, margin is an interval too. A positive value at one end does not guarantee a positive result at the other. If it crosses zero, better evidence or a robust decision considering both outcomes is needed. Uncertainty must not be confused with criterion tolerance or treated as probability without statistical basis.",
            "Gap priority depends on functional consequence, exposure, recovery and confidence in evidence. Criticality is requirement-specific and is not decided by intuition in a learning tool. An open critical gap is identified and escalated. A qualitative risk register organises work; it does not replace safety analysis or establish approval or conformity."
          ]
        }
      },
      {
        "title": {
          "es": "3. Convertir el análisis en un registro accionable",
          "en": "3. Turn analysis into an actionable register"
        },
        "paragraphs": {
          "es": [
            "Un registro útil enlaza escenario y fuente, función y configuración, requisito e identificador, condición futura, margen o mecanismo, evidencia y estado, acción propuesta, responsable, criterio de cierre y fecha de revisión. Esto permite localizar qué cambia cuando aparece nueva información. NASA describe la trazabilidad bidireccional entre expectativas, requisitos, documentos de diseño y planes de prueba; ese principio es pertinente como referencia de ingeniería general, no como procedimiento corporativo de Airbus.",
            "La decisión de cierre debe exigir evidencia representativa y revisión autorizada. Una opción puede estar estudiada, propuesta, verificada en un ámbito limitado o aprobada; esos estados no son intercambiables. La actualización futura de escenarios, de configuración o de evidencia puede reabrir una brecha. El registro no debe ocultar alternativas rechazadas ni efectos adversos, porque ambos forman parte de una decisión defendible."
          ],
          "en": [
            "A useful register links scenario and source, function and configuration, requirement and identifier, future condition, margin or mechanism, evidence and status, proposed action, owner, closure criterion and review date. This identifies what changes when new information appears. NASA describes bidirectional traceability between expectations, requirements, design documents and test plans; the principle is relevant general engineering reference, not an Airbus corporate procedure.",
            "Closure requires representative evidence and authorised review. An option can be studied, proposed, verified within a limited scope or approved; these states are not interchangeable. Future scenario, configuration or evidence updates may reopen a gap. The register must not hide rejected options or adverse effects because both belong to a defensible decision."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 06 · Registro de brechas",
        "en": "Lab 06 · Gap register"
      },
      "brief": {
        "es": "Tres requisitos ficticios. Se dispone de información limitada y ninguna autorización de cambio.",
        "en": "Three fictional requirements. Limited information is available and no change is authorised."
      },
      "rows": [
        [
          {
            "es": "R-01 · demanda interna (°C)",
            "en": "R-01 · internal demand (°C)"
          },
          "80 límite/limit",
          "78 mín/min",
          "83 máx/max"
        ],
        [
          {
            "es": "R-02 · evidencia",
            "en": "R-02 · evidence"
          },
          "Completa / Complete",
          "—",
          "—"
        ],
        [
          {
            "es": "R-03 · función crítica",
            "en": "R-03 · critical function"
          },
          "Ausente / Absent",
          "—",
          "—"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "Margen mínimo de R-01, en °C.",
            "en": "Minimum margin of R-01, in °C."
          },
          "kind": "number",
          "answer": -3,
          "feedback": {
            "es": "80 − 83 = −3 °C.",
            "en": "80 − 83 = −3°C."
          }
        },
        {
          "prompt": {
            "es": "Margen máximo de R-01, en °C.",
            "en": "Maximum margin of R-01, in °C."
          },
          "kind": "number",
          "answer": 2,
          "feedback": {
            "es": "80 − 78 = +2 °C; intervalo cruza cero.",
            "en": "80 − 78 = +2°C; interval crosses zero."
          }
        },
        {
          "prompt": {
            "es": "¿Qué estado asignar a R-01?",
            "en": "What status should R-01 have?"
          },
          "kind": "select",
          "answer": 2,
          "feedback": {
            "es": "Indeterminado, evidencia incompleta; requiere revisión.",
            "en": "Indeterminate, incomplete evidence; review required."
          },
          "options": [
            {
              "es": "Cumple definitivamente",
              "en": "Definitely compliant"
            },
            {
              "es": "Fallo en servicio demostrado",
              "en": "Proven in-service failure"
            },
            {
              "es": "Abierta, resultado indeterminado",
              "en": "Open, indeterminate result"
            }
          ]
        },
        {
          "prompt": {
            "es": "¿Qué carencia debe escalarse por criticidad?",
            "en": "Which gap should be escalated due to criticality?"
          },
          "kind": "select",
          "answer": 1,
          "feedback": {
            "es": "R-03 carece de evidencia en una función crítica.",
            "en": "R-03 lacks evidence for a critical function."
          },
          "options": [
            {
              "es": "R-02",
              "en": "R-02"
            },
            {
              "es": "R-03",
              "en": "R-03"
            },
            {
              "es": "Ninguna",
              "en": "None"
            }
          ]
        }
      ],
      "reason": {
        "es": "Redacta dos filas del registro (R-01 y R-03) con estado, acción, responsable, evidencia de cierre y desencadenante de revisión.",
        "en": "Write two register rows (R-01 and R-03) with status, action, owner, closure evidence and review trigger."
      },
      "review": {
        "es": "R-01 tiene intervalo −3/+2 y no permite cierre. R-03 debe escalarse. Ambos necesitan evidencia específica y revisión autorizada.",
        "en": "R-01 spans −3/+2 and cannot be closed. R-03 must be escalated. Both need specific evidence and authorised review."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. Qué significa revisar un manual de diseño",
          "en": "1. What reviewing a design manual means"
        },
        "paragraphs": {
          "es": [
            "Las expectativas de una función se traducen en requisitos verificables que se asignan a sistemas, componentes e interfaces. Un manual de diseño puede documentar criterios o métodos, pero tiene una función distinta de un requisito contractual, una especificación de producto o una instrucción de operación. Para proponer una actualización climática se identifica primero qué hipótesis ambiental deja de representar la necesidad, qué requisito deriva de ella y qué documentación o evidencia se ve afectada.",
            "Un requisito bien formado tiene alcance, condición y criterio verificable. Una expresión como 'resistente al calor' no indica qué función debe mantenerse ni cómo demostrarlo. En aprendizaje se pueden usar identificadores ficticios y describir el criterio pendiente de establecer, sin inventar una especificación de plataforma. La revisión de diseño exige examinar interfaces y configuración; publicar un nuevo perfil ambiental no equivale a autorizar un nuevo límite."
          ],
          "en": [
            "Functional expectations become verifiable requirements allocated to systems, components and interfaces. A design manual can document criteria or methods, but has a different role from a contractual requirement, product specification or operating instruction. To propose a climate update, first identify which environmental assumption no longer represents the need, which requirement derives from it and which documents or evidence are affected.",
            "A well-formed requirement has scope, condition and verifiable criterion. 'Heat resistant' does not state which function must be preserved or how to demonstrate it. Learning can use fictional identifiers and describe a criterion to be established, without inventing a platform specification. Design review requires interfaces and configuration to be assessed; publishing a new environmental profile does not authorise a new limit."
          ]
        }
      },
      {
        "title": {
          "es": "2. Ingeniería ambiental, verificación y validación",
          "en": "2. Environmental engineering, verification and validation"
        },
        "paragraphs": {
          "es": [
            "MIL-STD-810 describe un proceso de adaptación de criterios y ensayos al entorno previsto durante el ciclo de vida. No establece una lista universal de pruebas que cualifique cualquier producto. El perfil de exposición, el requisito funcional y el mecanismo investigado justifican la selección de condiciones y métodos. La aplicabilidad de una norma, edición y método debe establecerse dentro de la base autorizada; citar la norma no demuestra cumplimiento.",
            "La verificación comprueba requisitos especificados mediante análisis, ensayo, inspección o demostración, según corresponda. La validación examina si el producto o los requisitos responden a la necesidad prevista en su contexto. Una prueba satisfactoria puede verificar un criterio de una configuración, pero no valida automáticamente la función de un conjunto diferente. Deben conservarse identificación de configuración, resultados, desviaciones, incertidumbre y alcance. El método de evidencia debe responder al mecanismo y a la necesidad."
          ],
          "en": [
            "MIL-STD-810 describes a process of tailoring criteria and tests to the intended life-cycle environment. It does not establish a universal list of tests qualifying any product. Exposure profile, functional requirement and investigated mechanism justify selected conditions and methods. Applicability of a standard, revision and method must be established under the authorised basis; citing a standard does not prove compliance.",
            "Verification checks specified requirements through analysis, test, inspection or demonstration, as appropriate. Validation assesses whether the product or requirements meet the intended need in context. A satisfactory test may verify one criterion for one configuration but does not automatically validate a different assembly's function. Preserve configuration identification, results, deviations, uncertainty and scope. Evidence method must match mechanism and need."
          ]
        }
      },
      {
        "title": {
          "es": "3. Gobernanza de cambios y aeronavegabilidad",
          "en": "3. Change governance and airworthiness"
        },
        "paragraphs": {
          "es": [
            "Una propuesta de cambio conecta la brecha con requisitos, interfaces, configuración, evidencias y documentos afectados. Después se somete al proceso de revisión y aprobación aplicable, incluyendo valoración de impactos en seguridad, programa, soporte, coste y validación. La trazabilidad debe permitir saber qué revisión de documento aplica a qué configuración. El responsable de aprendizaje no debe asignar unilateralmente límites ni atribuir aprobación a un ensayo parcial.",
            "Los documentos EMAR de la Agencia Europea de Defensa ilustran un marco armonizado de aeronavegabilidad militar; su aplicación y adopción nacional necesitan comprobarse para cada caso. La documentación civil tampoco se presupone aplicable a un producto militar. Ingeniería, Calidad, Programa, In-Service y autoridades competentes pueden intervenir según sus responsabilidades reales. En este curso se aprende a plantear una revisión y a reconocer sus límites, no a sustituir el proceso autorizado."
          ],
          "en": [
            "A change proposal links the gap to affected requirements, interfaces, configuration, evidence and documents. It then enters applicable review and approval, including impacts on safety, programme, support, cost and validation. Traceability must show which document revision applies to which configuration. A learner must not unilaterally assign limits or attribute approval to a partial test.",
            "European Defence Agency EMAR documents illustrate a harmonised military airworthiness framework; application and national adoption need checking in each case. Civil documentation is not assumed applicable to military products either. Engineering, Quality, Programme, In-Service and competent authorities may participate according to actual responsibilities. This course teaches proposing a review and recognising its boundaries, not replacing authorised processes."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 07 · Solicitud de revisión",
        "en": "Lab 07 · Review request"
      },
      "brief": {
        "es": "Manual ficticio M-01 revisión A, perfil histórico E-01; se estudia E-02. El único ensayo disponible corresponde a K1, no a K2.",
        "en": "Fictional manual M-01 revision A, historical profile E-01; E-02 is under study. The only available test covers K1, not K2."
      },
      "rows": [
        [
          {
            "es": "Documento / revisión",
            "en": "Document / revision"
          },
          "M-01 A",
          "M-01 A",
          "M-01 A"
        ],
        [
          {
            "es": "Perfil / configuración",
            "en": "Profile / configuration"
          },
          "E-01 K1",
          "E-02 K1",
          "E-02 K2"
        ],
        [
          {
            "es": "Evidencia",
            "en": "Evidence"
          },
          "Parcial / Partial",
          "Ausente / Absent",
          "Ausente / Absent"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "¿Qué justifica una solicitud de revisión?",
            "en": "What justifies a review request?"
          },
          "kind": "select",
          "answer": 1,
          "feedback": {
            "es": "Se necesita una brecha trazable entre escenario, función y requisito.",
            "en": "A traceable gap between scenario, function and requirement is needed."
          },
          "options": [
            {
              "es": "Copiar otro manual",
              "en": "Copy another manual"
            },
            {
              "es": "Documentar el cambio de hipótesis y el requisito afectado",
              "en": "Document assumption change and affected requirement"
            },
            {
              "es": "Cambiar el límite sin análisis",
              "en": "Change limit without analysis"
            }
          ]
        },
        {
          "prompt": {
            "es": "¿Qué tratamiento corresponde al ensayo K1?",
            "en": "How should the K1 test be treated?"
          },
          "kind": "select",
          "answer": 2,
          "feedback": {
            "es": "Evaluar alcance, diferencias e interfaces antes de trasladar evidencia.",
            "en": "Assess scope, differences and interfaces before transferring evidence."
          },
          "options": [
            {
              "es": "Validación automática de K2",
              "en": "Automatic K2 validation"
            },
            {
              "es": "Eliminar toda evidencia anterior",
              "en": "Delete all previous evidence"
            },
            {
              "es": "Analizar aplicabilidad a K2",
              "en": "Analyse applicability to K2"
            }
          ]
        },
        {
          "prompt": {
            "es": "¿Qué demuestra la verificación?",
            "en": "What does verification demonstrate?"
          },
          "kind": "select",
          "answer": 0,
          "feedback": {
            "es": "El cumplimiento del requisito especificado dentro del alcance evaluado.",
            "en": "Compliance with specified requirement within assessed scope."
          },
          "options": [
            {
              "es": "Cumplimiento del requisito especificado",
              "en": "Compliance with specified requirement"
            },
            {
              "es": "Autorización de cualquier operación",
              "en": "Authorisation of any operation"
            },
            {
              "es": "Aprobación automática del manual",
              "en": "Automatic manual approval"
            }
          ]
        }
      ],
      "reason": {
        "es": "Escribe una solicitud de cambio ficticia: origen, requisito afectado, interfaces, método de verificación, propietario y decisión pendiente.",
        "en": "Write a fictional change request: origin, affected requirement, interfaces, verification method, owner and outstanding decision."
      },
      "review": {
        "es": "La propuesta debe conservar versiones y configuración, explicar la brecha, identificar evidencia y autoridad, y evitar declarar aprobaciones.",
        "en": "The proposal must retain revisions and configuration, explain gap, identify evidence and authority, and avoid claiming approvals."
      }
    }
  },
  {
    "chapters": [
      {
        "title": {
          "es": "1. Longevidad: mantener una función relevante",
          "en": "1. Longevity: maintaining a relevant function"
        },
        "paragraphs": {
          "es": [
            "Un producto de larga vida puede sufrir obsolescencia física, tecnológica, económica o ambiental. La longevidad implica preservar la función segura y adecuada, no solo evitar reemplazar el producto. Una arquitectura puede conservar sus prestaciones históricas y, sin embargo, necesitar revisión si el perfil ambiental cambia. El envejecimiento acumulado, los cambios de configuración y las dependencias de soporte afectan a las alternativas disponibles.",
            "Fiabilidad, mantenibilidad y disponibilidad describen capacidades diferentes. La fiabilidad se refiere a cumplir una función durante un período bajo condiciones definidas; la mantenibilidad, a restaurarla bajo condiciones de soporte; la disponibilidad, a que pueda prestarse el servicio cuando se requiere. Una mejora local de durabilidad no se convierte automáticamente en una mejora cuantificada de disponibilidad. Para vincularlas son necesarios modelos, datos de servicio y alcance funcional comparables."
          ],
          "en": [
            "A long-life product may face physical, technological, economic or environmental obsolescence. Longevity means preserving safe and suitable function, not merely avoiding replacement. An architecture may retain historical performance yet require review if its environmental profile changes. Accumulated ageing, configuration changes and support dependencies affect available alternatives.",
            "Reliability, maintainability and availability describe distinct capabilities. Reliability concerns performing a function for a period under defined conditions; maintainability concerns restoring it under support conditions; availability concerns delivering service when required. A local durability improvement does not automatically translate into quantified availability improvement. Linking them requires models, service data and comparable functional scope."
          ]
        }
      },
      {
        "title": {
          "es": "2. Elegir estrategias sin prometer resultados no demostrados",
          "en": "2. Choose strategies without unsupported promises"
        },
        "paragraphs": {
          "es": [
            "Las alternativas incluyen estudiar cambios de diseño, investigar incorporación a productos existentes, mejorar soporte o plantear una estrategia por etapas. Deben compararse para una función equivalente, con dependencias, evidencia, costes y riesgos residuales explícitos. Un cambio puede aumentar masa, consumo, complejidad, necesidad de repuestos o carga de mantenimiento. El análisis de adaptación debe identificar esos efectos para evitar que una mejora local cree una nueva vulnerabilidad.",
            "El coste del ciclo de vida incluye más que adquisición: investigación, cualificación, incorporación, soporte, uso, mantenimiento y retirada. Una comparación simple sin descuento sirve para reconocer sensibilidad temporal, pero no sustituye una evaluación económica autorizada. También hay que considerar incertidumbre, calendario, reversibilidad y criterios de seguridad; una opción de menor coste no gana si no demuestra una función esencial. Un resultado financiero ficticio no es un ahorro real."
          ],
          "en": [
            "Options include studying design changes, investigating incorporation into existing products, improving support or proposing staged adaptation. Compare equivalent function with explicit dependencies, evidence, costs and residual risks. A change can increase weight, energy demand, complexity, spare-part needs or maintenance burden. Adaptation assessment must identify these effects so a local improvement does not create another vulnerability.",
            "Life-cycle cost includes more than acquisition: investigation, qualification, incorporation, support, use, maintenance and retirement. A simple undiscounted comparison teaches time sensitivity but does not replace authorised financial assessment. Consider uncertainty, schedule, reversibility and safety criteria; lower cost does not win if an essential function remains unproven. A fictional financial outcome is not actual savings."
          ]
        }
      },
      {
        "title": {
          "es": "3. Hoja de ruta y valor profesional",
          "en": "3. Roadmap and professional value"
        },
        "paragraphs": {
          "es": [
            "Una estrategia de adaptación debe establecer puntos de revisión coherentes con el ciclo de vida, datos necesarios, responsables y criterios que desencadenan nuevas decisiones. Los indicadores pueden distinguir exposición, estado de evidencia, número de brechas críticas abiertas, tendencias de degradación y resultados observados de soporte. Deben definir unidad, alcance, fuente, frecuencia y responsable. Un indicador educativo no mide resiliencia real.",
            "Cada función profesional puede aportar información diferente: Ingeniería analiza requisitos y alternativas; In-Service aporta observaciones y mantenibilidad; Compras estudia dependencias y cualificación de proveedores; Programa considera decisiones y recursos; Calidad y especialistas autorizados revisan evidencias. El valor estratégico consiste en conectar esa contribución con una necesidad del producto, declarar los límites y proponer la siguiente decisión. No en prometer décadas adicionales de servicio a partir de una simulación."
          ],
          "en": [
            "An adaptation strategy should set review points consistent with life cycle, needed data, owners and triggers for new decisions. Indicators can distinguish exposure, evidence status, open critical gaps, degradation trends and observed support outcomes. They need units, scope, source, frequency and owner. A learning indicator does not measure real resilience.",
            "Different professional functions contribute different information: Engineering assesses requirements and alternatives; In-Service contributes observations and maintainability; Procurement studies dependencies and supplier qualification; Programme considers decisions and resources; Quality and authorised specialists review evidence. Strategic value comes from connecting that contribution to a product need, stating boundaries and proposing a next decision. It does not come from promising additional decades of service based on simulation."
          ]
        }
      }
    ],
    "lab": {
      "title": {
        "es": "Laboratorio 08 · Estrategia por etapas",
        "en": "Lab 08 · Staged strategy"
      },
      "brief": {
        "es": "Costes ficticios sin descuento en unidades genéricas. A mantiene una brecha ambiental; B tiene una interfaz sin verificar. No hay equivalencia demostrada.",
        "en": "Fictional undiscounted costs in generic units. A retains an environmental gap; B has an unverified interface. Equivalence is not demonstrated."
      },
      "rows": [
        [
          {
            "es": "Inversión inicial",
            "en": "Initial investment"
          },
          "—",
          "100",
          "160"
        ],
        [
          {
            "es": "Coste anual de soporte",
            "en": "Annual support cost"
          },
          "—",
          "12",
          "5"
        ],
        [
          {
            "es": "Horizonte (años)",
            "en": "Horizon (years)"
          },
          "—",
          "10",
          "10"
        ],
        [
          {
            "es": "Evidencia pendiente",
            "en": "Outstanding evidence"
          },
          "—",
          "Brecha / Gap",
          "Interfaz / Interface"
        ]
      ],
      "tasks": [
        {
          "prompt": {
            "es": "Coste total simple de A a diez años.",
            "en": "Simple total cost of A over ten years."
          },
          "kind": "number",
          "answer": 220,
          "feedback": {
            "es": "100 + 10 × 12 = 220 unidades.",
            "en": "100 + 10 × 12 = 220 units."
          }
        },
        {
          "prompt": {
            "es": "Coste total simple de B a diez años.",
            "en": "Simple total cost of B over ten years."
          },
          "kind": "number",
          "answer": 210,
          "feedback": {
            "es": "160 + 10 × 5 = 210 unidades.",
            "en": "160 + 10 × 5 = 210 units."
          }
        },
        {
          "prompt": {
            "es": "¿Cuál es la decisión defendible?",
            "en": "What decision is defensible?"
          },
          "kind": "select",
          "answer": 2,
          "feedback": {
            "es": "Investigar ambas carencias; el coste por sí solo no determina la elección.",
            "en": "Investigate both gaps; cost alone cannot determine choice."
          },
          "options": [
            {
              "es": "Aprobar B por coste",
              "en": "Approve B on cost"
            },
            {
              "es": "Mantener A sin revisión",
              "en": "Keep A without review"
            },
            {
              "es": "Comparar función, brechas y evidencia antes de decidir",
              "en": "Compare function, gaps and evidence before deciding"
            }
          ]
        }
      ],
      "reason": {
        "es": "Propón una hoja de ruta con dos puntos de revisión, indicadores, responsables, trade-off y riesgo residual. No afirmes extensión de vida demostrada.",
        "en": "Propose a roadmap with two review points, metrics, owners, a trade-off and residual risk. Do not claim demonstrated life extension."
      },
      "review": {
        "es": "Debe distinguir costes simples de decisión autorizada, incluir ambos riesgos abiertos y definir qué evidencia podría cambiar la recomendación.",
        "en": "Distinguish simple costs from authorised decision, include both open risks and specify evidence that might change the recommendation."
      }
    }
  }
];})(typeof globalThis!=="undefined"?globalThis:this);
