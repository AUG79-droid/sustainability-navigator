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

## Uso local

No requiere instalación ni servidor. Abre `index.html` en un navegador moderno. Para simular el comportamiento de GitHub Pages también se puede servir la carpeta con cualquier servidor estático.

## Archivos

- `index.html`: estructura accesible y metadatos.
- `styles.css`: sistema visual responsive sin dependencias externas.
- `data.js`: pilares, fuentes y 90 fichas bilingües ampliadas.
- `search-engine.js`: normalización, sinónimos, puntuación, coincidencias aproximadas y sugerencias.
- `app.js`: filtros, paginación, URL compartible, cambio de idioma y renderizado accesible.
- `tests/search-engine.test.cjs`: pruebas del motor y de la estructura bilingüe de aprendizaje.
- `VALIDATION_CHECKLIST.md`: controles necesarios antes de una publicación corporativa.

## Gobernanza y límites

Todo el contenido está marcado como `Borrador · validar`. Las fuentes externas orientan la definición general, pero no autorizan afirmaciones específicas sobre Airbus, TAS, centros, productos, resultados o políticas internas. Antes de publicar debe asignarse un responsable real por pilar, validar el contenido y sustituir cualquier referencia que exija una fuente corporativa aprobada.

Este MVP es deliberadamente independiente: no sobrescribe ni elimina los repositorios históricos de biodiversidad.

## Validación técnica

```sh
node --check search-engine.js
node --check data.js
node --check app.js
node --test tests/search-engine.test.cjs
```
