# Sustainability Navigator · Knowledge Search v2

Hub de aprendizaje bilingüe y estático para explorar conocimiento y recursos de sostenibilidad aeronáutica. La versión actual combina buscador, 90 fichas formativas bilingües, catálogo de aprendizaje, seis Learning Paths, seguimiento de progreso y trazabilidad editorial.

## Qué resuelve

- Sustituye la antigua identidad `Biodiverso Search Tool` por una identidad transversal de sostenibilidad.
- Organiza el conocimiento en los seis pilares acordados.
- Incluye 60 términos de glosario y 30 preguntas frecuentes, con paridad ES/EN.
- Reconoce palabras vacías, tildes, plurales, sinónimos, términos bilingües y conceptos especializados como REACH o ISPM-15.
- Ordena por cobertura y relevancia, resalta coincidencias y propone alternativas cuando no encuentra resultados.
- Filtra por pilar, tipo de contenido y audiencia.
- Pagina los resultados y permite compartir una búsqueda mediante su URL.
- Amplía cada resultado con teoría, aplicación aeronáutica, método, ejemplo, preguntas de decisión y límites.
- Muestra fuente institucional, fecha de revisión y responsable funcional propuesto en cada ficha.
- Mantiene biodiversidad de forma explícita dentro de `P6 · Climate, Nature & Biodiversity`.
- Incorpora un catálogo central de 33 recursos lógicos de aprendizaje. Las ediciones ES/EN confirmadas de un mismo producto se agrupan en una única ficha.
- Integra seis Learning Paths construidos a partir de los recursos del catálogo.
- Mantiene el progreso asociado a identificadores estables de recurso, incluso cuando cambia el título visible, la URL o el repositorio técnico del mismo producto educativo.

## Catálogo de aprendizaje interactivo

El catálogo público contiene actualmente 33 recursos lógicos entre cursos, aplicaciones, simuladores, juegos, evaluaciones y recursos de conocimiento. Los recursos externos se abren en sus despliegues públicos; varias experiencias históricas se integran dentro del propio Navigator mediante cargadores internos y conservan retorno al Hub.

Los recursos se registran en `catalogue-data.js`. Cada producto educativo conserva un identificador estable. Un cambio de título visible, URL o nombre de repositorio del mismo producto no crea un recurso nuevo ni transfiere el progreso a otro identificador. Los elementos en `HOLD` permanecen fuera del catálogo público hasta aprobación explícita.

## Learning Paths

El Navigator contiene seis progresiones guiadas:

1. Sustainable Aviation Foundations.
2. Eco-Design, Circularity & Materials.
3. Responsible Supply Chain & Compliance.
4. Sustainable In-Service Operations.
5. Nature, Habitat & Operational Risk.
6. Evidence, Systems & Sustainability Decision-Making.

Las rutas referencian los identificadores estables del catálogo y distinguen pasos obligatorios, opcionales, alternativas y exploración recomendada.


## Sustainability Mission Passport · Individual mode

**Visual update (v2):** premium aerospace hero with an Airbus Defence and Space A400M cutout (official remote Airbus product image), detailed original editable metallic SVG badges, badge discovery buttons, large XP/level/badge cards, bilingual explanatory panel and responsive weekly comparison. The underlying score and local progress contracts are unchanged; no fictional XP, rankings or identity fields are introduced. The official image loads from Airbus's public product navigation asset and the section remains functional if that optional image is unavailable.

The `My Passport / Mi pasaporte` section integrates a local, personal, bilingual gamification layer above the existing progress dashboard. It derives XP, levels, weekly personal comparisons and eight themed shield badges from the canonical progress state, without introducing a new storage key or changing the learning-path schemas. Existing exports and completion histories remain available.

- XP by uniquely completed resource type: course 25; quiz 40; game 40; simulator 55; application 50; knowledge resource 20. A completed Learning Path adds 100 XP once (not again for subsequent revisions).
- Mission badges unlock from recorded activity completions. These are educational achievements, **not proof of competence or verified assessment results**.
- Current-week and previous-week XP are compared locally; there is **no leaderboard across people, no employer analytics, and no shared ranking**.
- Completion may be self-reported. Progress and related XP remain self-managed in the browser; data is not automatically transmitted to a server. Export/import/reset continue to use the existing progress service.
- Design: eight original metallic aerospace-themed vector emblems; there are no commercial aircraft, decorative leaf/aircraft pairings or environmental benefit claims.
- Developer files: `mission-passport.js` (pure calculation + DOM presentation), `mission-passport.css` (responsive design), `tests/mission-passport.test.cjs`.
- Future real shared rankings, identity verification, central records or corporate certificates require a separately approved, secured backend and governance.

