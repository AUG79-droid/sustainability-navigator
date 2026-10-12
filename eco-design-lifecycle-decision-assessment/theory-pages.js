/* Native bilingual full-screen lessons. Appear after 3 decisions; no spoilers before answering.
   Fictional learning cases; not Airbus engineering or environmental impact assessments. */
(function(window){"use strict";
const chapter=(es,en)=>({es,en});
window.EcoDesignTheoryPages={
panel:chapter({
 subtitle:"¿Un producto más ligero tiene necesariamente menos impacto ambiental?",
 intro:[
  "El caso enfrenta un panel de acceso de aluminio con otro de material compuesto tipo sándwich que pesa un 14 % menos. Esa diferencia es real dentro del supuesto, pero todavía no permite concluir cuál es más sostenible. Una aeronave tiene que cumplir la misma misión con ambos diseños y ambos paneles deben satisfacer los requisitos técnicos aplicables durante su vida útil.",
  "Ecodiseñar significa considerar el desempeño y los impactos a lo largo de la vida de un producto, no seleccionar un material porque parezca moderno o porque destaque en un único indicador. El diseño puede ahorrar recursos en una etapa y consumir más en otra. Por eso necesitamos una comparación equivalente y transparente."
 ],
 sections:[
  ["1. Comparar la misma función, no dos objetos aislados",[
   "Para comparar opciones, primero hay que fijar qué servicio prestan. En este ejercicio, ambos paneles deben permitir acceso, mantener rigidez, resistencia al fuego, tolerancia a daños e inspeccionabilidad durante el periodo evaluado. Si un panel no cumple estos requisitos no es una alternativa funcional equivalente.",
   "Después se definen los límites del estudio: extracción y transformación de materias primas, fabricación, transporte, instalación, uso, inspecciones, reparaciones, sustituciones y tratamiento final. También se concretan los supuestos de misión, horas de vuelo, daños y tasas de reemplazo. Sin límites comunes, una comparación puede favorecer injustificadamente una opción."
  ]],
  ["2. Por qué el peso cuenta, pero no es suficiente",[
   "Reducir masa puede disminuir ciertos consumos durante el funcionamiento, dependiendo del tipo de aeronave, misión, configuración y modelo utilizado. El beneficio no debe extrapolarse sin cálculo. Una reducción de masa del 14 % en una pieza tampoco significa una reducción del 14 % del consumo de la aeronave.",
   "Un material compuesto puede requerir procesos de fabricación, energía, insumos y operaciones de reparación distintos a los del aluminio. El aluminio puede tener rutas de reparación y recuperación de materiales diferentes. Ninguna familia material es automáticamente superior: deben evaluarse sus datos y las condiciones de uso."
  ]],
  ["3. La mantenibilidad puede cambiar el resultado",[
   "Si el nuevo panel se daña con frecuencia y es preciso sustituirlo entero, los recursos consumidos y los residuos asociados a fabricación y reemplazo pueden reducir o incluso superar el ahorro operativo modelado. Si existe una reparación segura y autorizada, la conclusión podría ser distinta.",
   "Es importante estudiar escenarios realistas: daños frecuentes o escasos, reparación en base o en despliegue, disponibilidad de piezas, futuros cambios de misión y fin de vida. El análisis de sensibilidad muestra qué variables pueden cambiar la opción preferida."
  ]],
  ["4. De un ensayo piloto a una decisión válida",[
   "Un ensayo de una planta piloto sirve para aprender, pero no representa necesariamente la fabricación industrial ni todas las condiciones de servicio. Hay que identificar qué datos son medidos, cuáles son estimaciones y qué falta verificar antes de aprobar la solución.",
   "La decisión adecuada puede ser continuar con ensayos o un demostrador autorizado, estableciendo requisitos técnicos, condiciones de prueba, responsables y criterios de parada. La seguridad y la cualificación no se compensan con un resultado ambiental potencialmente favorable."
  ]]
 ],
 example:"Dos paneles cumplen inicialmente los requisitos y el modelo operativo favorece al más ligero. En el escenario A, ambos permanecen en servicio sin daños durante años. En el escenario B, el compuesto sufre más sustituciones completas y el aluminio se repara. La comparación de impactos puede cambiar entre ambos escenarios. Sin frecuencia de daños y datos de fabricación representativos, proclamar un ganador ambiental sería prematuro.",
 glossary:[["Material compuesto / composite","Material formado por distintos constituyentes para obtener propiedades específicas."],["Unidad funcional","Función y nivel de servicio equivalentes que permiten comparar opciones."],["Límites del sistema","Procesos y etapas incluidos o excluidos del análisis."],["Análisis de sensibilidad","Comprobación de cómo cambia el resultado si varían los supuestos."],["Datos piloto","Datos procedentes de ensayos o fabricación no necesariamente representativos de la producción definitiva."]],
 checklist:["¿Las dos opciones prestan realmente la misma función?","¿Se compararon todas las etapas relevantes, incluidas reparaciones y reemplazos?","¿Cuáles son los datos medidos, los supuestos y las incertidumbres?","¿Se han superado los requisitos técnicos antes de plantear una aprobación?"],
 takeaway:"«Más ligero» describe una propiedad; «menor impacto ambiental» exige una evaluación del ciclo de vida y de los supuestos. No son sinónimos."
},{
 subtitle:"Does a lighter product necessarily have a lower environmental impact?",
 intro:[
  "The scenario compares an aluminium access panel with a sandwich composite panel that is 14% lighter. That difference is part of the case, but it does not establish which option is more sustainable. Both designs must fulfil the same mission and meet applicable technical requirements throughout the assessed service life.",
  "Eco-design considers performance and impacts across a product's life rather than choosing a material because it seems modern or performs well on one indicator. An option may save resources in one phase and consume more elsewhere. That is why we need a like-for-like, transparent comparison."
 ],
 sections:[
  ["1. Compare the same function, not two isolated objects",[
   "First define the service delivered. In this exercise, both panels must provide access while meeting stiffness, fire, damage-tolerance and inspection requirements for the assessment period. A panel that fails mandatory requirements is not a functionally equivalent alternative.",
   "Then establish system boundaries: raw materials, processing, production, transport, installation, operation, inspection, repair, replacement and end-of-life treatment. State mission hours, damage assumptions and replacement rates. Without common boundaries, the comparison may favour one option unfairly."
  ]],
  ["2. Why mass matters but is not the whole story",[
   "Reducing mass can lower some operational resource demands, depending on aircraft type, mission, configuration and the model used. This benefit needs calculation; a 14% reduction in one part's mass is not a 14% reduction in aircraft fuel consumption.",
   "Composites and aluminium may involve different production energy, process inputs, repair methods and recovery routes. Neither material family is automatically better: the evidence must relate to the actual application and operating conditions."
  ]],
  ["3. Maintainability can reverse the result",[
   "If the composite panel is damaged often and must be replaced completely, the production resources and waste associated with replacement may reduce or exceed a modelled operational benefit. A safe, authorised repair route could produce a different outcome.",
   "Study realistic scenarios: high or low damage rates, base or deployed repair, spare availability, future mission changes and end-of-life options. Sensitivity analysis shows which variables could change the preferred design."
  ]],
  ["4. From pilot data to an authorised decision",[
   "Pilot-plant tests can produce useful learning but are not automatically representative of industrial production or all operating conditions. Distinguish measured data from estimates and identify what remains unknown before an approval decision.",
   "An authorised test or demonstrator with defined requirements, responsibilities and stop criteria may be appropriate. Safety and technical qualification cannot be traded away for a promising environmental result."
  ]]
 ],
 example:"A model initially favours the lighter panel. In scenario A, both panels remain in service without damage. In scenario B, the composite is replaced more often while the aluminium part can be repaired. The relative impacts may change. Without damage frequency and representative manufacturing evidence, calling either one environmentally superior would be premature.",
 glossary:[["Composite material","A material combining constituents to achieve particular properties."],["Functional unit","Equivalent function and service level used to compare alternatives."],["System boundary","The processes and stages included in an assessment."],["Sensitivity analysis","Testing how conclusions change when assumptions vary."],["Pilot data","Evidence from tests or limited production that may not represent final industrial manufacture."]],
 checklist:["Do both options truly provide equivalent functionality?","Are repairs and replacement included alongside the other life stages?","Which results are measured and which are assumptions?","Have technical gates been met before approval is considered?"],
 takeaway:"'Lighter' describes a property. 'Lower environmental impact' requires life-cycle evidence and stated assumptions. They are not synonyms."
}),
radome:chapter({
 subtitle:"Reparar, reacondicionar o sustituir: circularidad con seguridad como límite",
 intro:[
  "Un radomo es la cubierta que protege determinados equipos, por ejemplo una antena, y debe permitir su funcionamiento electromagnético. En el caso aparece un daño localizado durante un despliegue. Reutilizar la cubierta sería atractivo para conservar recursos, pero solo si sigue cumpliendo las condiciones técnicas y de seguridad.",
  "La economía circular pretende conservar valor y evitar intervenciones innecesarias. Sin embargo, la decisión no consiste en reparar siempre. Consiste en seleccionar la vía más adecuada para el estado real de la pieza, la misión y las capacidades de inspección y reparación autorizadas."
 ],
 sections:[
  ["1. Distinguir mantener, reparar, reacondicionar y remanufacturar",[
   "Mantener es realizar las operaciones previstas para conservar un producto en estado adecuado. Reparar corrige defectos concretos siguiendo métodos autorizados. Reacondicionar puede incluir revisión y restauración para un uso posterior definido. Remanufacturar implica procesos más profundos de recuperación y comprobación, sujetos a criterios concretos.",
   "Estas categorías no son permisos intercambiables. Dependiendo de la pieza y de los requisitos aplicables, determinadas operaciones pueden no estar disponibles o autorizadas. El reciclaje y la sustitución son otras vías a evaluar cuando las opciones de retención de valor no resultan aceptables."
  ]],
  ["2. El daño visible quizá no sea todo el daño",[
   "Una superficie puede mostrar un desperfecto pequeño y ocultar separación de capas, humedad o daño subsuperficial. En un radomo, además de integridad estructural y sellado, es importante no alterar las propiedades electromagnéticas requeridas.",
   "Por eso la decisión requiere conocer el alcance del defecto, el historial de intervenciones y la aplicabilidad de los procedimientos. Una comprobación parcial o una etiqueta «reciclable» no demuestra idoneidad para volver al servicio."
  ]],
  ["3. Qué hacer si la inspección no es posible en despliegue",[
   "El equipo remoto puede carecer de instrumentos, instalaciones o autorización para ejecutar toda la inspección. La urgencia por recuperar una aeronave no sustituye la evidencia que exige la liberación.",
   "La opción responsable puede ser inmovilizar la pieza afectada, enviarla a un centro con capacidad, utilizar una alternativa técnicamente aprobada o continuar una evaluación permitida bajo controles. Debe documentarse quién decide y qué requisitos faltan."
  ]],
  ["4. Aprender de un fallo para mejorar el diseño",[
   "Si repetidamente no se puede reparar en condiciones operativas, esa información puede influir en el diseño futuro: acceso a zonas de inspección, procedimientos, herramientas, piezas de recambio y criterios de reparación.",
   "El análisis ambiental también debe contemplar intervenciones y transportes adicionales. La opción circular más deseable será la que conserva valor sin incumplir los requisitos obligatorios y cuya conveniencia esté respaldada por las evidencias."
  ]]
 ],
 example:"Una pequeña marca en un radomo parece reparable, pero no se ha comprobado si existe humedad interna. La respuesta correcta no es «reparar porque genera menos residuos», ni «tirarlo siempre». Primero se inspecciona según el procedimiento aplicable. Si no se pueden verificar los requisitos técnicos, no se libera; se evalúa una alternativa autorizada.",
 glossary:[["Radomo","Cubierta protectora diseñada para permitir un funcionamiento electromagnético específico."],["Reparación","Intervención para corregir un daño dentro de procedimientos y límites autorizados."],["Reacondicionamiento","Revisión y restauración para un uso posterior definido."],["Remanufactura","Proceso de recuperación más amplio con criterios de comprobación determinados."],["Requisito de liberación","Condición que debe cumplirse antes de autorizar el retorno al servicio."]],
 checklist:["¿Se ha caracterizado el daño visible y el posible daño interno?","¿Se conocen los límites del procedimiento aplicable?","¿El equipo dispone de medios y autoridad para verificar la intervención?","¿Se ha valorado recuperar la pieza sin comprometer seguridad?"],
 takeaway:"La circularidad no significa reparar siempre. Significa evitar desperdiciar valor cuando se puede demostrar que la intervención es técnicamente válida y segura."
},{
 subtitle:"Repair, refurbish or replace: circularity with safety as the boundary",
 intro:[
  "A radome is a protective cover for equipment such as an antenna and must allow specified electromagnetic performance. The scenario presents local damage during deployment. Retaining the cover may save resources, but only if technical and safety requirements remain satisfied.",
  "Circularity seeks to preserve value and avoid unnecessary intervention. The decision is not 'always repair'. It is to choose an appropriate route for the part's actual condition, the mission and the available authorised inspection and repair capability."
 ],
 sections:[
  ["1. Maintenance, repair, refurbishment and remanufacture",[
   "Maintenance consists of prescribed work that keeps a product in suitable condition. Repair addresses specific defects using authorised methods. Refurbishment may involve inspection and restoration for defined further use. Remanufacture involves more extensive recovery and testing under specific acceptance criteria.",
   "These categories are not interchangeable permissions. Certain routes may be unavailable or unauthorised for a particular part. Recycling and replacement remain options if higher-value routes cannot meet the requirements."
  ]],
  ["2. Visible damage may not be the whole damage",[
   "A small external mark could conceal delamination, moisture or subsurface damage. A radome must maintain structure and sealing without impairing required electromagnetic properties.",
   "The choice therefore depends on damage extent, repair history and applicable instructions. A partial test or recyclable-material label does not establish suitability for returning to service."
  ]],
  ["3. What if deployment conditions prevent inspection?",[
   "A remote team may not have the equipment, facilities or authority to complete the necessary inspection. Pressure to return the aircraft to service cannot replace required release evidence.",
   "A responsible route may involve withholding release, transferring the part to a capable facility, using a technically approved alternative or conducting further authorised investigation. Record what remains unknown and who decides."
  ]],
  ["4. Use failures to improve future design",[
   "Repeated difficulty repairing in operational conditions may inform future design: access for inspection, approved methods, tools, spares and repairability requirements.",
   "Environmental comparison should also include additional intervention and transport. A preferable circular strategy retains value without compromising mandatory performance and is supported by evidence."
  ]]
 ],
 example:"A small radome mark looks repairable, but internal moisture has not been assessed. The right response is neither 'repair because it creates less waste' nor 'discard everything'. Inspect under applicable procedures. If technical requirements cannot be verified, do not release; evaluate an authorised alternative.",
 glossary:[["Radome","A protective cover designed to allow specified electromagnetic performance."],["Repair","Correcting damage within authorised methods and limits."],["Refurbishment","Inspection and restoration for defined further use."],["Remanufacture","A more extensive recovery process with defined verification criteria."],["Release gate","A condition that must be met before returning an item to service."]],
 checklist:["Has visible and potential internal damage been assessed?","Are the applicable procedure's limits understood?","Does the team have the tools and authority to verify the work?","Can the part be retained without compromising safety?"],
 takeaway:"Circularity does not mean always repairing. It means preserving value where technical suitability and safety can be demonstrated."
}),
module:chapter({
 subtitle:"Modularidad, conexiones y decisiones que condicionan el mantenimiento futuro",
 intro:[
  "Imagina una actualización de aviónica a mitad de la vida útil de una aeronave. Se plantea una unidad compacta y sellada frente a una arquitectura con tarjetas sustituibles. Una opción puede ahorrar masa y reducir puntos de unión; otra puede facilitar reparaciones y futuras actualizaciones.",
  "Ninguna es automáticamente preferible. La modularidad es una estrategia de diseño: dividir funciones en partes que pueden intercambiarse siguiendo reglas. Para que aporte valor, debe combinarse con compatibilidad, acceso, fiabilidad, seguridad y control de configuración."
 ],
 sections:[
  ["1. Qué significa diseñar para desmontar y reparar",[
   "Un elemento desmontable suele facilitar determinadas operaciones, pero también puede introducir tornillos, juntas, conectores, masa y necesidades de inspección. Una unión permanente puede simplificar fabricación y sellado, pero dificultar una reparación futura.",
   "Por ello importa la frecuencia real de acceso y mantenimiento, el coste de inmovilización, el procedimiento seguro y el posible impacto de sustituciones completas. Puede tener sentido una solución mixta, con acceso a los componentes que previsiblemente cambien."
  ]],
  ["2. Las interfaces son esenciales para la modularidad",[
   "Una interfaz es el punto o conjunto de reglas que permite que dos elementos se unan y funcionen juntos: dimensiones, conectores eléctricos, comunicaciones, refrigeración o software. Añadir módulos sin definir correctamente sus interfaces puede generar incompatibilidades o más fallos.",
   "Por ejemplo, un ordenador nuevo puede necesitar otra alimentación, transmitir datos mediante una conexión distinta o disipar más calor. Si los demás sistemas deben modificarse, la sustitución deja de ser simple. Diseñar interfaces claras favorece cambios controlados, pero también requiere comprobación."
  ]],
  ["3. Modularidad sin control puede generar riesgos",[
   "La posibilidad física de sustituir una tarjeta no significa que cualquier versión deba instalarse. Hay que controlar identificación, compatibilidad de hardware y software, ciberseguridad, comportamiento electromagnético, trazabilidad y autorización de las modificaciones.",
   "Un registro claro permite saber qué versión lleva cada equipo y qué combinaciones han sido verificadas. El control de configuración es parte del diseño para la sostenibilidad: ayuda a evitar reemplazos erróneos, retrabajos y fallos."
  ]],
  ["4. Considerar el ciclo de vida completo",[
   "La comparación debe incluir fabricación, energía en servicio, mantenimiento, tasa de averías, sustituciones parciales, obsolescencia y disponibilidad de piezas. Una unidad sellada puede durar mucho sin fallar, pero exigir la sustitución completa ante un problema pequeño.",
   "Una solución modular puede ampliar las opciones de mantenimiento, pero quizá requiera más conectores, masa o verificaciones. El resultado depende de datos de uso, no de un eslogan como «modular siempre es sostenible»."
  ]]
 ],
 example:"Un módulo de comunicaciones deja de cumplir una necesidad. En el diseño A, está integrado permanentemente en un equipo mayor que también debe retirarse. En el B, se sustituye una tarjeta, pero solo después de verificar conexiones, software, refrigeración y compatibilidad. El diseño B puede conservar recursos, aunque la ventaja debe compararse con los impactos y riesgos añadidos de la modularidad.",
 glossary:[["Modularidad","Organización de un sistema en partes con funciones e interfaces definidas."],["Interfaz","Reglas y conexiones que permiten que componentes trabajen juntos."],["Control de configuración","Gestión de versiones, compatibilidades y cambios autorizados."],["Mantenibilidad","Facilidad y condiciones necesarias para inspeccionar, reparar y mantener un producto."],["Obsolescencia","Situación en que una pieza o tecnología deja de estar disponible o de satisfacer una necesidad."]],
 checklist:["¿Qué componentes necesitarán probablemente mantenimiento o actualización?","¿Están claramente definidas sus interfaces?","¿Cómo se verifica la compatibilidad y se autorizan los cambios?","¿Se compararon la masa añadida, los fallos y los reemplazos evitables?"],
 takeaway:"La modularidad puede facilitar la extensión de la vida útil, pero solo cuando las interfaces y las configuraciones se gestionan de manera segura y trazable."
},{
 subtitle:"Modularity, interfaces and decisions shaping future maintenance",
 intro:[
  "Imagine a mid-life avionics upgrade. One design uses a compact sealed unit; another has replaceable boards. The first could save mass and joining points; the second could make future repair and upgrade easier.",
  "Neither is automatically preferable. Modularity divides functions into parts that can be exchanged according to defined rules. To provide value it needs compatibility, access, reliability, security and configuration control."
 ],
 sections:[
  ["1. Design for disassembly and repair",[
   "A removable element can facilitate maintenance but add fasteners, seals, connectors, mass and inspection needs. Permanent joining can simplify manufacturing and sealing while making future repair harder.",
   "The right choice depends on actual maintenance frequency, downtime, safe methods and the impact of replacing a whole assembly. A hybrid solution may provide access to parts likely to change."
  ]],
  ["2. Interfaces make modularity work",[
   "An interface is the defined way two components connect and operate: dimensions, electrical connectors, data communications, cooling or software. Adding modules without managing interfaces can create incompatibility or additional failures.",
   "A new computer may require different power, communicate differently or generate more heat. If other systems need modification, replacement is no longer straightforward. Clear interfaces support controlled changes, but need verification."
  ]],
  ["3. Modularity without control can introduce risks",[
   "Being physically able to replace a board does not authorise installing any version. Identification, hardware and software compatibility, cybersecurity, electromagnetic performance, traceability and change authority all matter.",
   "A configuration record states which versions are installed and which combinations have been verified. Configuration management is also a sustainability measure: it helps avoid incorrect substitutions, rework and failures."
  ]],
  ["4. Consider the full working life",[
   "Compare production, operating energy, maintenance, failure rates, partial replacement, obsolescence and spare availability. A sealed unit may work reliably for years, but require total replacement for a small fault.",
   "A modular solution may extend maintenance options while adding mass, connectors or verification work. Evidence from likely use is stronger than a slogan like 'modular is always sustainable'."
  ]]
 ],
 example:"A communication function becomes obsolete. Design A integrates it permanently, requiring removal of a larger assembly. Design B replaces a board, but only after power, software, cooling and compatibility are verified. Design B may conserve resources, yet benefits must be compared with the impacts and risks introduced by modularity.",
 glossary:[["Modularity","A system arranged into parts with defined functions and interfaces."],["Interface","Rules and connections enabling parts to work together."],["Configuration control","Management of revisions, compatibility and authorised change."],["Maintainability","Ease and conditions of safely inspecting, repairing and maintaining a product."],["Obsolescence","When a part or technology becomes unavailable or no longer meets needs."]],
 checklist:["Which parts will likely need repair or upgrade?","Are interfaces clearly specified?","How are compatibility and change approval managed?","Have added mass, failures and avoidable replacement been compared?"],
 takeaway:"Modularity can support longer service life, but only with safe, traceable control of interfaces and configurations."
}),
material:chapter({
 subtitle:"Materiales críticos, contenido reciclado, REACH y recubrimientos: evidencias antes de afirmar mejoras",
 intro:[
  "El suministro de una aleación presenta riesgos, y el equipo propone otro metal con contenido reciclado y un recubrimiento alternativo. A primera vista parece una decisión ambientalmente mejor, pero todavía debemos comprobar sus propiedades, el origen del material, el proceso industrial y el cumplimiento químico.",
  "Las decisiones sobre materiales afectan a varias dimensiones: disponibilidad, riesgos sociales y ambientales de extracción, energía de producción, vida útil, reparación y posibles residuos. El contenido reciclado es una característica útil, pero no determina por sí solo el impacto total ni la idoneidad de una pieza."
 ],
 sections:[
  ["1. Qué es un material crítico y por qué importa",[
   "La criticidad de un material puede relacionarse con la importancia económica o estratégica y con riesgos de suministro. No implica que el material sea intrínsecamente tóxico o insostenible. Un material sustituto podría reducir una dependencia y crear otras.",
   "La trazabilidad de materias primas, las condiciones de aprovisionamiento y la estabilidad de calidad deben evaluarse para la alternativa concreta. El hecho de que una aleación tenga material secundario no garantiza una procedencia ni una composición homogéneas."
  ]],
  ["2. El contenido reciclado necesita contexto",[
   "Un porcentaje de contenido reciclado indica qué parte del material procede de una fuente secundaria, según un método y límites definidos. Para interpretar su efecto ambiental hay que conocer los procesos de recuperación, la energía, las mermas, el transporte y la calidad final.",
   "La fabricación con materias secundarias puede aportar beneficios en determinadas condiciones, pero el efecto real debe demostrarse con datos relevantes. Además, la variabilidad entre lotes podría afectar propiedades y procesos y requerir un control específico."
  ]],
  ["3. REACH y cualificación no son lo mismo",[
   "REACH establece requisitos europeos aplicables a sustancias, mezclas y artículos según el caso. Una ficha de datos de seguridad explica peligros y medidas de uso de determinadas sustancias o mezclas, pero no es una autorización técnica para instalar un material aeronáutico.",
   "La cualificación técnica puede exigir ensayos de fatiga, corrosión, compatibilidad galvánica y estabilidad del proceso. El recubrimiento debe evaluarse junto con el sustrato y las condiciones de servicio. Acreditar un aspecto químico no demuestra automáticamente desempeño técnico."
  ]],
  ["4. Qué podemos comunicar responsablemente",[
   "No es adecuado declarar que una pieza «es sostenible» como propiedad absoluta. En su lugar, pueden describirse hechos verificables: por ejemplo, composición documentada, proporción de material recuperado o resultados comparativos para un alcance y un indicador concretos.",
   "Si faltan ensayos o aprobaciones, debe explicarse expresamente. Pueden continuar pruebas autorizadas, pero una alternativa no debe liberarse cuando no cumpla los requisitos técnicos o legales obligatorios."
  ]]
 ],
 example:"Un proveedor presenta una aleación con contenido reciclado y una ficha de datos de seguridad del recubrimiento. No tenemos todavía pruebas suficientes sobre fatiga y corrosión en la pieza. La decisión defendible es estudiar la alternativa, verificar datos y realizar pruebas bajo autorización; no instalarla ni afirmar que «reduce el impacto» con una cifra no calculada.",
 glossary:[["Material crítico","Material cuya disponibilidad puede presentar riesgos relevantes en determinados mercados y aplicaciones."],["Contenido reciclado","Proporción de material procedente de fuentes secundarias según un método definido."],["REACH","Reglamento europeo de registro, evaluación, autorización y restricción de sustancias químicas."],["FDS / SDS","Ficha de datos de seguridad de sustancias o mezclas."],["Cualificación","Verificación documentada de requisitos técnicos para un uso concreto."]],
 checklist:["¿El origen y la proporción de material recuperado están documentados?","¿Se ha analizado la variación entre lotes y el proceso industrial?","¿Se han separado los requisitos químicos de la cualificación técnica?","¿Qué afirmaciones ambientales permiten realmente los datos?"],
 takeaway:"Una sustitución de material no es una mejora ambiental demostrada solo por incluir contenido reciclado. Hace falta evaluar función, riesgos, cadena de suministro y ciclo de vida."
},{
 subtitle:"Critical materials, recycled content, REACH and coatings: evidence before environmental claims",
 intro:[
  "An alloy faces sourcing risks, so the team considers another metal containing recycled feedstock and a different coating. It may look environmentally preferable, but performance, material origin, industrial processing and chemical obligations must be examined.",
  "Materials decisions affect supply availability, extraction-related social and environmental risks, manufacturing energy, service life, repair and waste. Recycled content is useful information, not proof of lower overall impact or technical suitability."
 ],
 sections:[
  ["1. What makes a material critical?",[
   "Material criticality may reflect economic or strategic importance and supply risks. It does not imply that a material is inherently toxic or unsustainable. A substitute may reduce one dependency while creating another.",
   "Raw material traceability, sourcing conditions and consistent quality must be assessed for the actual alternative. A recycled-content alloy is not automatically homogeneous or traceable."
  ]],
  ["2. Recycled content needs context",[
   "A recycled-content percentage states how much material comes from secondary sources under defined boundaries and methods. Environmental interpretation also needs recovery-process information, energy, losses, logistics and final quality.",
   "Secondary feedstock can be beneficial under some conditions, but those benefits need evidence. Variation between batches could affect properties and processing, requiring dedicated controls."
  ]],
  ["3. REACH and technical qualification are different",[
   "REACH imposes European requirements for substances, mixtures and articles as applicable. A safety data sheet identifies chemical hazards and protective measures for relevant substances or mixtures; it is not engineering approval for installation on an aircraft part.",
   "Technical qualification may need fatigue, corrosion, galvanic compatibility and manufacturing process evidence. Coating and substrate must be assessed together for actual service conditions. Chemical information does not automatically prove technical performance."
  ]],
  ["4. What can be communicated responsibly?",[
   "It is not appropriate to claim that a component 'is sustainable' as an absolute property. Communicate verifiable specifics instead, such as documented composition, recovered-material content or a comparison for a defined indicator and scope.",
   "If tests or approvals are missing, say so clearly. Authorised evaluation may continue, but an alternative must not be released with unmet mandatory technical or legal requirements."
  ]]
 ],
 example:"A supplier provides a recycled-content alloy and a coating safety data sheet. Fatigue and corrosion testing on the actual part is still inadequate. Assessing the alternative and generating authorised evidence is reasonable; installation or a numerical environmental savings claim is not yet supported.",
 glossary:[["Critical material","Material whose availability can face significant risks in certain markets and applications."],["Recycled content","Share of a material derived from secondary sources under a defined method."],["REACH","EU Registration, Evaluation, Authorisation and Restriction of Chemicals regulation."],["SDS","Safety Data Sheet for substances or mixtures."],["Qualification","Documented demonstration of technical requirements for a specific use."]],
 checklist:["Is recovered-material origin and content documented?","Have batch variability and industrial process conditions been assessed?","Are chemical duties separate from technical qualification?","What exact environmental claims do the data justify?"],
 takeaway:"Recycled content alone does not prove that a material substitution improves environmental performance. Function, risk, sourcing and life-cycle evidence matter."
}),
refurbish:chapter({
 subtitle:"Cómo decidir entre mantener, reacondicionar, remanufacturar o rediseñar un actuador",
 intro:[
  "Un actuador convierte una señal o fuente de energía en un movimiento o acción. En este caso sigue siendo fiable, pero determinados componentes o vías de fabricación se han quedado obsoletos. Existen existencias antiguas, posibilidad de reacondicionar piezas y una propuesta de rediseño más eficiente.",
  "La pregunta no es qué alternativa parece más circular ni qué opción ahorra energía sobre el papel. Debemos garantizar que cumple la función, que se puede sostener durante los años previstos y que se conocen las consecuencias de fabricar, mantener, recuperar o cambiar la tecnología."
 ],
 sections:[
  ["1. La obsolescencia no significa que una pieza haya dejado de funcionar",[
   "Una pieza puede operar correctamente y, sin embargo, ser difícil de conseguir o reparar en el futuro. La disponibilidad de repuestos, la documentación, la continuidad del proveedor y los medios de prueba son parte de su vida útil práctica.",
   "Las existencias compradas antes de una discontinuación pueden ayudar, pero necesitan condiciones adecuadas de almacenamiento, trazabilidad y verificación de idoneidad cuando correspondan. Acumular piezas tampoco soluciona siempre la demanda incierta a largo plazo."
  ]],
  ["2. Conservar valor según el estado real",[
   "El mantenimiento, la reparación, el reacondicionamiento y la remanufactura permiten conservar parte del valor funcional de equipos existentes en distintas condiciones. Deben evaluarse según daños, desgaste, material recuperado, requisitos de la pieza y aprobación de las funciones correspondientes.",
   "No todos los actuadores retirados son adecuados para volver a usarse. La trazabilidad de componentes recuperados, el historial de servicio y los ensayos exigidos son esenciales. La economía circular no autoriza a omitir el control de calidad."
  ]],
  ["3. Comparar un rediseño que consume menos energía",[
   "El consumo operacional es solo una parte de la comparación. El nuevo diseño también necesita desarrollo, fabricación, cualificación, logística, mantenimiento, soporte, software si procede y posible tratamiento final. Una mejora de eficiencia puede requerir inversión de materiales y energía iniciales.",
   "Se analizan varios escenarios de demanda y duración en servicio, porque una tecnología aparentemente eficiente puede sufrir fallos tempranos o una segunda obsolescencia. Es importante estudiar sensibilidad y no asumir tasas de avería sin datos."
  ]],
  ["4. Registrar supuestos y disparadores de revisión",[
   "El expediente distingue hechos medidos, estimaciones, datos sustitutos —proxies—, hipótesis, información pendiente y requisitos obligatorios. Debe identificar además qué incertidumbres podrían cambiar la estrategia preferida.",
   "La decisión futura se facilita si se registran responsables, condiciones, volumen esperado, umbrales de aceptación y razones para volver a evaluar, como aumentos de fallos, cambios de demanda o interrupción del suministro."
  ]]
 ],
 example:"De cien actuadores retirados, algunos pueden seguir sirviendo con inspección autorizada, otros requieren reacondicionamiento y otros no son recuperables. No se aplica una única decisión a los cien. Se clasifican según estado y evidencias, se comparan los impactos de cada ruta y se decide qué rediseños necesitan estudio adicional.",
 glossary:[["Actuador","Equipo que transforma una señal o energía en movimiento o acción."],["Obsolescencia","Pérdida de disponibilidad o adecuación de un componente o tecnología."],["Reacondicionamiento","Restauración y revisión de un equipo para un uso posterior determinado."],["Remanufactura","Proceso de recuperación y verificación más amplio bajo criterios establecidos."],["Proxy","Dato aproximado usado cuando faltan mediciones directas, con incertidumbre explícita."]],
 checklist:["¿Conocemos estado e historial de cada pieza recuperable?","¿Se ha comprobado el soporte y la demanda futura?","¿La comparación incluye fabricación, uso, mantenimiento y final de vida?","¿Qué nueva evidencia haría cambiar la decisión?"],
 takeaway:"La mejor solución suele depender del estado real y de las evidencias de cada componente: ni sustituir todo ni conservar todo es una regla válida."
},{
 subtitle:"How to choose among maintenance, refurbishment, remanufacture and redesign of an actuator",
 intro:[
  "An actuator converts a signal or energy source into movement or action. In this scenario it remains reliable, but some components or production routes are becoming obsolete. Older stock exists, refurbishment is possible and an allegedly more efficient redesign is proposed.",
  "The question is not which option looks most circular or saves most operating energy on paper. The solution must meet requirements, remain supportable and account for production, maintenance, recovery and technological change."
 ],
 sections:[
  ["1. Obsolete does not mean non-functioning",[
   "A component can work correctly but become hard to obtain or maintain. Spare availability, documentation, supplier continuity and testing capability are part of its practical working life.",
   "Last-time-buy stock may help, but appropriate storage, traceability and suitability checks can be necessary. Stockpiling is not always sufficient for uncertain long-term demand."
  ]],
  ["2. Retain value according to actual condition",[
   "Maintenance, repair, refurbishment and remanufacture can retain functional value to differing extents. Assess them against damage, wear, recovered material, part requirements and the approvals needed.",
   "Not every recovered actuator can return to use. Component traceability, service history and required testing are crucial. Circularity does not authorise skipping quality controls."
  ]],
  ["3. Compare a lower-energy redesign fairly",[
   "Operational consumption is only part of the comparison. A redesign also needs development, manufacturing, qualification, logistics, maintenance, support, possibly software and end-of-life treatment. Efficiency gains can require up-front materials and energy.",
   "Assess multiple demand and service-life scenarios. A seemingly efficient option may fail early or become obsolete again. Test sensitivity rather than inventing failure rates."
  ]],
  ["4. Record assumptions and review triggers",[
   "A decision file separates measured facts, estimates, proxies, assumptions, unknowns and mandatory gates. Identify uncertainties capable of reversing the preferred strategy.",
   "Future decisions become easier when owners, conditions, expected volumes, acceptance criteria and re-evaluation triggers are recorded, including failure changes, demand shifts or supply interruption."
  ]]
 ],
 example:"Of a batch of recovered actuators, some may remain serviceable after authorised inspection, some need refurbishment and others are unsuitable for reuse. There is no single answer for the whole batch. Classify actual conditions, compare each route and identify which redesign options need further evidence.",
 glossary:[["Actuator","Equipment converting a signal or energy source into motion or action."],["Obsolescence","Loss of availability or suitability of a product or technology."],["Refurbishment","Inspection and restoration for defined additional use."],["Remanufacture","More extensive recovery and verification under specified criteria."],["Proxy","An approximate value used when direct data are unavailable, with explicit uncertainty."]],
 checklist:["Is the condition and history of recoverable parts known?","Have future demand and support been assessed?","Does comparison include production, operation, maintenance and end of life?","Which evidence would change the preferred option?"],
 takeaway:"The best route depends on each item's condition and evidence. Neither 'replace everything' nor 'retain everything' is a sound universal rule."
}),
review:chapter({
 subtitle:"Cómo tomar una decisión integrada cuando hay datos incompletos y beneficios ambientales todavía no demostrados",
 intro:[
  "El programa propone varios cambios a la vez: panel ligero, aviónica modular y recuperación de actuadores. Un documento presenta impactos agregados favorables, pero mezcla mediciones, estimaciones y datos aproximados. Además, algunos ensayos y requisitos técnicos siguen pendientes.",
  "El objetivo de una revisión responsable es separar las preguntas, comprobar cada requisito obligatorio y comunicar resultados proporcionados a la calidad de los datos. Una buena historia ambiental no sustituye una decisión técnica ni una autorización."
 ],
 sections:[
  ["1. Crear un mapa de evidencias",[
   "Cada dato debe relacionarse con una fuente, fecha, versión, alcance, método y nivel de confianza. Una medición sobre un proceso concreto no es equivalente a una estimación general obtenida de otra industria. Los datos aproximados pueden servir para explorar escenarios, pero su incertidumbre debe hacerse visible.",
   "Conviene distinguir resultados medidos, modelos y supuestos, especialmente cuando un «caso de negocio» suma indicadores de naturaleza distinta. La falta de datos no se resuelve escondiéndola en un promedio."
  ]],
  ["2. Las condiciones obligatorias no se compensan",[
   "La seguridad, la aeronavegabilidad, las condiciones aplicables al producto y las autorizaciones requeridas funcionan como límites. Una reducción estimada de impactos no permite saltar una validación técnica obligatoria.",
   "Es posible que parte del análisis, los ensayos o las investigaciones continúen con autorización, mientras otra actividad permanece bloqueada. La decisión condicionada, si está permitida, debe describir con precisión el objeto, los controles, los responsables y la evidencia pendiente."
  ]],
  ["3. Analizar sensibilidad e incertidumbre",[
   "Las conclusiones pueden cambiar si varía la frecuencia de reparaciones, la matriz eléctrica futura, los volúmenes fabricados, el porcentaje de recuperación real o la vida útil. El equipo debe comprobar qué incertidumbres influyen más y cuáles pueden cambiar la opción preferida.",
   "No toda incertidumbre impide seguir investigando; sí puede impedir una aprobación o una afirmación si afecta a un requisito obligatorio o al fundamento del resultado declarado. La gestión debe identificar claramente los criterios de parada y revisión."
  ]],
  ["4. Comunicar solo lo que la evidencia permite",[
   "Una afirmación absoluta como «este retrofit es sostenible» no informa qué se midió ni con qué comparación. Es preferible describir un resultado acotado: «En el escenario modelado, bajo estos supuestos y límites, se observó una mejora estimada en un indicador específico».",
   "Las afirmaciones deberían distinguir mediciones y estimaciones, indicar limitaciones y no confundir simulaciones con resultados verificados en servicio. Si no se han calculado impactos ambientales, no se inventan porcentajes de ahorro, residuos o emisiones."
  ]]
 ],
 example:"Una evaluación integra tres propuestas. La modularidad podría evitar reemplazos completos, pero faltan datos de fallos futuros; un panel ligero mejora un indicador operacional modelado, pero su reparación es incierta; la recuperación de actuadores depende del estado de cada unidad. La recomendación apropiada es un mapa de evidencias y actuaciones por separado, avanzar solo donde se cumplen requisitos y comunicar las mejoras únicamente dentro de su alcance demostrado.",
 glossary:[["Mapa de evidencias","Registro de fuentes, alcance, calidad, incertidumbre y responsables de cada dato."],["Proxy","Dato aproximado para un parámetro aún no medido."],["Análisis de sensibilidad","Estudio de cómo afectan los cambios de supuestos al resultado."],["Decisión condicionada","Autorización delimitada que solo existe cuando el marco aplicable la permite."],["Afirmación ambiental","Declaración que debe estar respaldada por evidencia y un alcance claro."]],
 checklist:["¿Podemos trazar cada resultado hasta su fuente y su límite?","¿Están separados los requisitos obligatorios de las ventajas comparables?","¿Qué incertidumbres podrían cambiar la conclusión?","¿Se comunica exactamente el indicador y alcance demostrados, sin generalizar?"],
 takeaway:"Una evaluación responsable puede concluir «necesitamos más datos». Es un resultado útil y más riguroso que presentar una mejora ambiental que aún no está demostrada."
},{
 subtitle:"Making integrated decisions with incomplete evidence and unproven environmental benefits",
 intro:[
  "The programme proposes a lighter panel, modular avionics and recovered actuators together. A business case reports favourable aggregated impacts, but combines measurements, estimates and proxy data. Some technical testing and mandatory requirements also remain open.",
  "Responsible review separates the questions, checks each mandatory gate and makes claims proportionate to data quality. A compelling environmental story cannot replace technical decisions or authorisation."
 ],
 sections:[
  ["1. Build an evidence map",[
   "Link each data point to a source, date, revision, scope, method and confidence level. A measurement from one process is not equivalent to an industry-average estimate. Proxies can support scenario exploration but must carry explicit uncertainty.",
   "Separate measured results, models and assumptions, especially when a business case combines dissimilar indicators. Missing information cannot be resolved by concealing it in an average."
  ]],
  ["2. Mandatory gates cannot be traded away",[
   "Safety, airworthiness, product requirements and required authorisations establish boundaries. A predicted environmental improvement cannot waive mandatory technical validation.",
   "Permitted testing or investigation may continue under appropriate authorisation while another activity remains blocked. Where conditional decisions are permitted, define precisely the item, controls, accountable owners and pending evidence."
  ]],
  ["3. Analyse sensitivity and uncertainty",[
   "Conclusions may shift with repair frequency, future electricity mix, production volumes, actual recovery rates or service life. Identify the variables with most influence and those capable of reversing the preference.",
   "Uncertainty does not automatically stop investigation, but it may prevent approval or a claim if it affects a mandatory requirement or its evidential basis. Define stop and reassessment triggers."
  ]],
  ["4. Communicate only what evidence justifies",[
   "An absolute claim such as 'this retrofit is sustainable' fails to explain what was measured and compared. A bounded statement is better: 'In the assessed modelled scenario, under specified assumptions, one defined indicator showed an estimated improvement'.",
   "Distinguish measurements from estimates, state limitations and do not present simulation results as verified in-service performance. If environmental effects have not been quantified, do not invent percentages for avoided waste or emissions."
  ]]
 ],
 example:"An integrated review covers three proposals. Modularity might avoid full replacements, but future failures are unknown; the lightweight panel improves a modelled operational indicator, but repair requirements are uncertain; actuator recovery depends on actual condition. A sound recommendation maps the separate evidence, proceeds only where requirements are met and describes improvements strictly within demonstrated scope.",
 glossary:[["Evidence map","Record linking data to sources, scope, quality, uncertainty and owners."],["Proxy","Approximate data used where direct measurements are absent."],["Sensitivity analysis","Assessing how assumptions affect conclusions."],["Conditional decision","A bounded authorisation only where permitted by applicable rules."],["Environmental claim","A statement supported by evidence and a clearly defined scope."]],
 checklist:["Can each result be traced to source and boundary?","Are mandatory gates separated from criteria open to comparison?","Which uncertainties could reverse the conclusion?","Does communication state exactly the indicator and scope supported by evidence?"],
 takeaway:"A responsible assessment may conclude 'more evidence is needed'. That is useful and more rigorous than claiming an environmental improvement that has not yet been demonstrated."
})
};
})(window);
