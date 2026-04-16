# Spec: Página Nosotros — Empoderamiento Docente

**Fecha:** 2026-04-16  
**Archivo:** `nosotros-template.html` (compilado via `inject.cjs`)  
**Referencia:** WF — Nosotros (Pencil brief) + diseño system v8

---

## Objetivo

Construir la página `/nosotros` del prototipo. Es la página destino de los CTAs "Conocé el equipo →" y "Conocé nuestra historia →" del home. Debe transmitir profundidad institucional, mostrar el equipo completo y comunicar el origen académico del proyecto.

---

## Estructura de secciones (orden exacto)

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | NAV | Igual al home — pill flotante con 5 links |
| 2 | HERO INTERIOR | Eyebrow + H1 + bajada + fondo con patrón sutil |
| 3 | HISTORIA Y ORIGEN | 2 columnas: texto izq, imagen der. Origen en Cinvestav-IPN |
| 4 | MISIÓN Y VALORES | 3 valores en columnas con número grande Cormorant |
| 5 | METODOLOGÍA | 5 pasos numerados horizontales (proceso de trabajo) |
| 6 | EL EQUIPO | Grid de cards por grupos (Dirección · Investigación · Facilitación) |
| 7 | CTA → CONTACTO | Igual al del home, mismo diseño |
| 8 | FOOTER | Igual al del home |

---

## Contenido por sección

### 2 — HERO INTERIOR

- **Eyebrow:** "Quiénes somos"
- **H1:** "Más de una década construyendo junto a los docentes."
- **Bajada:** "Nacemos de la investigación académica y vivimos en el aula. Trabajamos en la intersección entre el conocimiento matemático, la didáctica y el desarrollo profesional docente."
- **Diseño:** Centrado, fondo `--bg`, sin fotos. H1 en Cormorant `clamp(52px, 6vw, 88px)` peso 300. Padding top amplio (nav flotante).

### 3 — HISTORIA Y ORIGEN

- **Eyebrow:** "Nuestros orígenes"
- **Título:** "Nacemos de una pregunta que el sistema educativo no podía responder."
- **Texto:** "El Programa Interdisciplinario para el Desarrollo Profesional Docente en Matemáticas (PIDPDM) del Cinvestav-IPN fue el punto de partida. Desde 2010, ese programa se convirtió en Empoderamiento Docente: una organización autónoma que lleva la investigación matemática al aula, en Argentina, México, Chile y Colombia."
- **Quote lateral:** "Investigamos con los docentes, no sobre ellos."
- **Imagen:** placeholder gradient con etiqueta "Taller formativo · Cinvestav 2012"
- **Diseño:** Grid 2 cols en desktop (texto 3fr, imagen 2fr), fondo `--white`, imagen con `aspect-ratio: 4/3`, `border-radius: 20px`.

### 4 — MISIÓN Y VALORES

- **Eyebrow:** "Lo que nos mueve"
- **Título:** "Tres principios que guían cada intervención."
- **Valor 01 — Investigación situada:** El conocimiento matemático que producimos surge de las prácticas reales del aula, no de laboratorios abstractos.
- **Valor 02 — Desarrollo sostenido:** No creemos en talleres de un día. Trabajamos procesos largos, acompañados y evaluados.
- **Valor 03 — Autonomía docente:** El objetivo final es que los docentes puedan seguir creciendo sin nosotros.
- **Diseño:** 3 columnas, mismo patrón que pilares del home (número ghost Cormorant en `--v-bg`, línea violeta superior `2px solid var(--v)`). Fondo `--bg-2`.

### 5 — METODOLOGÍA

- **Eyebrow:** "Cómo trabajamos"
- **Título:** "Un proceso de cinco etapas construido desde la práctica."
- **5 pasos:**
  - 01 · **Relevamiento** — Diagnóstico del contexto institucional, nivel docente y necesidades matemáticas específicas.
  - 02 · **Diseño** — Construcción de la propuesta formativa adaptada al contexto relevado.
  - 03 · **Pilotaje** — Implementación inicial con grupo reducido y observación directa.
  - 04 · **Acompañamiento** — Seguimiento sostenido: observación de clase, retroalimentación y ajustes.
  - 05 · **Evaluación** — Medición de impacto sobre la práctica docente y aprendizaje de los estudiantes.
- **Diseño:** Fila horizontal en desktop, stack vertical en mobile. Cada paso: número grande Cormorant (ghost), título Syne uppercase, descripción DM Sans. Línea conectora horizontal entre pasos (visible en desktop). Fondo `--bg`.

### 6 — EL EQUIPO

- **Eyebrow:** "El equipo"
- **Título:** "Investigadores, formadores y diseñadores didácticos."
- **Subtítulo:** "Un equipo interdisciplinario que trabaja desde y para el aula."

**Grupo: Dirección**
- Daniela Reyes · Directora General · Argentina · `team-daniela.jpg`
- Karla Gomez · Directora Académica · México · `team-karla.jpg`

