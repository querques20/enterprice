# Spec: Página Servicios — Empoderamiento Docente

**Fecha:** 2026-04-16  
**Archivo:** `servicios-template.html` (compilado via `inject.cjs`)  
**Referencia:** WF — Servicios (Pencil brief) + diseño system v8

---

## Objetivo

Construir la página `/servicios`. Destino de las 4 flechas del home (cards de servicios) y del link "Ver todos los servicios →". Debe presentar cada línea de trabajo con suficiente detalle para que una institución entienda qué contrataría.

---

## Estructura de secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | NAV | Pill flotante, link "Servicios" activo |
| 2 | HERO INTERIOR | Eyebrow + H1 + bajada |
| 3 | SERVICIOS (×4) | Una subsección por servicio con id anchor |
| 4 | CÓMO TRABAJAMOS | Proceso en 4 pasos: Relevamiento → Propuesta → Validación → Entrega |
| 5 | CTA → CONTACTO | Igual al home |
| 6 | FOOTER | Igual al home |

---

## Contenido por sección

### 2 — HERO INTERIOR

- **Eyebrow:** "Lo que hacemos"
- **H1:** "Cuatro líneas de trabajo, un mismo compromiso."
- **Bajada:** "Diseñamos intervenciones a medida. Cada proceso parte de un diagnóstico real y termina con impacto medible en el aula."
- **Nav rápida:** 4 links de ancla bajo la bajada: `#formacion · #acompanamiento · #talleres · #cursos`

### 3 — SERVICIOS DETALLADOS (4 subsecciones)

Cada servicio tiene su propio `id` anchor y alterna fondo (`--bg` / `--white`) para diferenciarlos visualmente.

**Servicio 01 · Formación docente** `id="formacion"`
- **Tag:** Presencial · Online
- **Título:** "Programas de desarrollo profesional docente"
- **Descripción:** Procesos formativos sostenidos en el tiempo, diseñados para equipos docentes de instituciones educativas. Combinamos teoría matemática rigurosa con reflexión sobre la práctica de aula.
- **Qué incluye:**
  - Diagnóstico inicial del grupo docente
  - Secuencia formativa (4 a 12 meses)
  - Materiales didácticos diseñados ad hoc
  - Observación de clase y retroalimentación
  - Evaluación de impacto al cierre
- **Para quién:** Escuelas primarias y secundarias, instituciones de formación docente, ministerios de educación.
- **Modalidad:** Presencial intensivo · Online sincrónico · Blended

**Servicio 02 · Acompañamiento institucional** `id="acompanamiento"`
- **Tag:** Diagnóstico · Curricular
- **Título:** "Acompañamiento curricular y estratégico"
- **Descripción:** Trabajamos junto a directivos y equipos pedagógicos para diagnosticar el estado de la enseñanza de matemática e implementar mejoras curriculares sostenibles.
- **Qué incluye:**
  - Diagnóstico institucional (docentes, estudiantes, materiales)
  - Diseño o revisión del proyecto curricular de matemática
  - Talleres de actualización para el equipo directivo
  - Seguimiento mensual durante la implementación
- **Para quién:** Instituciones educativas que buscan mejorar sus resultados en matemática de forma sistémica.
- **Modalidad:** Presencial · Visitas periódicas

**Servicio 03 · Talleres** `id="talleres"`
- **Tag:** Presencial · Intensivo
- **Título:** "Jornadas temáticas y workshops"
- **Descripción:** Eventos de corta duración (4 a 16 horas) sobre temas específicos de matemática educativa. Ideales para jornadas institucionales, congresos y espacios de actualización.
- **Qué incluye:**
  - Diseño del taller según el tema y el público
  - Materiales y recursos para los participantes
  - Facilitación a cargo de nuestro equipo
  - Informe de cierre con recomendaciones
- **Temas frecuentes:** Pensamiento algebraico · Modelación matemática · Evaluación formativa · Tecnologías en el aula · Pensamiento estadístico
- **Modalidad:** Presencial · Online

**Servicio 04 · Cursos** `id="cursos"`
- **Tag:** Online · Semipresencial
- **Título:** "Formación online a tu propio ritmo"
- **Descripción:** Cursos estructurados con contenido producido por nuestro equipo de investigación. Disponibles online, con o sin acompañamiento sincrónico.
- **Qué incluye:**
  - Acceso a contenido en video y texto
  - Actividades de aplicación en el aula
  - Foros de intercambio entre participantes
  - Certificado de finalización
- **Modalidad:** Autogestionado · Semipresencial con tutorías

**Diseño de cada servicio:** Alternancia de layout. Servicios impares (01, 03): texto izquierda, detalle derecha. Servicios pares (02, 04): detalle izquierda, texto derecha. "Qué incluye" como lista con checkmarks violetas. Tag de modalidad como pills. Número grande Cormorant ghost al fondo del bloque.

### 4 — CÓMO TRABAJAMOS

- **Eyebrow:** "El proceso"
- **Título:** "Cuatro etapas de trabajo conjunto."
- **4 pasos:**
  - 01 · **Relevamiento** — Entendemos el contexto antes de proponer nada.
  - 02 · **Propuesta** — Diseñamos una intervención a medida, no un paquete estándar.
  - 03 · **Validación** — Piloteamos y ajustamos antes de escalar.
  - 04 · **Entrega** — Implementación completa con seguimiento y evaluación.
- **Diseño:** Idéntico a la sección Metodología de Nosotros. Fondo `--bg-2`.

### 5 — CTA

Idéntico al home.

---

## Arquitectura de archivos

| Archivo | Acción |
|---------|--------|
| `servicios-template.html` | Crear |
| `inject.cjs` | Modificar — agregar entry |

---

## Clases CSS nuevas

```
.svc-page-hero       → hero interior servicios
.svc-nav-anchors     → links de ancla bajo el hero
.svc-detail          → bloque de cada servicio (alterna bg)
.svc-detail-inner    → grid 2 cols (texto + detalle)
.svc-detail.alt      → variante con layout invertido
.svc-detail-tag      → pills de modalidad
.svc-detail-num      → número ghost Cormorant
.svc-detail-title    → título del servicio
.svc-detail-desc     → descripción
.svc-detail-includes → lista "qué incluye"
.svc-detail-includes li::before → checkmark violeta
.svc-detail-audience → "para quién"
```

---

## Criterio de éxito

1. Los 4 ids de anchor (`#formacion`, `#acompanamiento`, `#talleres`, `#cursos`) funcionan desde el home
2. Cada servicio muestra: título, descripción, qué incluye, para quién, modalidad
3. Proceso de 4 pasos visible y claro
4. Responsive en 375 / 768 / 1440px
