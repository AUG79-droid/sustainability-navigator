/* Six complete post-scenario theory chapters. Native Spanish and English, not DOM translation.
 * Shown as separate screens after the 3 questions and their per-answer feedback.
 */
(function(root){"use strict";
const chapter=(es,en)=>({es,en});
root.SCReviewChapters={
 origin:chapter({
   subtitle:"Cómo investigar el origen de un material cuando solo conocemos al proveedor directo",
   intro:[
     "Una aeronave inmovilizada necesita una reparación urgente. El proveedor directo entrega placas electrónicas y asegura que cumple sus obligaciones, pero no aporta información suficiente sobre la instalación que procesó el tantalio utilizado. La urgencia es real; también lo es la falta de trazabilidad. Resolver el caso consiste en decidir cómo investigar esta incertidumbre sin confundirla con un incumplimiento demostrado.",
     "Una cadena de suministro puede comprender extracción, comercio de minerales, transformación, fabricación de componentes, integración y distribución. Conocer a la empresa que nos vende la placa no implica conocer cada fase anterior. Por eso una declaración de alcance desconocido o una certificación de sistema de gestión no verifican por sí solas el origen de todos sus materiales."
   ],
   sections:[
     ["1. ¿Qué es la trazabilidad aguas arriba?",[
       "La trazabilidad es la capacidad de relacionar un material o componente con información documentada sobre su procedencia y recorrido. «Aguas arriba» significa los eslabones anteriores a nuestro proveedor directo. En el caso del tantalio, interesa identificar —cuando corresponda— los operadores pertinentes, las instalaciones de transformación o refinado y el periodo y alcance de la información.",
       "Una lista de instalaciones puede ayudar a orientar la verificación; no garantiza por sí misma que toda la cadena esté libre de riesgos. También debemos evaluar quién facilitó los datos, cómo se obtuvieron, si corresponden al material realmente adquirido y qué parte de la cadena queda sin cubrir."
     ]],
     ["2. ¿Por qué hablamos de minerales 3TG?",[
       "El tantalio forma parte del grupo 3TG, junto al estaño, el wolframio y el oro. Estos minerales son objeto de marcos específicos de diligencia debida porque ciertas cadenas de suministro pueden estar expuestas a riesgos de conflicto y graves vulneraciones de derechos humanos. Esto no significa que cualquier tantalio sea «de conflicto» ni que todos los proveedores tengan idénticas obligaciones.",
       "Las obligaciones jurídicas dependen de la jurisdicción, la actividad de la empresa, el tipo de producto y otros factores. La diligencia debida consiste en identificar y evaluar los riesgos relevantes, adoptar medidas proporcionadas, realizar seguimiento y dejar constancia de las decisiones."
     ]],
     ["3. Información ausente no significa infracción probada",[
       "Conviene diferenciar tres estados: «evidencia suficiente para la cuestión evaluada», «evidencia incompleta o pendiente» e «incumplimiento o impacto confirmado». No debemos convertir el segundo en el tercero sin pruebas, pero tampoco presentarlo como si fuera el primero.",
       "Cuando falten datos relevantes, debemos determinar su importancia, solicitar evidencias dirigidas, asignar una persona responsable y fijar una fecha de revisión. La decisión de liberación técnica del producto y la evaluación de riesgos de su cadena de suministro pertenecen a ámbitos relacionados, pero no son intercambiables."
     ]],
     ["4. Documentar permite decidir y corregir",[
       "Un expediente útil incluye el proveedor, el material y la configuración, las declaraciones recibidas y su alcance, las evidencias verificadas, los datos pendientes, las fuentes, las personas responsables y las condiciones de cualquier decisión autorizada. También debe definir qué obligará a reabrirla: por ejemplo, un cambio de procesador, un proveedor nuevo o información contradictoria.",
       "Los controles temporales nunca convierten en opcional un requisito obligatorio. Si una aprobación legal o técnica necesaria no se ha obtenido y no existe una vía válida, la actividad que dependa de ella no puede liberarse por la urgencia del cliente."
     ]]
   ],
   example:"Dos proveedores ofrecen el mismo componente. El primero documenta instalaciones y periodos de aprovisionamiento, explica las limitaciones de su declaración y facilita documentación contrastable. El segundo responde simplemente «cumplimos la normativa» y aporta un certificado general. La primera respuesta ofrece una base de evaluación más sólida, aunque ambas siguen sujetas a comprobaciones. La segunda presenta una carencia de información: no una infracción automáticamente demostrada.",
   glossary:[["Tier 1","Proveedor directo de la empresa compradora."],["Cadena aguas arriba","Empresas y procesos anteriores al proveedor directo."],["Smelter / refiner","Instalación de transformación, fundición o refinado del mineral, según el material y el proceso."],["3TG","Estaño, tantalio, wolframio y oro."],["Registro de auditoría","Historial verificable de evidencias, responsables, decisiones, condiciones y fechas."]],
   checklist:["¿Se identifica la instalación pertinente y el periodo al que se refieren los datos?","¿Sabemos qué información está comprobada y cuál falta?","¿Se ha valorado el riesgo según el caso concreto y las obligaciones aplicables?","¿Existe un responsable, una acción y una fecha para resolver las dudas?"],
   conclusion:"La buena gestión de la sostenibilidad no consiste en declarar «conforme» o «incumple» apresuradamente. Consiste en reconocer las incertidumbres, investigar con evidencias y tomar decisiones trazables mediante las autoridades competentes."
 },{
   subtitle:"How to investigate mineral origin when you know only the direct supplier",
   intro:[
     "A grounded aircraft needs an urgent repair. A direct supplier delivers electronic boards and declares compliance, but provides insufficient information about the facility that processed the tantalum. The urgency is real; so is the traceability gap. This case asks how to investigate uncertainty without mistaking it for a proven breach.",
     "A supply chain may include extraction, mineral trading, processing, component manufacture, integration and distribution. Knowing who sells us a board does not establish knowledge of every upstream stage. A general declaration or management-system certificate does not, by itself, verify the origin of all materials."
   ],
   sections:[
     ["1. What is upstream traceability?",[
       "Traceability means linking a material or component to documented information about its origin and journey. 'Upstream' refers to the tiers before the direct supplier. For tantalum, relevant information may include operators, processing or refining facilities and the period and scope covered.",
       "A facility list can guide verification but does not guarantee that an entire chain is risk-free. Ask who provided the information, how it was collected, whether it relates to the purchased material and which parts of the chain remain unknown."
     ]],
     ["2. Why do the 3TG minerals matter?",[
       "Tantalum belongs to the group known as 3TG, with tin, tungsten and gold. These minerals are covered by due-diligence frameworks because certain supply chains may face conflict-related and serious human-rights risks. This does not make every tantalum source a 'conflict mineral', nor do all suppliers have identical legal duties.",
       "Legal requirements depend on jurisdiction, business role, product and other circumstances. Due diligence involves identifying relevant risks, assessing them, applying proportionate measures, monitoring results and documenting decisions."
     ]],
     ["3. Missing evidence is not a proven violation",[
       "Distinguish three states: sufficient evidence for the question assessed; incomplete or outstanding evidence; and confirmed non-compliance or adverse impact. Do not turn the second into the third without evidence, but do not present it as the first either.",
       "When relevant evidence is missing, determine significance, request targeted information, appoint an owner and set a review date. Product technical release and supply-chain risk assessment are connected but different decision domains."
     ]],
     ["4. Documentation enables accountable decisions",[
       "A useful case record identifies the supplier, material and configuration; declarations and their scope; verified facts; outstanding information; sources; decision owners; and conditions attached to any authorised decision. It also specifies what will trigger reopening, such as a new processor, a supplier change or contradictory information.",
       "Temporary controls cannot waive a mandatory gate. If a required legal or technical approval is absent and no valid route exists, customer urgency cannot authorise the dependent release."
     ]]
   ],
   example:"Two suppliers offer the same part. One identifies processing facilities and sourcing periods, explains the limitations of its statement and provides verifiable records. The other simply says 'we comply' and sends a generic certificate. The first provides a stronger starting point for assessment, although verification is still needed. The second presents an evidence gap—not an automatically proven breach.",
   glossary:[["Tier 1","The purchaser's direct supplier."],["Upstream supply chain","Organisations and processes before the direct supplier."],["Smelter / refiner","Mineral processing, smelting or refining facility, depending on the material and process."],["3TG","Tin, tantalum, tungsten and gold."],["Audit trail","A verifiable record of evidence, owners, decisions, conditions and dates."]],
   checklist:["Are the relevant facility and reporting period identified?","What has been verified, and what remains unknown?","Have risks been assessed against this case and its applicable requirements?","Is there an owner, an action and a date for closing the gap?"],
   conclusion:"Responsible sustainability management does not rush to label a supply chain compliant or non-compliant. It recognises uncertainty, seeks evidence and makes traceable decisions through the competent authorities."
 }),
 rights:chapter({
   subtitle:"Derechos humanos, condiciones laborales y comunidades en las cadenas de suministro",
   intro:[
     "Una materia prima puede cumplir los requisitos técnicos y parecer atractiva económicamente, mientras existen denuncias sobre condiciones laborales, acceso a tierras o impactos en las comunidades donde se produce. Este escenario plantea precisamente esa tensión: informes creíbles señalan posibles daños, pero no hay todavía una sentencia que resuelva los hechos.",
     "La sostenibilidad no se limita a emisiones y residuos. También incluye cómo las actividades empresariales afectan a las personas. La diligencia debida no exige esperar a que el daño esté judicialmente demostrado para empezar a investigar, pero obliga a tratar las acusaciones con precisión y sin dar por confirmados hechos que aún no lo están."
   ],
   sections:[
     ["1. Identificar impactos sobre las personas",[
       "Los riesgos pueden afectar a condiciones laborales, salud, seguridad, derechos sobre tierras, acceso al agua, medios de vida o participación comunitaria. Es importante saber quién podría verse afectado y qué relación real existe entre esos impactos y nuestras decisiones de compra.",
       "Deben diferenciarse el hecho verificado, el testimonio, el informe de terceros y la hipótesis. Las personas potencialmente afectadas pueden aportar información que no aparece en los documentos del proveedor; su participación ha de plantearse de forma adecuada y segura."
     ]],
     ["2. Evaluar gravedad antes que comodidad comercial",[
       "Las orientaciones de diligencia debida de la OCDE consideran la gravedad del impacto mediante su intensidad, el alcance —cuántas personas o comunidades se ven afectadas— y la dificultad para repararlo. Si el impacto todavía es potencial, la probabilidad también se considera, junto con la incertidumbre.",
       "Un riesgo de consecuencias muy graves puede merecer atención prioritaria aunque todavía falte evidencia completa. Un precio bajo, la puntualidad del suministro o la ausencia de una sentencia no reducen automáticamente la gravedad de una posible lesión de derechos."
     ]],
     ["3. Qué relación tenemos con el posible daño",[
       "Una empresa puede causar un impacto, contribuir a él o estar directamente vinculada a través de una relación comercial. Estas situaciones no son equivalentes y pueden requerir respuestas diferentes. También importa la capacidad de influencia sobre el proveedor para prevenir o mitigar riesgos.",
       "Una respuesta proporcionada puede incluir nuevas investigaciones, condiciones de compra, colaboración con el proveedor, planes de corrección, seguimiento independiente o, cuando corresponda, una desvinculación responsable. No siempre conviene romper una relación de manera inmediata sin valorar las consecuencias para las personas afectadas."
     ]],
     ["4. Una medida correctiva necesita pruebas de eficacia",[
       "Un plan que dice «mejoraremos» no basta. Debe indicar qué se va a cambiar, por quién, cuándo, con qué recursos y cómo se verificará. Cuando corresponde, hay que considerar mecanismos de reclamación y medidas de reparación.",
       "La revisión no termina cuando se recibe el informe del proveedor. Termina cuando existen evidencias suficientes de que las acciones se han aplicado y de que se está gestionando eficazmente el impacto, dentro de los procedimientos y obligaciones aplicables."
     ]]
   ],
   example:"Un informe creíble señala que familias de una comunidad han perdido acceso a sus tierras en una zona relacionada posiblemente con el material comprado. Una revisión responsable no acusa automáticamente al proveedor ni ignora el informe. Comprueba el vínculo, evalúa la gravedad, escucha de forma segura a las partes pertinentes y decide medidas con responsables y plazos. Meses después, no basta con preguntar si existe un plan: debe comprobarse si la situación de las personas ha cambiado.",
   glossary:[["Diligencia debida","Proceso continuado para identificar, prevenir, mitigar y explicar la gestión de impactos negativos."],["Gravedad","Intensidad, alcance y dificultad de reparación de un impacto."],["Capacidad de influencia","Posibilidad real de inducir medidas de prevención o mitigación en otras organizaciones."],["Reparación","Acciones apropiadas para abordar impactos negativos según el vínculo y el marco aplicable."],["Desvinculación responsable","Salida de una relación comercial teniendo en cuenta sus posibles efectos adversos."]],
   checklist:["¿Qué personas podrían verse afectadas y cómo?","¿Qué fuentes son fiables y qué afirmaciones siguen sin verificarse?","¿Se ha evaluado la gravedad y el vínculo con nuestra cadena?","¿Existen acciones con plazos y pruebas de eficacia, no solo promesas?"],
   conclusion:"La diligencia debida en derechos humanos es preventiva, continua y centrada en las personas. Ni la ausencia de certeza absoluta ni el ahorro económico justifican ignorar señales creíbles de daño."
 },{
   subtitle:"Human rights, labour conditions and communities in supply chains",
   intro:[
     "A raw material may meet technical specifications and look attractive on price while reports raise concerns about labour conditions, access to land or harm to communities where it is produced. This scenario brings those tensions together: credible concerns have surfaced, but no court ruling has established what happened.",
     "Sustainability is not limited to emissions and waste. It includes the way businesses affect people. Due diligence does not need to wait for a court judgment before investigating risk; at the same time, allegations must not be presented as verified facts."
   ],
   sections:[
     ["1. Identify impacts on people",[
       "Potential issues include labour conditions, health, safety, land rights, access to water, livelihoods and community participation. Ask who might be affected and what actual relationship connects these concerns with our purchasing decisions.",
       "Distinguish verified events, testimonies, third-party reports and hypotheses. Affected people may have information missing from supplier paperwork, so engagement must be appropriate and safe."
     ]],
     ["2. Evaluate severity, not commercial convenience",[
       "OECD due-diligence guidance assesses severity through scale (intensity of harm), scope (the number of people or communities affected) and irremediability. Where harm is potential, likelihood and uncertainty also enter the assessment.",
       "A potentially very severe impact can deserve priority despite incomplete evidence. Low prices, on-time delivery and the absence of a court judgment do not automatically reduce the seriousness of potential human-rights harms."
     ]],
     ["3. How is our business linked to the possible harm?",[
       "A company may cause, contribute to, or be directly linked to an impact through a business relationship. These categories are distinct and can call for different responses. Also consider the company's leverage to encourage risk prevention and mitigation.",
       "A proportionate response may involve investigation, purchasing conditions, supplier engagement, corrective-action plans, independent monitoring or, where appropriate, responsible disengagement. Ending a relationship immediately without considering impacts on affected people is not always a sound solution."
     ]],
     ["4. Corrective action requires evidence of effectiveness",[
       "A plan stating 'we will improve' is not enough. It should identify concrete changes, owners, deadlines, resources and verification methods. Grievance mechanisms and remedy may be relevant depending on the circumstances.",
       "A case is not resolved merely because the supplier sends a plan. Follow-up needs evidence that actions were implemented and are effectively addressing the impact, under applicable obligations and procedures."
     ]]
   ],
   example:"A credible report alleges that families have lost access to land in an area potentially connected to a purchased material. Responsible review neither accuses the supplier automatically nor ignores the report. It verifies links, assesses severity, engages safely with appropriate stakeholders and agrees measurable actions. Months later, the test is not whether a plan exists but whether affected people's situation has actually improved.",
   glossary:[["Due diligence","Ongoing process to identify, prevent, mitigate and account for adverse impacts."],["Severity","Scale, scope and difficulty of remedying an impact."],["Leverage","Practical ability to influence other organisations to prevent or mitigate harm."],["Remedy","Appropriate action to address adverse impacts under the applicable framework."],["Responsible disengagement","Leaving a business relationship while considering possible adverse consequences."]],
   checklist:["Who might be affected, and how?","Which sources are reliable, and which claims remain unverified?","Have severity and the supply-chain relationship been assessed?","Do corrective actions have deadlines and evidence of effectiveness?"],
   conclusion:"Human-rights due diligence is preventive, continuous and people-centred. Neither a lack of absolute certainty nor commercial savings justify ignoring credible signals of harm."
 }),
 chemical:chapter({
   subtitle:"REACH, fichas de seguridad y por qué una sustancia aceptable no equivale a una pieza aprobada",
   intro:[
     "Cuando un producto químico deja de estar disponible, un proveedor puede proponer otro tratamiento superficial. Aporta su composición y una ficha de datos de seguridad, pero faltan resultados sobre resistencia a la corrosión y la aprobación de ingeniería. A primera vista parece que hay «papeles de cumplimiento»; en realidad hay varias preguntas distintas por resolver.",
     "Esta lección explica por qué cumplimiento químico, gestión de peligros y cualificación técnica se relacionan, pero no se sustituyen. También muestra qué puede seguir investigándose mientras una propuesta todavía no está autorizada para instalarse."
   ],
   sections:[
     ["1. Qué aporta una ficha de datos de seguridad",[
       "Una ficha de datos de seguridad (FDS, SDS en inglés) facilita información sobre peligros de una sustancia o mezcla, medidas de protección, almacenamiento, manipulación y respuesta ante incidentes. Es una herramienta para gestionar riesgos químicos en los usos cubiertos.",
       "Una FDS no demuestra por sí sola que un recubrimiento tenga la adherencia, resistencia a la corrosión o durabilidad exigidas en una pieza. Tampoco implica aprobación de instalación o aeronavegabilidad."
     ]],
     ["2. Qué significa realmente REACH",[
       "REACH es el marco europeo relativo al registro, evaluación, autorización y restricción de sustancias químicas. Las obligaciones pertinentes pueden variar según sustancia, mezcla o artículo, rol de la empresa y uso específico. Una declaración genérica «cumple REACH» debe examinarse para saber qué requisito, producto, composición y periodo cubre.",
       "Una declaración de composición, una FDS y un informe de ensayos no hacen todos la misma función. La evaluación exige comprobar el requisito aplicable y si la evidencia recibida responde efectivamente a esa pregunta."
     ]],
     ["3. Cualificar el producto requiere otros ensayos",[
       "En una aplicación aeronáutica, una solución técnicamente adecuada podría necesitar ensayos representativos de corrosión, adherencia, compatibilidad con materiales vecinos, proceso de aplicación, condiciones de servicio y mantenimiento. Los criterios dependen de la pieza y del procedimiento aprobado.",
       "Puede autorizarse investigación controlada antes de contar con todos los resultados finales. Esto no significa que esté permitida la instalación en producto o su liberación para uso operativo. Es esencial distinguir la autorización para ensayar de la autorización para utilizar."
     ]],
     ["4. Una aprobación tiene configuración y límites",[
       "Una aprobación se refiere a materiales, formulaciones, proveedores, procesos, piezas y condiciones determinados. Si cambia la composición, la planta productiva, el uso, un ensayo decisivo o la configuración, puede ser necesario revisar la validez de las conclusiones.",
       "La escasez de existencias o un plazo urgente no elimina estos controles. Las funciones competentes deberán identificar qué se puede evaluar, qué debe permanecer detenido y qué pruebas y firmas serían necesarias para avanzar."
     ]]
   ],
   example:"Dos alternativas presentan fichas de seguridad actualizadas. La primera todavía no tiene pruebas representativas de corrosión; la segunda dispone de ensayos para una pieza diferente. Ninguna ficha, por muy completa que sea, autoriza su uso automáticamente. Se debe comprobar composición, requisitos legales, representatividad técnica y control de cambios para la aplicación específica.",
   glossary:[["REACH","Marco europeo de registro, evaluación, autorización y restricción de sustancias químicas."],["FDS / SDS","Ficha de datos de seguridad / Safety Data Sheet."],["Cualificación técnica","Demostración documentada de que una solución cumple requisitos definidos."],["Aprobación de ingeniería","Decisión formal de la función autorizada para una configuración y uso determinados."],["Control de cambios","Proceso para evaluar si las modificaciones alteran la conformidad o la validez de una aprobación."]],
   checklist:["¿Qué composición y uso cubre la declaración química?","¿La FDS aborda los peligros pertinentes y está actualizada?","¿Existen ensayos representativos para esta pieza y estas condiciones?","¿La función autorizada ha aprobado precisamente esta configuración?"],
   conclusion:"Cumplir un requisito químico y estar técnicamente aprobado son cosas diferentes. La sostenibilidad responsable evita sustituciones precipitadas sin sacrificar seguridad, cumplimiento ni calidad."
 },{
   subtitle:"REACH, safety data sheets and why an acceptable substance is not an approved part",
   intro:[
     "When a chemical product becomes unavailable, a supplier may propose an alternative surface treatment. It provides a composition statement and a safety data sheet, yet corrosion data and engineering approval are missing. There may be 'compliance paperwork', but several different questions still require answers.",
     "This chapter explains how chemical compliance, hazard management and technical qualification connect without replacing one another. It also shows what can be investigated while a proposal is not yet authorised for installation."
   ],
   sections:[
     ["1. What a safety data sheet tells us",[
       "A safety data sheet (SDS) provides information about chemical hazards, protection, storage, handling and emergency response for a substance or mixture and the uses it covers. It supports the safe management of chemical risks.",
       "An SDS does not by itself demonstrate that a coating has the required adhesion, corrosion resistance or durability on a particular part. Nor does it constitute approval for installation or airworthiness."
     ]],
     ["2. What REACH actually means",[
       "REACH is the European framework for the Registration, Evaluation, Authorisation and Restriction of Chemicals. Applicable obligations vary by substance, mixture or article, business role and intended use. A generic 'REACH compliant' claim must be checked for the exact obligation, composition, product and period it covers.",
       "A composition declaration, an SDS and a technical test report serve different purposes. Assess the requirement at issue and whether the supplied evidence answers that question."
     ]],
     ["3. Product qualification involves different tests",[
       "An aerospace solution may need representative evidence for corrosion, adhesion, compatibility with adjacent materials, application process, operating conditions and maintenance. Acceptance criteria depend on the part and its authorised procedures.",
       "Controlled investigation may be allowed before all final results are available. This does not automatically authorise installation or operational release. Permission to test and permission to use a product are distinct decisions."
     ]],
     ["4. Approval has configuration and limits",[
       "Approval applies to specific materials, formulations, suppliers, processes, parts and conditions. A change in composition, production site, use, critical test outcome or configuration can require reassessment of previous conclusions.",
       "Stock shortages and urgent deadlines do not remove these controls. Competent functions must identify what can be evaluated, what must remain blocked and which evidence and approvals are necessary before release."
     ]]
   ],
   example:"Two alternatives have up-to-date safety data sheets. The first lacks representative corrosion results; the second has test evidence for a different part. Neither safety sheet authorises use automatically. Composition, legal duties, technical relevance and change control must be checked for the specific application.",
   glossary:[["REACH","EU framework for the registration, evaluation, authorisation and restriction of chemicals."],["SDS","Safety Data Sheet."],["Technical qualification","Documented demonstration that a solution meets defined requirements."],["Engineering approval","Formal authorisation by a competent function for a specified configuration and use."],["Change control","Process for determining whether modifications affect compliance or approval validity."]],
   checklist:["What composition and use does the chemical declaration cover?","Is the SDS current and relevant to the hazards?","Are tests representative of this part and its operating conditions?","Has the competent authority approved this exact configuration?"],
   conclusion:"Meeting chemical requirements and holding technical approval are different matters. Responsible sustainability avoids rushed substitutions without sacrificing safety, compliance or quality."
 }),
 packaging:chapter({
   subtitle:"Cómo verificar la madera de embalaje antes de un envío internacional",
   intro:[
     "Un repuesto urgente debe enviarse fuera del país. La caja de madera muestra una marca poco legible, existe un certificado en PDF y la inspección observa corteza y una reparación reciente. ¿Debemos fiarnos del papel, enviar sin preguntar o cancelar todo? Ninguna de esas respuestas comprende por sí sola el problema.",
     "El embalaje es también una vía potencial de transporte de organismos perjudiciales para los ecosistemas. Por eso la gestión fitosanitaria forma parte de la responsabilidad ambiental y logística, incluso cuando lo que transportamos es una pieza aeronáutica."
   ],
   sections:[
     ["1. Para qué sirve la NIMF 15",[
       "La Norma Internacional para Medidas Fitosanitarias n.º 15 (NIMF 15, ISPM 15 en inglés) establece medidas para reducir el riesgo de movimiento internacional de organismos nocivos asociados con embalajes de madera. Según el tipo de embalaje y los requisitos del destino, incluye tratamientos aprobados y reglas de marcado.",
       "No todas las formas de embalaje están necesariamente sujetas a los mismos requisitos. Es importante comprobar si el material y la ruta entran en el ámbito de aplicación y qué condiciones impone el país de destino."
     ]],
     ["2. La marca y el estado físico deben cuadrar",[
       "Una marca válida se relaciona con el cumplimiento de las medidas reconocidas para ese embalaje. Pero una fotografía o un certificado de otro momento no reemplazan una inspección cuando la caja presenta una reparación o señales físicas contradictorias.",
       "La presencia de corteza tiene tolerancias establecidas por la norma; no siempre supone incumplimiento automático. Deben revisarse los límites aplicables, la legibilidad del marcado y el tratamiento de piezas añadidas o sustituidas."
     ]],
     ["3. Qué hacer cuando hay dudas concretas",[
       "La medida proporcionada consiste en identificar el embalaje afectado, retenerlo mientras se verifica y estudiar alternativas permitidas. Se puede consultar a la función competente, completar la inspección o valorar otro embalaje conforme que proteja adecuadamente el repuesto.",
       "Reembalar puede generar nuevos residuos; no debe elegirse sin considerar si la caja original puede verificarse y usarse legalmente. Sin embargo, prevenir riesgos fitosanitarios y cumplir los requisitos del destino tiene prioridad sobre la simple conveniencia logística."
     ]],
     ["4. Las excepciones requieren fundamento legal",[
       "Un proveedor o expedidor no puede inventar una excepción por urgencia. Si el embalaje queda fuera del ámbito de una norma o existe una disposición especial válida, debe identificarse de forma expresa y confirmar quién tiene autoridad para aplicarla.",
       "La documentación final debe demostrar qué unidad se ha verificado o sustituido, con qué evidencias, por quién, para qué ruta y con qué decisión autorizada. Una aprobación interna no sustituye una decisión que legalmente corresponda a una autoridad oficial."
     ]]
   ],
   example:"El certificado del proveedor parece correcto, pero la caja fue reparada después y parte de la marca está ilegible. La respuesta responsable es verificar si las piezas reparadas y el marcado cumplen el marco aplicable al destino. Si no puede acreditarse a tiempo, se considera reembalaje conforme. Esto evita tanto enviar a ciegas como cancelar una misión entera sin valorar alternativas.",
   glossary:[["NIMF 15 / ISPM 15","Norma internacional sobre medidas fitosanitarias para embalajes de madera en comercio internacional."],["Marca IPPC","Marcado reconocido para identificar el tratamiento fitosanitario conforme al régimen aplicable."],["Reparación de embalaje","Modificación de una unidad mediante sustitución o incorporación de partes."],["Control fitosanitario","Medidas para reducir la introducción y dispersión de plagas mediante comercio y transporte."],["Reembalaje","Traslado de la mercancía a otro embalaje que cumpla los requisitos de protección y destino."]],
   checklist:["¿Este embalaje está sujeto a NIMF 15 en la ruta concreta?","¿Coinciden la marca, la documentación y la condición física real?","¿Se verificaron la reparación y las tolerancias de corteza?","¿Quién puede autorizar legalmente la opción elegida y cómo se documentó?"],
   conclusion:"La sostenibilidad del transporte también exige evitar la propagación de plagas. Una decisión proporcionada combina inspección real, requisitos del destino, trazabilidad y alternativas conformes."
 },{
   subtitle:"How to verify wood packaging before an international shipment",
   intro:[
     "An urgent spare must travel abroad. Its wooden crate has a poorly legible mark, a PDF certificate exists and inspection reveals bark and a recent repair. Should we trust the paperwork, ship anyway or cancel everything? None of these alone is a complete decision.",
     "Wood packaging can also transport organisms harmful to ecosystems. Phytosanitary management is therefore part of environmental and logistics responsibility, even when the item inside is an aircraft spare."
   ],
   sections:[
     ["1. What ISPM 15 does",[
       "International Standard for Phytosanitary Measures No. 15 (ISPM 15) establishes measures to reduce the international movement of pests associated with wood packaging. Depending on the packaging and destination, it specifies approved treatments and marking rules.",
       "Not every packaging type necessarily falls under identical requirements. Check whether the material and route are in scope and what destination rules apply."
     ]],
     ["2. Marking and physical condition must agree",[
       "A valid mark relates to compliance with accepted measures for a packaging unit. But a photo or document from an earlier point does not replace physical inspection where a crate has been repaired or shows contradictory signs.",
       "ISPM 15 provides tolerances for residual bark, so its presence is not always automatic non-compliance. Review applicable limits, mark legibility and treatment of added or replaced wood."
     ]],
     ["3. What to do when a particular unit is uncertain",[
       "A proportionate response identifies and holds the affected packaging while checking it, then considers lawful alternatives. Competent personnel can review evidence, repeat inspection or assess replacement packaging that protects the spare.",
       "Repacking may create waste and should not be chosen without checking whether the original crate can be lawfully verified. However, pest prevention and destination requirements take precedence over logistics convenience."
     ]],
     ["4. Exceptions need a legal basis",[
       "Neither a supplier nor a shipper may invent an exception because the shipment is urgent. Where packaging is outside a rule's scope or a valid special arrangement exists, the basis and the authorised decision-maker must be identified.",
       "Final records should state which unit was verified or replaced, on which evidence, by whom, for which route and under what authority. An internal approval cannot replace a decision reserved by law to an official authority."
     ]]
   ],
   example:"A supplier certificate looks acceptable, but the crate was repaired afterwards and part of its mark is unreadable. Responsible action is to verify that repair and marking meet requirements for the destination. If evidence cannot be obtained in time, compliant repacking may be assessed. This avoids both blind shipment and automatically cancelling the entire mission.",
   glossary:[["ISPM 15","International standard for phytosanitary measures affecting wood packaging in international trade."],["IPPC mark","Recognised marking for wood packaging treated under relevant measures."],["Packaging repair","Modification of a unit by replacing or adding parts."],["Phytosanitary control","Measures to reduce pest introduction and spread through trade and transport."],["Repacking","Moving an item to other packaging that meets protection and destination requirements."]],
   checklist:["Is this packaging subject to ISPM 15 on the actual route?","Do the mark, documents and physical condition match?","Were repairs and bark tolerances checked?","Who may lawfully authorise the solution, and is the decision documented?"],
   conclusion:"Sustainable logistics also means preventing the spread of pests. A proportionate decision combines physical inspection, destination rules, traceability and compliant alternatives."
 }),
 obsolescence:chapter({
   subtitle:"Por qué una pieza más barata puede esconder riesgos técnicos y de suministro",
   intro:[
     "Una pieza electrónica deja de fabricarse. Aparece un sustituto más económico, pero procede de nuevos subcontratistas y no dispone de información completa sobre materiales críticos ni de todas las pruebas técnicas. El presupuesto mejora; la incertidumbre aumenta.",
     "La obsolescencia es normal en sistemas cuya vida de servicio es mucho más larga que la de sus componentes electrónicos. La cuestión es cómo gestionar los cambios sin crear dependencias innecesarias, perder trazabilidad ni asumir que una propuesta barata cumple automáticamente lo que exige el producto."
   ],
   sections:[
     ["1. Distinguir condiciones obligatorias de criterios comparables",[
       "Un requisito obligatorio —por ejemplo, una aprobación técnica exigida antes de instalar— es una condición de paso. No puede compensarse con un precio bajo, una entrega rápida o una puntuación ambiental favorable. Otras características, como coste o plazo, sí pueden compararse cuando las opciones superan los controles exigibles.",
       "Una tabla de selección responsable identifica primero qué requisitos son imprescindibles y quién puede comprobarlos. Después considera continuidad de suministro, alternativas, residuos, información social y materiales utilizados."
     ]],
     ["2. La aparente equivalencia puede ser insuficiente",[
       "Un componente puede tener una función declarada similar sin ser intercambiable para cualquier configuración. Pueden faltar ensayos, evidencia de fiabilidad o control de cambios. También puede depender de otro fabricante o tecnología cuya futura disponibilidad sea incierta.",
       "Sustituir sin suficiente información puede obligar a nuevas intervenciones o generar más residuos posteriormente. La mantenibilidad y las opciones de reparación forman parte de un enfoque responsable del ciclo de vida."
     ]],
     ["3. La cadena cambia cuando cambian los subcontratistas",[
       "Un sustituto puede incorporar nuevas empresas y materiales. La trazabilidad del componente anterior no se transmite automáticamente al nuevo. Debemos identificar qué niveles de suministro están documentados, dónde existe incertidumbre y cómo se comprobarán los riesgos sociales y de origen.",
       "Nunca se rellenan huecos con supuestos. Es mejor conservar el estado «información pendiente» con responsable y plazo que presentar como verificado un dato que nadie ha comprobado."
     ]],
     ["4. La decisión necesita varias disciplinas",[
       "Ingeniería, Calidad, Compras, Cumplimiento y otras funciones pueden tener responsabilidades diferentes. Cada una debe evaluar las condiciones de su ámbito; la conveniencia comercial no sustituye las autorizaciones obligatorias.",
       "Si aparecen riesgos graves, dependencia extrema de un proveedor, requisitos sin cumplir o decisiones fuera del nivel autorizado, debe escalarse con hechos, alternativas y consecuencias, no solo con la expresión «es urgente»."
     ]]
   ],
   example:"Dos sustitutos funcionan en un ensayo preliminar. El primero es más barato, pero depende de un único proveedor, no dispone de información completa sobre un material crítico y exige validaciones adicionales. El segundo dispone de mejor documentación, aunque cuesta más. No existe respuesta universal por el precio: primero se verifican los requisitos obligatorios y después se comparan riesgos, recursos, continuidad y coste.",
   glossary:[["Obsolescencia","Situación en la que un producto o tecnología deja de estar disponible o de satisfacer una necesidad."],["Requisito obligatorio o gate","Condición que debe cumplirse antes de avanzar a una aprobación o liberación."],["Control de configuración","Identificación de versiones y cambios para asegurar que se evalúa la pieza correcta."],["Proveedor único","Dependencia de una sola fuente de suministro."],["Última compra","Adquisición realizada antes de que un componente deje de comercializarse."]],
   checklist:["¿Qué requisitos son obligatorios y cuáles admiten comparación?","¿Está verificada la equivalencia para esta configuración?","¿Cambió la procedencia del material o la red de subcontratistas?","¿Quién debe evaluar o escalar los riesgos de continuidad, personas y cumplimiento?"],
   conclusion:"Gestionar bien la obsolescencia significa conservar opciones futuras sin sacrificar seguridad ni trazabilidad. La opción más barata hoy no tiene por qué ser la más responsable a lo largo del ciclo de vida."
 },{
   subtitle:"Why a cheaper replacement part can hide technical and supply risks",
   intro:[
     "An electronic part is discontinued. A cheaper replacement becomes available, but it introduces new subcontractors and lacks full critical-material information and technical testing. The budget looks better while uncertainty grows.",
     "Obsolescence is normal in systems whose operational life exceeds that of their electronics. The question is how to manage change without unnecessary dependencies, lost traceability or the assumption that low cost automatically means product suitability."
   ],
   sections:[
     ["1. Separate mandatory gates from criteria you can compare",[
       "A mandatory condition, such as required technical approval before installation, cannot be outweighed by lower price, faster delivery or an appealing environmental score. Other criteria, including cost and schedule, can be compared once applicable gates are satisfied.",
       "A responsible selection first identifies compulsory requirements and who verifies them. It then examines continuity of supply, alternatives, waste, social evidence and material use."
     ]],
     ["2. Apparent equivalence may be insufficient",[
       "A part may perform a seemingly similar function without being interchangeable in every configuration. Tests, reliability evidence or change control may be missing. A replacement may also depend on another manufacturer or technology with uncertain future availability.",
       "Substitution without adequate evidence can create further interventions and waste. Maintainability and repair options are part of a responsible life-cycle view."
     ]],
     ["3. The supply chain changes when subcontractors change",[
       "A new part may introduce different companies and materials. The previous part's traceability does not automatically transfer. Determine which supply tiers have supporting evidence, where uncertainty remains and how sourcing and social risks will be examined.",
       "Never fill information gaps with assumptions. 'Information pending', with an owner and deadline, is preferable to claiming a fact is verified when it has not been checked."
     ]],
     ["4. Decision-making needs several functions",[
       "Engineering, Quality, Procurement, Compliance and others may have distinct responsibilities. Each evaluates requirements within its remit; commercial convenience does not replace mandatory authorisations.",
       "Serious risks, extreme single-source dependency, unmet gates or matters outside delegated authority need escalation with evidence, alternatives and consequences—not just the statement 'this is urgent'."
     ]]
   ],
   example:"Two replacements pass a preliminary functional test. One is cheaper but depends on a single source, lacks full information on a critical material and requires more validation. The other is better documented but more expensive. Price alone cannot decide: mandatory gates come first, followed by a comparison of risk, resources, continuity and cost.",
   glossary:[["Obsolescence","When a product or technology becomes unavailable or no longer meets a need."],["Mandatory gate","A condition that must be met before approval or release."],["Configuration control","Tracking part revisions and changes to ensure the right configuration is assessed."],["Single-source supplier","Reliance on one source of supply."],["Last-time buy","An order placed before a part becomes unavailable."]],
   checklist:["Which requirements are mandatory, and which can be compared?","Is equivalence proven for this configuration?","Have material origin or subcontractors changed?","Who must assess or escalate continuity, people and compliance risks?"],
   conclusion:"Managing obsolescence means retaining future options without sacrificing safety or traceability. Today's cheapest option is not necessarily the most responsible across a product's life."
 }),
 conditional:chapter({
   subtitle:"Cómo decidir bajo presión cuando existen permisos, evidencias y responsabilidades diferentes",
   intro:[
     "En el último escenario confluyen varias situaciones: un recubrimiento pendiente de cualificación, información incompleta sobre el origen de un mineral y un embalaje que ha vuelto a inspeccionarse. La operación tiene una fecha crítica, pero ninguna persona posee necesariamente la autoridad para aprobarlo todo.",
     "Una aprobación condicionada puede ser una herramienta legítima en los ámbitos en que el marco aplicable la permita. No es, sin embargo, un modo de convertir requisitos obligatorios en opcionales ni una etiqueta única que sirva para todos los problemas."
   ],
   sections:[
     ["1. No todas las aprobaciones significan lo mismo",[
       "Una inspección de embalaje, una actividad experimental, la evaluación de un proveedor y una liberación técnica responden a requisitos y autoridades distintos. Haber completado una de ellas no significa que las otras estén satisfechas.",
       "La primera tarea consiste en separar cada condición, identificar su estado y evitar frases ambiguas como «todo está aprobado». Debe constar exactamente qué puede hacerse, quién lo ha autorizado y bajo qué límite."
     ]],
     ["2. Condicional significa alcance, controles y vencimiento",[
       "Cuando existe una vía formal válida, una decisión condicionada debe identificar objeto, actividad autorizada, riesgo residual, controles, evidencias pendientes, responsable y fecha de expiración o reevaluación.",
       "Si un requisito legal o técnico exige un cumplimiento previo y no hay excepción válida, no puede liberarse el producto por presión de plazo. El simple hecho de documentar una excepción no la hace legítima."
     ]],
     ["3. Se puede detener una liberación sin detener todo el aprendizaje",[
       "Si todavía falta una cualificación obligatoria, puede ser necesario bloquear la instalación o envío afectado. Eso no implica necesariamente detener ensayos controlados, investigaciones documentales o búsquedas de alternativas que estén permitidos y autorizados.",
       "Una parada proporcionada describe el objeto y el requisito: «esta unidad no puede utilizarse hasta cumplir X». Eso permite a los demás equipos saber qué trabajo está bloqueado y qué actuaciones aún pueden avanzar."
     ]],
     ["4. Un expediente de cierre debe poder reconstruirse",[
       "La revisión final debe conectar requisito, evidencia, responsables, decisión, alcance, acciones, plazos, resultados y condiciones para reabrir el caso. Es especialmente importante cuando participan varias disciplinas con aprobaciones parciales.",
       "Los documentos y sus versiones deben conservarse conforme a la gobernanza aplicable. La frase «aprobado» sin condiciones ni trazabilidad es insuficiente para saber qué estaba permitido y por qué."
     ]]
   ],
   example:"Un responsable recibe tres mensajes: «la caja está verificada», «hay un ensayo químico pendiente» y «Compras está trabajando en la trazabilidad mineral». No debe unirlos en un único «liberar». Primero determina qué implica cada estado y qué autorización falta. Puede continuar la investigación permitida, mientras la actividad sujeta a un requisito obligatorio no satisfecho permanece bloqueada.",
   glossary:[["Liberación","Autorización para una actividad o uso definidos, emitida por la función competente."],["Riesgo residual","Riesgo que permanece después de aplicar los controles pertinentes."],["Condición o restricción","Límite específico asociado a una decisión permitida."],["Vencimiento","Momento a partir del cual una decisión temporal debe revisarse o deja de ser aplicable."],["Escalación","Traslado documentado a quien tiene facultad para decidir sobre una situación."]],
   checklist:["¿Qué está efectivamente autorizado y para qué actividad?","¿Se ha superado cada requisito obligatorio aplicable?","¿Quién es responsable de cada condición y cuándo vence?","¿Se puede reconstruir la decisión y saber cuándo reabrirla?"],
   conclusion:"La presión operacional hace todavía más importante separar responsabilidades y evidencias. Una decisión responsable es clara en su alcance, válida según las reglas aplicables y trazable hasta las personas competentes."
 },{
   subtitle:"How to decide under pressure when approvals, evidence and responsibilities differ",
   intro:[
     "The final scenario combines several matters: an unqualified coating, incomplete mineral-origin information and packaging that has been re-inspected. The operation has a critical deadline, yet no single person necessarily has authority to approve every dimension.",
     "Conditional approval can be legitimate where the applicable rules allow it. It is not a way to make mandatory conditions optional, nor can one label cover every pending issue."
   ],
   sections:[
     ["1. Different approvals answer different questions",[
       "Packaging inspection, experimental work, supplier assessment and technical release address different requirements and decision owners. Completing one does not mean the others have been satisfied.",
       "The first task is to separate each condition, establish its status and avoid vague statements such as 'everything is approved'. Records should show what activity is allowed, who authorised it and its exact limits."
     ]],
     ["2. Conditional means scope, controls and expiry",[
       "Where a formally valid route exists, a conditional decision should specify the item, permitted activity, residual risk, controls, missing evidence, responsible owner and expiry or reassessment date.",
       "If a mandatory technical or legal gate must be met before release, and no valid exception exists, schedule pressure cannot authorise the product. Documenting an exception alone does not make it legitimate."
     ]],
     ["3. Blocking release need not block all investigation",[
       "Where mandatory qualification is missing, installation or shipment of an affected item may need to stop. That does not necessarily prevent permitted, authorised tests, document investigations or searches for alternatives.",
       "A proportionate stop identifies the item and unmet requirement: 'this unit cannot be used until X is satisfied'. This tells other teams what is blocked and what work may still proceed."
     ]],
     ["4. The final case must be reconstructable",[
       "Closure records should connect requirements, evidence, owners, decisions, scope, actions, dates, results and triggers for reopening. This is particularly important when several functions have given different partial approvals.",
       "Documents and revisions must be retained under applicable governance. 'Approved' without conditions or traceability is not enough to explain what was permitted and why."
     ]]
   ],
   example:"A manager receives three messages: 'the crate has been verified', 'a chemical test is still pending' and 'Procurement is investigating mineral traceability'. These cannot be combined into a single 'release'. Each status and missing authorisation must be evaluated separately. Permitted investigation can continue while an activity dependent on an unmet mandatory gate remains blocked.",
   glossary:[["Release","Authorisation for a defined activity or use by the competent function."],["Residual risk","Risk remaining after relevant controls are applied."],["Condition or restriction","A specific limit attached to an otherwise permitted decision."],["Expiry","The point at which a temporary decision must be reviewed or ceases to apply."],["Escalation","Documented referral to a person or body empowered to decide."]],
   checklist:["What exactly is authorised, and for which activity?","Has every applicable mandatory gate been satisfied?","Who owns each condition and when does it expire?","Can the decision be reconstructed and its review triggers identified?"],
   conclusion:"Operational pressure makes clear responsibilities and evidence even more essential. A responsible decision has a defined scope, a valid basis under applicable rules and a traceable competent authority."
 })
};
})(window);