## Uso local

No requiere instalación ni servidor para consultar la versión estática. Abre `index.html` en un navegador moderno. Para simular el comportamiento de GitHub Pages también se puede servir la carpeta con cualquier servidor estático.

## Archivos principales

- `index.html`: estructura accesible y metadatos.
- `styles.css`: sistema visual responsive sin dependencias externas.
- `data.js`: pilares, fuentes y 90 fichas bilingües ampliadas.
- `search-engine.js`: normalización, sinónimos, puntuación, coincidencias aproximadas y sugerencias.
- `app.js`: filtros, paginación, URL compartible, cambio de idioma y renderizado accesible.
- `catalogue-data.js`: fuente estructurada de los 33 recursos lógicos.
- `catalogue.js`: validación y renderizado bilingüe del catálogo de aprendizaje.
- `learning-paths-data.js`: definición de las seis Learning Paths.
- `governance/inventory-data.cjs`: inventario no público de recursos en HOLD u otras disposiciones.
- `VALIDATION_CHECKLIST.md`: controles necesarios antes de una publicación corporativa.

## Gobernanza y límites

Todo el contenido sigue sujeto a validación funcional. Las fuentes externas orientan la definición general, pero no autorizan afirmaciones específicas sobre Airbus, TAS, centros, productos, resultados o políticas internas. Antes de una publicación corporativa debe asignarse un responsable real por pilar, validar el contenido y sustituir cualquier referencia que exija una fuente corporativa aprobada.

Los repositorios técnicos históricos se conservan cuando siguen alojando el mismo producto educativo. El nombre del repositorio no determina el nombre editorial que ve el usuario.

## Validación técnica

```sh
node --check search-engine.js
node --check data.js
node --check app.js
node --check catalogue-data.js
node --check catalogue.js
node governance/check-content.cjs
node --test tests/*.test.cjs
```

# Content governance and resource health

The public catalogue remains the single source of learner-facing resources. Each logical resource has one stable `id`; Spanish and English launches belong to that same record. Learning Paths keep referencing those IDs, so progress and completion history remain attached to stable identities.

Before publishing any catalogue or Learning Path change:

1. Run `node governance/check-content.cjs`.
2. Read the final line. `PASS` means there are no blocking publication errors. Warnings identify honest unknown metadata or items needing human review; they do not invent missing information.
3. Run `node --test tests/*.test.cjs`.
4. Correct every `FAIL · Must fix before publication` finding before requesting review.

Use `node governance/check-content.cjs --report --verbose` to create a private JSON and Markdown maintainer report in `governance-report/`. Add `--health` only when Internet access is available. Network observations never edit catalogue lifecycle, never publish a HOLD item, and never become editorial truth automatically.

## Lifecycle and languages

- `active`: visible and launchable.
- `hold`: not public; publication requires explicit human approval.
- `temporarily-unavailable`: visible with a bilingual maintenance notice, but not launchable. Existing progress and history remain intact.
- `archived`: absent from normal discovery while historical completion evidence remains resolvable.
- `replaced`: absent from normal discovery and linked to a genuine successor with `replacedBy`; completion is not transferred.

`languages` records editions that actually exist. `intendedLanguages` records editorial intent. `launches` records deployed destinations. An English-only resource is valid; bilingual Hub interface copy does not make its educational content bilingual.

Aliases are reserved for a technical ID migration of the same logical resource. A repository rename, URL update or presentation-title correction normally keeps the canonical ID. A genuinely different pedagogical replacement receives a new ID and must not inherit completion automatically.

The non-public inventory in `governance/inventory-data.cjs` records HOLD and other disposition decisions. It is deliberately excluded from GitHub Pages.

## Automated checks

The repository includes deterministic content validation and a complete test suite. External launch health can be observed separately; network observations are maintenance evidence, not editorial truth and never change a resource lifecycle automatically.