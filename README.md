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
