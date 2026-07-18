# Sustainability Navigator · MVP v1

Buscador bilingüe y estático de conceptos y preguntas frecuentes sobre sostenibilidad aeronáutica. Es la primera implementación del producto `A09 · Sustainability Navigator` definido en el catálogo de transformación.

## Qué resuelve

- Restaura el producto español que tenía `index.html` vacío.
- Sustituye la identidad `Biodiverso Search Tool` por una identidad transversal de sostenibilidad.
- Organiza el conocimiento en los seis pilares acordados.
- Incluye 60 términos de glosario y 30 preguntas frecuentes, con paridad ES/EN.
- Filtra por pilar, tipo de contenido y audiencia.
- Muestra fuente institucional, fecha de revisión y responsable funcional propuesto en cada ficha.
- Mantiene biodiversidad de forma explícita dentro de `P6 · Climate, Nature & Biodiversity`.

## Uso local

No requiere instalación ni servidor. Abre `index.html` en un navegador moderno. Para simular el comportamiento de GitHub Pages también se puede servir la carpeta con cualquier servidor estático.

## Archivos

- `index.html`: estructura accesible y metadatos.
- `styles.css`: sistema visual responsive sin dependencias externas.
- `data.js`: pilares, fuentes y 90 fichas bilingües.
- `app.js`: búsqueda, filtros, ordenación, cambio de idioma y renderizado.
- `VALIDATION_CHECKLIST.md`: controles necesarios antes de una publicación corporativa.

## Gobernanza y límites

Todo el contenido está marcado como `Borrador · validar`. Las fuentes externas orientan la definición general, pero no autorizan afirmaciones específicas sobre Airbus, TAS, centros, productos, resultados o políticas internas. Antes de publicar debe asignarse un responsable real por pilar, validar el contenido y sustituir cualquier referencia que exija una fuente corporativa aprobada.

Este MVP es deliberadamente independiente: no sobrescribe ni elimina los repositorios históricos de biodiversidad.

