/* Applied decision theory: 18 native bilingual explanations, available only after reviewing a scenario.
   Educational guidance; actual regulatory applicability and authorised processes must be checked. */
(function(root){"use strict";
const t=(es,en)=>({es,en});
const lesson=(es,en)=>({
 title:t(es[0],en[0]),why:t(es[1],en[1]),principle:t(es[2],en[2]),
 steps:t(es[3],en[3]),limits:t(es[4],en[4]),atWork:t(es[5],en[5])
});
root.SCReviewTheory={
 origin:[
 lesson(
 ["La falta de trazabilidad es una incertidumbre que debemos investigar",
  "Sabemos quién nos vende las placas (proveedor directo o Tier 1), pero no dónde se transformó el tantalio. El procesador o instalación de fundición/refinado es un eslabón diferente. Por eso una declaración genérica del proveedor no demuestra por sí sola el origen del mineral ni las condiciones de su cadena de suministro. Tampoco demuestra automáticamente que exista una infracción: ambas conclusiones serían prematuras.",
  "La diligencia debida basada en riesgos distingue los hechos conocidos, los datos no verificados y los indicios de impactos. Los minerales 3TG (estaño, tantalio, wolframio y oro) requieren especial atención a los riesgos de conflicto y abusos; las obligaciones legales concretas dependen del operador, producto y jurisdicción.",
  ["Solicitar al proveedor identificación de las instalaciones pertinentes y periodo al que se refiere la información.","Pedir el alcance y método de la declaración, las fuentes de verificación y las limitaciones de trazabilidad.","Registrar el dato pendiente, valorar su importancia y establecer responsable y fecha de seguimiento."],
  "Identificar una fundición no equivale a garantizar que toda la cadena esté libre de riesgos. Una lista de instalaciones, una certificación o una declaración constituyen evidencias de alcance limitado y deben evaluarse críticamente.",
  "Cuando falte el origen de un material, no marques automáticamente «conforme» o «incumple»: anota «no verificado», justifica el riesgo y solicita datos concretos."],
 ["Missing traceability is an uncertainty to investigate",
  "We know the direct seller (Tier 1), but not the facility that processed the tantalum. The processor, smelter or refiner is a different link in the chain. A generic supplier declaration therefore does not establish mineral origin or upstream conditions. Equally, missing information alone does not prove a legal breach or adverse impact; either conclusion would be premature.",
  "Risk-based due diligence distinguishes verified facts, unknown information and credible indicators of adverse impacts. The 3TG minerals (tin, tantalum, tungsten and gold) deserve particular attention regarding conflict and abuse risks; the specific legal obligations depend on the operator, product and jurisdiction.",
  ["Request the relevant processing facilities and the period covered by the supplier's information.","Check the declaration's scope, verification method, underlying evidence and traceability limitations.","Record the open gap, assess its significance and assign an owner and follow-up date."],
  "Identifying a smelter does not guarantee that an entire chain is risk-free. Facility lists, certificates and declarations have limited scopes and must be assessed critically.",
  "When material origin is unclear, do not automatically mark it compliant or non-compliant. Record it as unverified, explain the risk and request targeted evidence."]
 ),
 lesson(
 ["Separar dos decisiones que no tienen la misma autoridad",
  "Una necesidad de disponibilidad urgente (AOG: aeronave inmovilizada) puede exigir una respuesta rápida, pero no convierte un documento genérico en evidencia suficiente. La liberación técnica determina si el producto puede usarse según sus requisitos de diseño y seguridad. La diligencia debida de suministro investiga riesgos sociales, ambientales y de procedencia. Ambas revisiones pueden influir en una decisión, pero ninguna reemplaza a la otra.",
  "Los controles deben ser proporcionales a gravedad, incertidumbre y requisitos obligatorios. Una medida temporal no autoriza incumplir una prohibición ni un requisito técnico o legal. La autoridad competente debe evaluar si existe alguna vía permitida y qué condiciones documentadas proceden.",
  ["Identificar qué decisión puede tomar cada función: Ingeniería/Calidad, Compras, Cumplimiento y autoridad de liberación.","Escalar el origen desconocido con evidencia disponible, exposición y alternativas de suministro.","Definir controles autorizados, responsables, plazo y disparadores de revisión; detener lo que no pueda aprobarse legalmente."],
  "La opción correcta no significa «liberar aunque falten documentos»: significa evitar una aprobación implícita. Si hay una obligación que impide liberar, la operación debe permanecer detenida hasta cumplirla o utilizar una vía formalmente válida.",
  "Ante un plazo crítico, plantea por separado el estado técnico, el cumplimiento obligatorio y las dudas de suministro; pide decisiones explícitas a cada responsable."],
 ["Separate decisions that require different authority",
  "An urgent AOG (aircraft on ground) requirement calls for speed but does not turn a generic declaration into sufficient evidence. Technical release addresses whether a product meets applicable design and safety requirements. Supply-chain due diligence investigates social, environmental and sourcing risks. Both reviews may affect an outcome, but neither replaces the other.",
  "Controls must be proportionate to severity, uncertainty and mandatory requirements. A temporary control cannot waive a prohibition or a mandatory technical or legal gate. The competent authority must determine whether any lawful route exists and what conditions apply.",
  ["Identify the owners of technical/quality release, procurement, compliance and any other required approvals.","Escalate the unknown origin with available facts, exposure and sourcing alternatives.","Define authorised controls, owners, time limits and review triggers; stop anything that cannot lawfully be approved."],
  "The correct option does not mean 'release while evidence is missing'. It means avoiding implied approval. If a mandatory requirement prevents release, the operation stays blocked unless it is met or a formally valid route exists.",
  "Under schedule pressure, report technical status, mandatory compliance and sourcing uncertainty separately; seek explicit decisions from the right owners."]
 ),
 lesson(
 ["Una trazabilidad de decisiones permite comprobar qué se autorizó",
  "El registro de auditoría (audit trail) debe permitir que una persona que no participó en el caso reconstruya la situación: qué conocíamos, qué faltaba, quién evaluó cada riesgo, quién tenía autoridad y en qué condiciones se tomó la decisión. Guardar únicamente el precio o los correos no muestra cómo se llegó a una conclusión.",
  "Una decisión es trazable cuando enlaza fuentes, versiones, fechas, hipótesis, valoración de riesgos, condiciones, acciones correctivas, aprobación por la autoridad correspondiente y motivos para reabrir el caso. Esto evita que una aceptación parcial se interprete como aprobación ilimitada.",
  ["Referenciar declaraciones, documentación técnica, listas de materiales y consultas al proveedor con sus fechas.","Registrar carencias, hipótesis, decisión, responsable y, si procede, condiciones expresas y fecha de vencimiento.","Definir un disparador: cambio de proveedor, nueva instalación de refinado, información contradictoria o vencimiento del plazo."],
  "El expediente no sustituye los requisitos materiales: documentar una excepción no la convierte en legal. Se debe conservar un historial coherente y aplicar las reglas de protección de datos y retención documental pertinentes.",
  "Redacta las decisiones para que un compañero pueda responder «¿quién autorizó qué, por qué y hasta cuándo?» sin reconstruir una conversación de correos."],
 ["An audit trail shows exactly what was authorised",
  "An audit trail should let someone who was not involved reconstruct the case: what was known, what was missing, who assessed each risk, who had authority and what conditions applied. A final price or a folder of supplier emails alone cannot explain the reasoning.",
  "A traceable decision links sources, versions, dates, assumptions, risk assessments, conditions, corrective actions, the competent approver and reasons to reopen the case. This prevents partial acceptance being mistaken for unlimited approval.",
  ["Reference dated declarations, technical records, bills of materials and supplier requests.","Record gaps, assumptions, decision, owner and any explicit conditions or expiry dates.","Set a trigger: supplier change, a new processing facility, contradictory evidence or a time-limit expiry."],
  "Documentation is not a substitute for substantive compliance: recording an exception does not make it lawful. Maintain a coherent history under applicable retention and data-protection rules.",
  "Write decisions so a colleague can answer 'who authorised what, why, and until when?' without searching an email chain."]
 )
 ],
 rights:[
 lesson(
 ["Priorizar por el daño potencial sobre las personas",
  "El caso contiene indicios creíbles de conflictos de tierras y condiciones laborales, aunque no haya sentencia judicial. En diligencia debida, no hay que esperar a que un tribunal resuelva para investigar un riesgo potencial. El análisis debe atender al tipo de impacto, las personas afectadas y la relación de nuestra actividad con los hechos.",
  "Las guías de conducta empresarial responsable de la OCDE utilizan la gravedad del impacto, atendiendo a escala o intensidad, alcance y dificultad de reparación. Para impactos potenciales se considera además su probabilidad y la información disponible. Un impacto muy grave puede requerir atención prioritaria aun con incertidumbre.",
  ["Precisar qué alegaciones están verificadas, su fuente y qué población podría resultar afectada.","Evaluar gravedad, alcance, posibilidad de reparación, probabilidad y vínculo con la cadena de suministro.","Dar prioridad a riesgos severos y buscar información adicional de fuentes independientes y personas afectadas cuando sea adecuado."],
  "No se debe calificar públicamente al proveedor como culpable sin evidencias. Tampoco la ausencia de resolución judicial o un ahorro económico permiten clasificar los riesgos humanos como irrelevantes.",
  "Si encuentras una denuncia creíble, anota qué se sabe y qué falta; pregunta cómo puede afectar a las personas, no solo al coste o al plazo."],
 ["Prioritise potential harm to people",
  "The case contains credible signals of land disputes and labour concerns despite the absence of a court ruling. Due diligence does not require waiting for litigation before investigating potential risk. Assessment must consider the nature of impacts, affected people and the relationship to the business.",
  "OECD responsible business conduct guidance assesses severity through scale (intensity), scope and irremediability. For potential impacts, likelihood and available information also matter. A potentially very severe impact may warrant priority despite uncertainty.",
  ["Separate verified allegations from unconfirmed reports and identify affected populations.","Evaluate severity, scope, ability to remedy, likelihood and the supply-chain relationship.","Prioritise severe risks and seek independent evidence and appropriate input from affected people."],
  "Do not publicly accuse a supplier without evidence. Equally, no court ruling or a low purchase price makes a human-rights risk irrelevant.",
  "When you encounter credible allegations, record what is known and unknown, and ask how people may be affected—not only about cost and schedule."]
 ),
 lesson(
 ["Escalar señales creíbles antes de que el daño empeore",
  "Escalar no significa declarar culpable al proveedor ni detener toda actividad automáticamente. Significa llevar la información y las opciones a quienes tienen autoridad para evaluar y actuar. Ante señales creíbles de impactos graves, esperar a una prueba definitiva podría permitir que continúen o se agraven los daños.",
  "La diligencia debida es preventiva. La empresa debe analizar su posible implicación —causar, contribuir o estar directamente vinculada mediante relaciones comerciales— y qué capacidad de influencia (leverage) puede ejercer para prevenir o mitigar efectos. Las respuestas pueden incluir investigación, colaboración, planes de mejora, condiciones, suspensión o desvinculación responsable.",
  ["Presentar hechos, fuentes, incertidumbres, posible gravedad, vínculo y urgencia.","Identificar responsables de Compras, Cumplimiento y funciones de derechos humanos cuando existan.","Proponer controles y una fecha de revisión; solicitar interacción segura con partes interesadas si procede."],
  "No debe confundirse capacidad de influencia con facultad de imponer cualquier actuación. Las medidas se ajustarán a la relación comercial y deben evitar riesgos adicionales para denunciantes o comunidades.",
  "Al detectar señales de abusos, prepara un resumen verificable y eleva alternativas antes de que el problema dependa de una sola persona."],
 ["Escalate credible signals before harm worsens",
  "Escalation is not a declaration of supplier guilt or an automatic stop order. It brings information and options to those with authority to act. Where credible severe-impact signals exist, waiting for absolute proof can allow harm to continue or worsen.",
  "Due diligence is preventive. Assess whether the enterprise causes, contributes to or is directly linked to an impact through a business relationship, and what leverage it can use to prevent or mitigate harm. Responses may include investigation, engagement, improvement plans, conditions, suspension or responsible disengagement.",
  ["Present facts, sources, uncertainty, possible severity, linkage and urgency.","Identify procurement, compliance and relevant human-rights decision owners.","Propose controls and a review date; seek safe engagement with stakeholders when appropriate."],
  "Leverage does not mean unlimited control over a supplier. Measures must reflect the business relationship and avoid creating additional risks for complainants or communities.",
  "When abuse signals arise, build a verifiable briefing and raise options before responsibility is left with a single person."]
 ),
 lesson(
 ["Una acción correctiva debe demostrar resultados, no promesas",
  "El proveedor presenta un compromiso genérico, pero no sabemos quién lo ejecutará, cómo se evaluará o cuándo terminará. Para abordar condiciones laborales o conflictos con comunidades, no basta con recibir otro documento; se necesita comprobar si se han cambiado las prácticas y si los afectados disponen de canales adecuados.",
  "Una acción correctiva robusta especifica el impacto que debe prevenirse o remediarse, la medida concreta, el responsable, el calendario, los recursos y los indicadores de eficacia. Según el vínculo de la empresa con el daño, podrían ser necesarias contribuciones a la reparación o mecanismos legítimos de reclamación.",
  ["Acordar acciones medibles, propietario, plazos y fuentes de evidencia independientes cuando proceda.","Consultar de forma apropiada y segura a personas potencialmente afectadas; proteger la confidencialidad.","Verificar implementación y eficacia, documentar desviaciones y decidir si se mantienen condiciones o es necesaria una salida responsable."],
  "Cambiar de proveedor sin evaluar las consecuencias puede desplazar el problema y perjudicar a las personas. La desvinculación puede llegar a ser adecuada, pero exige análisis del impacto de la transición.",
  "No cierres una incidencia únicamente al recibir un plan: comprueba si mejoraron los hechos que motivaron la incidencia."],
 ["A corrective action must show results, not promises",
  "The supplier has offered a general commitment but no clear implementation, verification or timetable. Labour or community concerns require more than another document; the key question is whether practices change and whether affected people have appropriate channels for concerns and remedy.",
  "A robust corrective action identifies the impact to prevent or remedy, a specific measure, a responsible owner, deadlines, resources and effectiveness indicators. Depending on the enterprise's link to harm, cooperation in remedy or legitimate grievance mechanisms may be appropriate.",
  ["Agree measurable actions, owners, milestones and independent evidence where appropriate.","Engage appropriately and safely with potentially affected people while protecting confidentiality.","Check implementation and effectiveness, record deficiencies and determine whether conditions or responsible exit are needed."],
  "Switching suppliers without considering consequences may shift problems and harm people. Disengagement can be appropriate, but the impacts of transition should be assessed.",
  "Do not close an issue merely because a plan was received; verify whether the underlying conditions have actually improved."]
 )
 ],
 chemical:[
 lesson(
 ["Una ficha de seguridad no es la aprobación de un tratamiento aeronáutico",
  "Una ficha de datos de seguridad (FDS; SDS en inglés) informa sobre peligros, exposición, manipulación y medidas de protección de sustancias o mezclas. Una declaración vinculada a REACH puede aportar información para evaluar obligaciones químicas aplicables. Ninguno de esos documentos demuestra por sí solo que el nuevo recubrimiento sea adecuado para prevenir la corrosión en una pieza aeronáutica concreta.",
  "Hay dos preguntas distintas: ¿cumple la composición los requisitos químicos aplicables al uso previsto? y ¿está la alternativa técnicamente cualificada y autorizada para esa configuración? Ambas pueden necesitar evidencias y autoridades diferentes. Las decisiones técnicas deben contemplar durabilidad, adherencia, compatibilidad e interfaces según el caso.",
  ["Revisar composición, sustancias relevantes, restricciones, autorizaciones y alcance de la información regulatoria.","Identificar ensayos representativos, condiciones de servicio, criterios de aceptación y control de cambios.","Solicitar a las funciones autorizadas la evaluación y aprobación formal antes del uso en producto."],
  "Una declaración REACH no equivale a una «certificación REACH» universal. Las obligaciones exactas dependen de la sustancia, artículo, actor y uso. La cualificación técnica no reemplaza el cumplimiento químico ni a la inversa.",
  "Cuando un proveedor dice «cumple REACH», pregunta exactamente qué requisito cubre y qué evidencia de rendimiento técnico falta."],
 ["A safety data sheet is not an aerospace coating approval",
  "A safety data sheet (SDS) explains chemical hazards, exposure, handling and protective measures for substances or mixtures. A REACH-related declaration may provide evidence relevant to applicable chemical obligations. Neither document, on its own, shows that a new surface treatment can safely deliver required corrosion protection on a specific aircraft part.",
  "Two separate questions arise: does the chemistry meet applicable requirements for the intended use, and is the alternative technically qualified and authorised for that configuration? Different evidence and authorities may be needed. Technical assessment may involve durability, adhesion, compatibility and interfaces.",
  ["Review composition, relevant substances, restrictions, authorisations and the scope of regulatory information.","Identify representative tests, service conditions, acceptance criteria and change control.","Seek formal assessment and approval by authorised functions before use on product."],
  "A REACH declaration is not a universal 'REACH certificate'. Specific duties depend on substance, article, actor and use. Technical qualification cannot replace chemical compliance, or vice versa.",
  "When a supplier says 'REACH compliant', ask which requirement is covered and what technical performance evidence is still needed."]
 ),
 lesson(
 ["Se puede investigar sin autorizar una instalación en servicio",
  "La alternativa propuesta no dispone aún de todos los ensayos relevantes ni de aprobación de ingeniería. Usarla directamente en toda la flota transformaría una hipótesis en una modificación no validada. Sin embargo, detener la liberación no obliga a cancelar la generación de pruebas: puede organizarse trabajo de laboratorio o evaluación controlada con los permisos adecuados.",
  "Conviene separar actividades de evaluación (muestras, ensayos, análisis de riesgos) de las decisiones que permiten instalar, liberar o usar un producto. Una actividad experimental puede tener sus propios controles, pero no sustituye los hitos obligatorios de cualificación y aprobación.",
  ["Definir el alcance de muestras y ensayos bajo el procedimiento autorizado.","Completar evidencia de composición, corrosión, compatibilidad, seguridad, calidad y configuración según aplique.","Solicitar evaluación de resultados y autorización documentada; no liberar producto sin superar los requisitos que correspondan."],
  "Los controles experimentales también están sujetos a reglas de seguridad y medio ambiente. La urgencia por agotamiento de existencias no legitima saltarse un hito obligatorio.",
  "Distingue siempre «podemos evaluarlo» de «podemos instalarlo o utilizarlo». No son la misma autorización."],
 ["Testing may proceed without authorising installation in service",
  "The proposed alternative lacks relevant test evidence and engineering approval. Installing it across a fleet would turn a hypothesis into an unvalidated change. But blocking release does not mean all evidence-gathering must stop: laboratory tests or controlled assessments may proceed with the right permissions.",
  "Separate investigative work (samples, tests and risk assessment) from decisions authorising installation, product release or operational use. Experimental activity may require its own controls and does not replace mandatory qualification and approval gates.",
  ["Define a controlled scope for samples and tests under authorised procedures.","Complete applicable composition, corrosion, compatibility, safety, quality and configuration evidence.","Obtain documented assessment and authorisation; do not release product before the relevant requirements are satisfied."],
  "Experimental activity is itself subject to safety and environmental controls. Urgent stock shortages do not justify skipping a mandatory gate.",
  "Always distinguish 'we can investigate it' from 'we can install or use it'. These are separate authorisations."]
 ),
 lesson(
 ["Una aprobación tiene límites y debe revisarse cuando cambia la realidad",
  "La composición del tratamiento, el proceso de aplicación, el proveedor, el uso previsto y los resultados de ensayo influyen en la validez de la evaluación. Si uno de ellos cambia, no podemos suponer que las conclusiones anteriores siguen aplicando automáticamente.",
  "El control de configuración y la gestión de cambios exigen identificar qué se aprobó: material, formulación, proceso, pieza, condiciones de servicio, evidencia y versiones documentales. Los disparadores de reevaluación son cambios que podrían alterar la conformidad química, el comportamiento técnico o ambos.",
  ["Registrar formulación, proveedor, proceso y uso o configuración cubiertos por la decisión.","Definir qué tipos de cambio activan revisión técnica y regulatoria.","Actualizar pruebas, riesgos, condiciones de uso y autorización antes de aplicar una alternativa modificada."],
  "Un control anual puede complementar el seguimiento, pero no sustituye la revisión provocada por un cambio relevante. Una firma no es una autorización ilimitada en el tiempo o en todas las aeronaves.",
  "Pregunta ante cualquier sustitución: «¿Es exactamente la configuración evaluada? Si no, ¿qué debe revisarse antes de usarla?»"],
 ["An approval has boundaries and must be reconsidered when facts change",
  "Coating composition, application process, supplier, intended use and test outcomes all affect the basis of an approval. If one changes, previous conclusions cannot automatically be assumed to remain valid.",
  "Configuration management and change control should identify precisely what was authorised: material, formulation, process, part, service conditions, evidence and document revisions. Review triggers are changes that may alter chemical compliance, technical performance or both.",
  ["Record the formulation, supplier, process and exact use or configuration covered.","Specify changes that trigger engineering and regulatory reassessment.","Update tests, risk assessment, use conditions and authorisation before using a changed alternative."],
  "An annual review can support oversight but cannot replace event-driven checks. A signature is not universal authorisation for any date or aircraft.",
  "For every substitution ask: 'Is this exactly the assessed configuration? If not, what must be reconsidered?'"]
 )
 ],
 packaging:[
 lesson(
 ["El embalaje real importa tanto como sus documentos",
  "La Norma Internacional para Medidas Fitosanitarias n.º 15 (NIMF 15 / ISPM 15) regula la madera de embalaje utilizada en el comercio internacional según la ruta y los requisitos aplicables. Una marca visible y válida indica tratamiento conforme a la norma; no basta con un PDF aparentemente correcto si la madera inspeccionada presenta señales que cuestionan la marca, la reparación o el tratamiento.",
  "La inspección debe relacionar documento, marca IPPC, estado físico, reparaciones y país de destino. La NIMF 15 especifica tratamientos autorizados, marcado y condiciones para reutilización y reparación. La presencia de algo de corteza tiene tolerancias técnicas: no es siempre incumplimiento automático, pero es un motivo para verificar.",
  ["Comprobar marca legible y trazable, tipo de embalaje, ruta y requisitos del destino.","Revisar reparación, piezas añadidas, evidencia de tratamiento y presencia de corteza conforme a los límites aplicables.","Registrar fotografías y dudas, y consultar a la función fitosanitaria o logística competente antes de autorizar el envío."],
  "El tratamiento y el marcado no se pueden dar por válidos solo porque el proveedor envíe un certificado. Tampoco debe declararse incumplimiento por cualquier fragmento de corteza sin aplicar la norma y verificar sus tolerancias.",
  "Antes de un envío internacional, compara lo que dice el papel con lo que muestra el embalaje y con el destino real."],
 ["The actual packaging matters as much as its paperwork",
  "International Standard for Phytosanitary Measures No. 15 (ISPM 15) addresses wood packaging in international trade, subject to the relevant route and rules. A valid mark indicates an accepted treatment under the standard; a plausible PDF alone cannot resolve contradictory physical evidence concerning the mark, repair or treatment.",
  "Inspection must connect the documents, IPPC mark, physical condition, repairs and destination. ISPM 15 specifies approved treatments, marking and conditions for repair and reuse. Some residual bark is permitted within technical tolerances: its presence is not automatically a failure, but it warrants checking.",
  ["Check a readable, traceable mark, packaging category, journey and destination requirements.","Assess repairs, added pieces, treatment evidence and any bark against relevant limits.","Document photos and uncertainties, and consult competent phytosanitary or logistics personnel before release."],
  "Treatment and marking cannot be assumed valid because a supplier sends a certificate. Equally, not every bark fragment is non-compliance without checking the standard's tolerances.",
  "Before an international shipment, compare the paperwork with the actual packaging and its destination."]
 ),
 lesson(
 ["Retener el embalaje afectado permite corregir sin cancelar todo",
  "El caso presenta señales físicas y dudas específicas sobre una unidad de embalaje, no una conclusión de que toda la misión sea inviable. Permitir que salga sin comprobarlas trasladaría el riesgo a frontera, receptor y operación. Una alternativa proporcionada consiste en aislar esa unidad, verificarla o utilizar otra unidad conforme.",
  "La medida correctiva debe actuar sobre el objeto y requisito que generan la duda. El reembalaje, si se realiza con material y marcas válidos para el destino, puede ser una alternativa a retrasar todo el envío; requiere también valorar la protección del repuesto, coste, tiempo y residuos.",
  ["Identificar y retener el embalaje concreto en cuestión, sin confundirlo con una parada global automática.","Solicitar verificación y, si no se resuelve a tiempo, valorar reembalaje con material aceptado para la ruta.","Registrar responsable, nueva inspección, efecto sobre la planificación y correcta gestión del embalaje retirado."],
  "El reembalaje no es automáticamente mejor desde el punto de vista ambiental: puede generar residuos. Primero se valora si la unidad puede verificarse y utilizarse legalmente; la seguridad fitosanitaria y los requisitos del destino prevalecen.",
  "Cuando una unidad presenta dudas, busca una solución delimitada, documentada y conforme antes de decidir cancelar una operación completa."],
 ["Hold the affected packaging rather than automatically cancelling everything",
  "The case raises physical concerns about one packaging unit, not proof that the entire mission is impossible. Shipping without checking passes the risk to border controls, recipients and operations. A proportionate response is to isolate that unit, verify it or use compliant replacement packaging.",
  "Corrective action should address the specific object and requirement at issue. Repacking with valid, accepted material can be an alternative to stopping the whole shipment, but protection of the spare, schedule, cost and waste must also be considered.",
  ["Identify and hold the particular packaging unit without automatically blocking all other work.","Seek verification; if timely resolution is impossible, consider compliant packaging for that route.","Record responsibility, reinspection, schedule implications and correct treatment of removed packaging."],
  "Repacking is not automatically the lowest-impact choice because it may generate waste. First assess whether the original unit can lawfully be verified and used; phytosanitary and destination requirements remain mandatory.",
  "When one unit is questionable, seek a documented, bounded solution before cancelling an entire operation."]
 ),
 lesson(
 ["Una excepción debe existir en la norma y pasar por la autoridad competente",
  "Quien prepara el envío o vende la madera no puede inventar una excepción a los controles fitosanitarios. Algunas categorías de embalaje pueden quedar fuera del alcance de la norma y ciertos acuerdos o disposiciones permiten tratamientos alternativos; su existencia y condiciones tienen que verificarse para la ruta real.",
  "Las decisiones sobre alcance, admisibilidad y posibles medidas oficiales corresponden a las autoridades y funciones formalmente competentes según la legislación aplicable. Las excepciones nunca surgen de la urgencia operativa, del coste ni de la mera aceptación informal de un proveedor.",
  ["Comprobar si la unidad está realmente sujeta a NIMF 15 y qué requisitos establece el destino.","Identificar una exclusión o vía formal concreta —si existe— y quién puede validarla.","Documentar fundamento, condiciones, responsable y evidencia antes de utilizar esa vía o enviar la carga."],
  "No debe sugerirse que una autoridad interna puede eximir cualquier requisito legal. Donde sea necesaria una decisión de autoridad oficial, la empresa no puede sustituirla por una firma interna.",
  "Cuando alguien proponga «hacer una excepción por urgencia», pide la referencia normativa exacta y quién está legalmente autorizado para decidir."],
 ["An exception must exist in the rules and be decided by the competent authority",
  "A shipper or wood supplier cannot invent an exception to phytosanitary requirements. Some packaging categories are outside the standard's scope, and certain arrangements may allow alternative measures; their existence and conditions must be checked for the actual route.",
  "Decisions about scope, admissibility and any official measures belong to competent functions and authorities under applicable rules. Exceptions are not created by schedule pressure, costs or informal supplier acceptance.",
  ["Verify whether the specific unit is subject to ISPM 15 and what the destination requires.","Identify a concrete legal exclusion or formal route—if any—and the authorised decision-maker.","Record the legal basis, conditions, owner and supporting evidence before using that route or shipping."],
  "Do not imply that an internal approver can waive any legal duty. Where a decision belongs to an official authority, an internal signature cannot substitute for it.",
  "When someone suggests 'an urgent exception', ask for the exact legal provision and the person or body legally empowered to decide."]
 )
 ],
 obsolescence:[
 lesson(
 ["Las condiciones obligatorias no se compensan con un precio bajo",
  "Un nuevo componente puede parecer funcionalmente equivalente y costar menos, pero aún faltar ensayos, información sobre el origen de los materiales o evaluación de nuevos subcontratistas. Convertir todo en una puntuación media de coste ocultaría fallos que deben resolverse antes de aprobar la sustitución.",
  "Un hito o requisito obligatorio (gate) funciona como condición de paso: si no se cumple, una ventaja comercial no lo anula. Aparte pueden compararse coste, plazo, continuidad, impactos y riesgos de aprovisionamiento, sin dejar que una cifra económica compense una obligación legal o técnica.",
  ["Separar requisitos técnicos, normativos y de configuración que no pueden omitirse.","Evaluar origen, condiciones laborales, continuidad, opciones y coste en apartados diferenciados.","Definir responsables por disciplina, evidencias pendientes y una decisión integradora solo tras cumplir los requisitos obligatorios."],
  "No todos los criterios son absolutos; algunos admiten análisis de compensaciones. Lo importante es que el equipo identifique explícitamente cuáles son obligatorios y cuáles son opciones sujetas a evaluación.",
  "En una tabla de comparación, no promedies precio y seguridad como si tuvieran la misma función: marca primero los requisitos que ninguna oferta puede incumplir."],
 ["Mandatory gates cannot be offset by a low price",
  "A replacement component may look functionally equivalent and cost less while lacking tests, mineral-origin information or assessment of new subcontractors. Turning everything into one average cost score hides failures that must be resolved before approval.",
  "A mandatory gate is a condition for proceeding: where it is not met, a commercial advantage does not override it. Cost, schedule, continuity, impacts and sourcing risk can then be compared separately without using a financial benefit to offset legal or technical obligations.",
  ["Separate non-negotiable technical, regulatory and configuration requirements.","Evaluate origin, labour conditions, continuity, alternatives and cost in distinct workstreams.","Assign functional owners and pending evidence; integrate a decision only after mandatory gates are satisfied."],
  "Not every criterion is absolute; some allow legitimate trade-offs. The team must distinguish mandatory conditions from criteria open to assessment.",
  "In supplier comparisons, do not average price and safety as though they play the same role. Identify first which requirements no offer may fail."]
 ),
 lesson(
 ["La trazabilidad parcial se conserva como parcial",
  "La lista del proveedor directo no identifica necesariamente todos los subcontratistas ni el origen de cada material crítico. Rellenar huecos con supuestos crea una falsa cadena documental; afirmar cumplimiento sin conocer el alcance de la declaración puede ser igualmente engañoso.",
  "La evidencia útil indica el dato, la fuente, el periodo, el nivel de cadena cubierto y su fiabilidad. Una ausencia debe figurar expresamente como pendiente, junto con el motivo de importancia, el responsable de conseguirla y la decisión provisional autorizada, si es posible legalmente.",
  ["Dibujar qué niveles y materiales se conocen y cuáles no.","Solicitar documentación específica a los nuevos subcontratistas y contrastar coherencia entre fuentes.","Registrar nivel de confianza, fecha objetivo, medidas de control y disparadores de revisión."],
  "La trazabilidad perfecta no siempre es inmediata, pero no se debe convertir la incertidumbre en certeza. Si falta información obligatoria para una aprobación, el expediente permanece abierto y se aplican los controles pertinentes.",
  "En la ficha de un proveedor, escribe «origen no acreditado» cuando corresponda, en vez de inventar un país o asumir que el anterior suministro sigue siendo equivalente."],
 ["Partial traceability must remain explicitly partial",
  "A direct supplier list does not necessarily identify lower-tier subcontractors or the origin of every critical material. Filling gaps with guesses creates a false documentary chain; declaring compliance without knowing the declaration's scope may be equally misleading.",
  "Useful evidence specifies the fact, source, time period, supply-chain level and reliability. An unknown must be marked openly, with the reason it matters, the owner responsible for clarification and any lawfully authorised interim decision.",
  ["Map known and unknown supply tiers and materials.","Request targeted records from new subcontractors and compare consistency across sources.","Record confidence, target date, controls and review triggers."],
  "Perfect traceability may not be immediately possible, but uncertainty must not be presented as certainty. If required information is missing for approval, the case stays open under the relevant controls.",
  "Write 'origin not evidenced' where appropriate rather than inventing a country or assuming the previous supply remains equivalent."]
 ),
 lesson(
 ["Escalar cuando las consecuencias superan la autoridad disponible",
  "Un rediseño aparentemente menor puede concentrar varios riesgos: proveedor único, falta de origen, condiciones laborales desconocidas y necesidades de cualificación. Si el impacto potencial es grave o una decisión excede la autoridad de quienes gestionan el caso, debe intervenir el nivel competente.",
  "La gobernanza asigna responsabilidades y límites. Escalar no sustituye el análisis del equipo ni exige una alarma genérica: es presentar a la autoridad adecuada hechos, incertidumbres, alternativas, consecuencias, recomendación y decisión solicitada.",
  ["Identificar obligaciones sin cumplir, gravedad, dependencia y efecto sobre la continuidad.","Determinar quién puede aceptar, mitigar, condicionar o rechazar cada riesgo, sin sobrepasar su autoridad.","Escalar mediante un informe con opciones, responsables, acciones propuestas, plazos y fecha de revisión."],
  "El aumento del precio no es el único motivo de escalación. Y la dirección no puede dispensar unilateralmente requisitos legales o técnicos que no admiten excepción.",
  "Si no está claro quién puede aprobar una decisión de suministro con riesgo importante, no actúes por silencio: busca formalmente al responsable."],
 ["Escalate when consequences exceed available authority",
  "A seemingly minor redesign may combine single-source dependency, unknown mineral origin, labour concerns and technical qualification needs. If potential impacts are severe or the decision exceeds the team's authority, the appropriate governing level must be involved.",
  "Governance defines responsibilities and limits. Escalation is not a substitute for the team's analysis or a generic alarm: it presents the relevant authority with facts, uncertainty, alternatives, consequences, recommendation and the decision requested.",
  ["Identify unmet obligations, severity, dependencies and continuity effects.","Determine who can accept, mitigate, condition or reject each risk within their actual authority.","Escalate with options, proposed actions, owners, deadlines and a review date."],
  "A price increase is not the only escalation trigger. Senior management cannot simply waive legal or technical requirements that have no valid exception.",
  "If it is unclear who can authorise a major sourcing decision, do not rely on silence as consent; identify the accountable owner."]
 )
 ],
 conditional:[
 lesson(
 ["Condicional no significa «aprobado a medias» para cualquier requisito",
  "En el caso convergen una cualificación química/técnica aún pendiente, dudas sobre origen mineral y un embalaje revisado. Cada área tiene requisitos y autoridades distintos. Una aceptación condicionada solo es posible allí donde los procedimientos y la legislación permiten avanzar bajo condiciones específicas.",
  "Una decisión condicionada debe delimitar objeto, alcance, controles, riesgo residual, evidencia pendiente, responsable, plazo y condiciones de caducidad. No puede convertir un requisito obligatorio no satisfecho en voluntario. La decisión sobre diligencia debida tampoco sustituye una liberación técnica.",
  ["Separar los requisitos que impiden liberar de las acciones de investigación que sí pueden continuar.","Identificar una vía formal válida para cada condición y quién puede autorizarla.","Documentar controles, responsables, vencimiento y evidencia necesaria para cerrar o cancelar la condición."],
  "Si no existe una vía legal o procedimental autorizada, la condición no puede aprobarse, aunque se deje por escrito. El estado de cada ámbito debe estar visible para evitar que «condicional» se interprete como autorización total.",
  "Cuando recibas una autorización condicionada, pregunta siempre «¿para qué, hasta cuándo y bajo qué controles?»."],
 ["Conditional does not mean 'partly approved' for any requirement",
  "The case combines pending coating qualification, mineral-origin concerns and inspected packaging. These belong to different functions and authorities. Conditional acceptance is possible only where applicable rules and authorised procedures allow work to continue under specified conditions.",
  "A conditional decision must define the object, scope, controls, residual risk, pending evidence, accountable owner, expiry and closing criteria. It cannot turn an unmet mandatory gate into an optional one. Supply-chain due diligence also does not substitute for technical release.",
  ["Separate mandatory blockers from investigative work that may continue under controls.","Identify a formally valid route and competent approver for each condition.","Document controls, owners, expiry and evidence required to close or cancel the condition."],
  "If no authorised legal or procedural route exists, the condition cannot be approved merely by writing it down. Each domain's status should be clear so 'conditional' is not mistaken for full release.",
  "Whenever you see conditional approval ask: 'for what, until when, and under which controls?'"]
 ),
 lesson(
 ["Detener la liberación que no supera un requisito obligatorio",
  "La presión de despliegue no constituye por sí misma una autorización técnica, química o legal. Si para instalar o enviar un producto es imprescindible superar una cualificación, obtener un permiso o demostrar una condición aplicable, una liberación que no cumple no debe continuar salvo una vía formal válida.",
  "Conviene distinguir entre detener un uso o liberación y paralizar todo análisis. Mientras se resuelve un bloqueo, puede ser posible continuar inspecciones, ensayos autorizados, investigación de proveedores o preparación de documentación, respetando sus propios controles.",
  ["Identificar exactamente qué requisito obligatorio no está satisfecho y a qué material o unidad afecta.","Bloquear la actividad que depende de ese requisito y comunicarlo al responsable competente.","Planificar ensayos, verificaciones o alternativas permitidas y establecer el criterio verificable para reanudar."],
  "El precio o el plazo no sustituyen la conformidad. Tampoco es correcto cancelar indiscriminadamente toda actividad cuando existen trabajos de investigación seguros y legalmente permitidos.",
  "Para decidir una parada, define el objeto y el requisito concreto: «esto no puede liberarse hasta que se cumpla X»."],
 ["Stop release where a mandatory requirement is unmet",
  "Deployment pressure does not itself create technical, chemical or legal authority. If installation or shipment requires a completed qualification, permit or demonstrated applicable condition, release must not proceed unless a formally valid route exists.",
  "Distinguish blocking use or release from stopping all analysis. Inspections, authorised tests, supplier investigations or document preparation may still be possible while the gate is addressed, subject to their own controls.",
  ["Identify exactly which mandatory requirement is unmet and what item or operation it affects.","Block the activity dependent on that requirement and notify the competent decision owner.","Plan permitted tests, verifications or alternatives and specify verifiable criteria for resuming."],
  "Price or schedule cannot replace compliance. Nor should all work be indiscriminately cancelled where safe, legally permissible investigations can continue.",
  "When stopping an activity, state the specific object and requirement: 'this cannot be released until X is met'."]
 ),
 lesson(
 ["Cerrar el expediente significa dejar una decisión reproducible",
  "Al concluir el ejercicio, distintas funciones pueden haber aprobado cosas diferentes: una inspección de embalaje, una actividad experimental, un control de proveedor o una liberación técnica. Ninguna aprobación parcial debe interpretarse como conformidad total de la operación.",
  "Un cierre sólido consolida por ámbito la evidencia vigente, lo que permanece incierto, el alcance de las decisiones, las condiciones, los responsables, los plazos y los criterios de eficacia. Además conserva el historial y define qué cambios obligan a reabrir la revisión.",
  ["Preparar una matriz de decisiones por área: requisito, evidencia, autoridad, estado y limitaciones.","Relacionar cada brecha con acción, responsable, fecha y prueba necesaria para cerrar.","Revisar coherencia documental, conservar versiones y comunicar exactamente qué está autorizado y qué no."],
  "El estado «aprobado» por sí solo no permite reconstruir la decisión. Eliminar borradores o rastros relevantes puede borrar por qué se adoptaron controles o cómo evolucionó el caso; aplica las políticas de conservación documental.",
  "En el resumen final escribe «autorizado para… bajo… hasta…» en lugar de un único «aprobado» sin contexto."],
 ["Closing the case means leaving a reproducible decision",
  "At the end, different functions may have approved different things: packaging inspection, experimental activity, supplier controls or a technical release. None of these partial decisions should be mistaken for full approval of the entire operation.",
  "A sound closure consolidates current evidence, remaining uncertainty, exact scope, conditions, accountable owners, deadlines and effectiveness criteria by domain. It retains history and defines changes that require reopening the review.",
  ["Build a decision matrix by area: requirement, evidence, authority, status and limitations.","Link every gap to an action, owner, date and proof needed for closure.","Check document consistency, preserve versions and communicate exactly what is and is not authorised."],
  "A bare 'approved' label does not reconstruct the decision. Deleting relevant drafts or decision trails may erase the rationale for controls; follow applicable record retention requirements.",
  "In a final summary, write 'authorised for… under… until…' instead of an unqualified 'approved'."]
 )
 ]
};
root.SCReviewTheoryReferences={
 origin:[{name:"OECD · Responsible mineral due diligence",url:"https://www.oecd.org/en/topics/sub-issues/due-diligence-guidance-for-responsible-mineral-supply-chains.html"},{name:"OECD · Responsible business conduct",url:"https://www.oecd.org/en/publications/oecd-due-diligence-guidance-for-responsible-business-conduct_15f5f4b3-en.html"}],
 rights:[{name:"OECD · Due diligence guidance",url:"https://www.oecd.org/en/publications/oecd-due-diligence-guidance-for-responsible-business-conduct_15f5f4b3-en.html"}],
 chemical:[{name:"ECHA · Safety data sheets",url:"https://echa.europa.eu/safety-data-sheets"}],
 packaging:[{name:"IPPC · ISPM 15 implementation guide",url:"https://ippc.int/es/publications/92080/"}],
 obsolescence:[{name:"OECD · Due diligence guidance",url:"https://www.oecd.org/en/publications/oecd-due-diligence-guidance-for-responsible-business-conduct_15f5f4b3-en.html"}],
 conditional:[{name:"OECD · Due diligence guidance",url:"https://www.oecd.org/en/publications/oecd-due-diligence-guidance-for-responsible-business-conduct_15f5f4b3-en.html"},{name:"ECHA · Safety data sheets",url:"https://echa.europa.eu/safety-data-sheets"},{name:"IPPC · ISPM 15 implementation guide",url:"https://ippc.int/es/publications/92080/"}]
};
})(window);
