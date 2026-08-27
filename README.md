# Sustainability Navigator · Knowledge Search v2

Buscador bilingüe y estático de conceptos y preguntas frecuentes sobre sostenibilidad aeronáutica. La segunda versión combina recuperación de información, fichas formativas ampliadas y trazabilidad editorial.

## Qué resuelve

- Restaura el producto español que tenía `index.html` vacío.
- Sustituye la identidad `Biodiverso Search Tool` por una identidad transversal de sostenibilidad.
- Organiza el conocimiento en los seis pilares acordados.
- Incluye 60 términos de glosario y 30 preguntas frecuentes, con paridad ES/EN.
- Reconoce palabras vacías, tildes, plurales, sinónimos, términos bilingües y conceptos especializados como REACH o ISPM-15.
- Ordena por cobertura y relevancia, resalta coincidencias y propone alternativas cuando no encuentra resultados.
- Filtra por pilar, tipo de contenido y audiencia.
- Pagina los resultados y permite compartir una búsqueda mediante su URL.
- Amplía cada resultado con teoría, aplicación aeronáutica, método, ejemplo, preguntas de decisión y límites.
- Muestra fuente institucional, fecha de revisión y responsable funcional propuesto en cada ficha.
- Mantiene biodiversidad de forma explícita dentro de `P6 · Climate, Nature & Biodiversity`.
- Incorpora un catálogo central bilingüe de aplicaciones educativas con metadatos, pilares relacionados y lanzamiento directo.

## Catálogo de aprendizaje interactivo

La portada registra y presenta actualmente cuatro aplicaciones: Ethical Armor, Phytosanitary Defender, The REACH Compliance Challenge y The Year 15 Challenge. Sus paquetes internos siguen siendo independientes; esta primera integración añade descubrimiento, metadatos y retorno al Hub sin migrarlos.

Los recursos se registran en `catalogue-data.js`. Para añadir una aplicación futura se crea una nueva entrada estructurada con un identificador estable, textos ES/EN, audiencia, idiomas, duración, dificultad, tipo, estado, URL relativa y pilares. `catalogue.js` valida y renderiza las tarjetas, por lo que no es necesario añadir markup de tarjetas a `index.html`.

## Uso local

No requiere instalación ni servidor. Abre `index.html` en un navegador moderno. Para simular el comportamiento de GitHub Pages también se puede servir la carpeta con cualquier servidor estático.

## Archivos

- `index.html`: estructura accesible y metadatos.
- `styles.css`: sistema visual responsive sin dependencias externas.
- `data.js`: pilares, fuentes y 90 fichas bilingües ampliadas.
- `search-engine.js`: normalización, sinónimos, puntuación, coincidencias aproximadas y sugerencias.
- `app.js`: filtros, paginación, URL compartible, cambio de idioma y renderizado accesible.
- `catalogue-data.js`: registro estructurado de aplicaciones y base extensible para nuevos tipos de recurso.
- `catalogue.js`: validación y renderizado bilingüe del catálogo de aprendizaje.
- `tests/search-engine.test.cjs`: pruebas del motor y de la estructura bilingüe de aprendizaje.
- `tests/catalogue.test.cjs`: pruebas del esquema, rutas, integración y retorno al Hub.
- `VALIDATION_CHECKLIST.md`: controles necesarios antes de una publicación corporativa.

## Gobernanza y límites

Todo el contenido está marcado como `Borrador · validar`. Las fuentes externas orientan la definición general, pero no autorizan afirmaciones específicas sobre Airbus, TAS, centros, productos, resultados o políticas internas. Antes de publicar debe asignarse un responsable real por pilar, validar el contenido y sustituir cualquier referencia que exija una fuente corporativa aprobada.

Este MVP es deliberadamente independiente: no sobrescribe ni elimina los repositorios históricos de biodiversidad.

## Validación técnica

```sh
node --check search-engine.js
node --check data.js
node --check app.js
node --check catalogue-data.js
node --check catalogue.js
node --test tests/*.test.cjs
```
# Content governance and resource health

The public catalogue remains the single source of learner-facing resources. Each logical resource has one stable `id`; Spanish and English launches belong to that same record. Learning Paths keep referencing those IDs, so progress and completion history remain attached to stable identities.

Before publishing any catalogue or Learning Path change:

1. Open a terminal in this repository.
2. Run `node governance/check-content.cjs`.
3. Read the final line. `PASS` means there are no blocking publication errors. Warnings identify honest unknown metadata or items needing human review; they do not invent missing information.
4. Run `node --test tests/*.test.cjs`.
5. Correct every `FAIL · Must fix before publication` finding before requesting review.

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

Pull requests, pushes to `main`, and manual runs execute deterministic content validation plus the complete test suite. A separate weekly/manual workflow observes external launch health with limited requests, timeouts and no remote JavaScript execution. Its reports are workflow artifacts, not learner-facing files. GitHub Pages uses an explicit allowlist containing only the Hub and the four internal applications.