**Grupo: Investigación y Liderazgo**
- Iván Pérez · Líder · Modelación y Tecnologías · Chile · `team-ivan.jpg`
- Gabriela Buendía · Líder de Proyecto · México · `team-gabriela.jpg`
- Andrea Vergara · Líder · Pensamiento Estadístico · Chile · placeholder `AV`
- Judith Hernández · Líder · Currículo · México · `team-judith.jpg`
- Marcela Cano · Líder · Evaluación · México · `team-marcela.jpg`
- Luis López · Líder · Aritmética y Álgebra · Costa Rica · placeholder `LL`

**Grupo: Facilitación y Diseño Didáctico**
- Wendolyne Ríos · Facilitadora · Diseñadora · México · `team-wendolyne.jpg`
- Darly Ku-Euan · Diseñadora Didáctica · México · `team-darly.jpg`
- Pedro Vidal-Szabo · Facilitador · Estocástico · Chile · `team-pedro.jpg`
- Paola Balda Álvarez · Facilitadora · Proporcionalidad · Colombia · `team-paola.jpg`
- Luis Cabrera Chim · Facilitador · Evaluación · México · `team-luis-cabrera.jpg`
- Eduardo Briceño · Diseñador Didáctico · México · `team-eduardo.jpg`

**Card design:** foto circular `80px`, nombre en Syne, rol en DM Sans muted, país como badge pequeño. Grid: 2 cols para Dirección, 3 cols para los otros grupos. Sin modal (información completa en la card). Fondo `--white`.

**Badge de país:** pequeño pill `font-size: 9px`, `background: --v-bg`, `color: --v`.

### 7 — CTA → CONTACTO

Idéntico al del home:
- Título: "Llevá la matemática educativa a tu institución."
- Subtítulo: "Contanos qué necesitás y te proponemos un camino a medida."
- Botón: "Escribinos hoy →" → `contacto.html`

### 8 — FOOTER

Idéntico al del home:
- Nav: Inicio · Nosotros · Servicios · Proyectos · Contacto
- Tagline: "Matemática Educativa · Latinoamérica"

---

## Arquitectura de archivos

| Archivo | Acción |
|---------|--------|
| `nosotros-template.html` | Crear — template completo (nav + hero + secciones + footer + script GSAP) |
| `inject.cjs` | Modificar — agregar entry para `nosotros-template.html` → `nosotros.html` |

**Notas de implementación:**
- Las fotos del equipo (`team-*.jpg`) ya existen en la misma carpeta del template.
- Usar `LOGO_PLACEHOLDER` como en el home para el logo.
- El inject.cjs actual solo maneja `home-v7-template.html` → hay que agregar el nuevo template.
- Copiar el bloque `<style>` del home como base (mismo design system), agregar CSS específico de Nosotros.
- Copiar el bloque `<script>` GSAP como base, agregar animaciones de las secciones nuevas.

---

## Sistema de diseño (idéntico al home)

```css
--v: #6245A8  --c: #4891C0  --bg: #F5F4FB  --bg-2: #EDEAF6
--ink: #1A1528  --muted: #6B6080  --white: #FDFCFF
--fd: Cormorant Garamond  --fs: Syne  --fb: DM Sans
```

GSAP 3.12.5 + ScrollTrigger — scroll reveal en todas las secciones nuevas.

---

## Clases CSS nuevas (además de las reutilizadas del home)

```
.page-hero          → hero interior de páginas internas
.page-hero-h        → H1 del hero interior
.page-hero-sub      → párrafo bajada del hero

.historia           → sección Historia y Origen
.historia-inner     → grid 2 cols
.historia-quote     → quote lateral destacado

.valores            → sección Misión y Valores (reutiliza .pilares del home)

.metodologia        → sección Metodología 5 pasos
.metodo-steps       → flex row / stack mobile
.metodo-step        → cada paso
.metodo-step-num    → número ghost grande
.metodo-step-title  → título del paso
.metodo-step-desc   → descripción del paso
.metodo-connector   → línea horizontal entre pasos (desktop only)

.equipo             → sección El Equipo
.equipo-grupo       → cada grupo (Dirección, Investigación, Facilitación)
.equipo-grupo-label → label del grupo
.equipo-grid        → grid de cards (2 o 3 cols según grupo)
.eq-card            → card de un integrante
.eq-card-img        → foto circular 80px
.eq-card-placeholder → inicial cuando no hay foto
.eq-card-name       → nombre
.eq-card-role       → rol
.eq-card-country    → badge país
```

---

## Criterio de éxito

1. `node inject.cjs` genera `nosotros.html` sin errores
2. Todas las secciones aparecen en el orden correcto
3. Las 14 cards del equipo aparecen con nombre, rol y país
4. Responsive: se ve bien en 375px, 768px y 1440px
5. Animaciones GSAP funcionan en scroll
6. Nav activa el link "Nosotros" como activo (clase `active` en el link correspondiente)
