# Checklist de validación para publicación

## P0 · Producto y propiedad

- [ ] Confirmar nombre final, propietario funcional y canal de publicación.
- [ ] Confirmar si se permite el uso de las expresiones `Sustainable Aviation Learning Lab` y `Sustainability Navigator`.
- [ ] Crear un repositorio nuevo y conservar los repositorios históricos sin sobrescribirlos.
- [ ] Aplicar los requisitos internos de ciberseguridad, accesibilidad, privacidad y marca.

## P0 · Contenido

- [ ] Asignar un responsable real a cada pilar.
- [ ] Revisar las 90 fichas y registrar aprobación, cambios o retirada.
- [ ] Validar que las fuentes siguen vigentes en la fecha de publicación.
- [ ] Añadir únicamente los enlaces internos que hayan sido autorizados para la audiencia prevista.
- [ ] Evitar atribuir a Airbus o TAS objetivos, resultados, posiciones o proyectos sin una fuente corporativa aprobada.

## P1 · Experiencia

- [x] Probar búsquedas en español e inglés, con y sin tildes, plurales y sinónimos.
- [ ] Comprobar filtros combinados de pilar, tipo y audiencia.
- [ ] Revisar navegación por teclado, foco visible, zoom al 200 % y lector de pantalla.
- [ ] Verificar la experiencia en móvil, tableta y escritorio.
- [ ] Realizar revisión lingüística ES/EN.

### Pruebas técnicas automatizadas · 2026-08-21

- [x] Las tres búsquedas sugeridas ya no devuelven el catálogo completo y ordenan primero la respuesta esperada.
- [x] `proveedor/proveedores/supplier/suppliers` recuperan resultados equivalentes.
- [x] REACH, humedal/wetland y murciélago/bat se resuelven mediante vocabulario relacionado sin falsos positivos difusos.
- [x] Las 90 fichas contienen teoría, aplicación, método, ejemplo, tres comprobaciones y límites en español e inglés.

## Criterio de salida del piloto

El piloto está listo cuando el propietario confirma por escrito el alcance, las 90 fichas están validadas o retiradas, los controles técnicos aplicables han pasado y la página identifica con claridad qué contenido es orientación general y qué contenido es referencia interna aprobada.
# Phase 5B · Maintainer content checklist

Use this checklist before publishing a catalogue or Learning Path update.

## 1. Describe the change

- Confirm whether it is the same logical resource, a URL/repository rename, a technical ID alias, or a genuine replacement.
- Keep the existing stable ID for title, repository, and URL changes to the same educational product.
- Do not merge suspected duplicates automatically. Mark them for manual review.
- Do not add missing duration, difficulty, language or educational claims unless evidence supports them.

## 2. Check publication metadata

- Confirm actual `languages`, editorial `intendedLanguages`, and deployed `launches` independently.
- Confirm lifecycle is one of: active, hold, temporarily-unavailable, archived, replaced.
- Keep HOLD, excluded, unrelated, superseded and manual-review inventory records out of the public catalogue.
- If replacing a genuinely different product, use a new stable ID and `replacedBy`; do not transfer completion.

## 3. Check Learning Paths

- Every resource reference must use an existing stable `resourceId` or approved alias.
- Ensure each required step and choice group still has a viable active route.
- Increase the path revision when required order, required resources, alternatives, required/optional roles, final assessment, capstone, or learning-outcome IDs change.
- A presentation correction, same-resource URL update, or purely optional addition normally does not require a revision increase.

## 4. Run the checks

1. Run `node governance/check-content.cjs`.
2. Review warnings; fix every blocking error.
3. Run `node --test tests/*.test.cjs`.
4. For a detailed private report, run `node governance/check-content.cjs --report --verbose`.
5. When appropriate, run `node governance/check-content.cjs --health --report`; treat outages as observations requiring review, never as automatic lifecycle changes.

## 5. Check the learner experience

- Verify Spanish and English on desktop and mobile.
- Verify active launches work.
- Using a temporary local fixture only, verify unavailable cards remain visible, have no launch control, and explain that progress is preserved.
- Verify affected Learning Paths show maintenance impact and do not recommend an impossible next step.
- Verify existing progress and completion history remain available.
- Confirm no horizontal page overflow and no browser console errors.

## 6. Publication safety

- Confirm exactly 25 approved public logical resources and six Learning Paths unless a separately approved catalogue change says otherwise.
- Confirm no HOLD/excluded/unrelated inventory record entered the public catalogue.
- Confirm reports, governance files, tests and repository metadata are absent from the Pages artifact.
- Confirm browser code contains no token, authorization header or secret.
