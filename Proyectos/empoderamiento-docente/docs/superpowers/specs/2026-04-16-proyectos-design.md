# Spec: Página Proyectos y Publicaciones — Empoderamiento Docente

**Fecha:** 2026-04-16  
**Archivo:** `proyectos-template.html` (compilado via `inject.cjs`)

---

## Objetivo

Construir la página `/proyectos`. Destino del CTA "Ver todas las publicaciones →" de la publicación destacada del home. Muestra investigaciones, publicaciones académicas y recursos disponibles.

---

## Estructura de secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | NAV | Link "Proyectos" activo |
| 2 | HERO INTERIOR | Eyebrow + H1 + bajada |
| 3 | PUBLICACIONES ACADÉMICAS | Lista de artículos con filtro por área temática |
| 4 | PROYECTOS ACTIVOS | 2-3 cards de proyectos en curso |
| 5 | RECURSOS DESCARGABLES | Grid de recursos (PDF, guías) — placeholder elegante |
| 6 | CTA → CONTACTO | Igual al home |
| 7 | FOOTER | Igual al home |

---

## Contenido por sección

### 2 — HERO INTERIOR

- **Eyebrow:** "Investigación y publicaciones"
- **H1:** "Conocimiento producido desde el aula."
- **Bajada:** "Compartimos lo que investigamos. Artículos académicos, proyectos activos y recursos para docentes."

### 3 — PUBLICACIONES ACADÉMICAS

Reutiliza la sección `.library` ya existente en el home (con su diseño de lista de entradas con año, título, autores, revista). Mismas entradas que el home más un botón "Ver todas las publicaciones en RELIME →".

- **Eyebrow:** "Publicaciones"
- **Título:** "Artículos e investigaciones"
- Filtros de área: Todo · Álgebra · Estadística · Modelación · Currículo · Evaluación (pills, filtro visual sin JS en esta versión)
- Lista de publicaciones extraída del home (mismas entradas `.lib-entry`)

### 4 — PROYECTOS ACTIVOS

- **Eyebrow:** "En curso"
- **Título:** "Proyectos activos"
- 3 project cards placeholder:
  - **Proyecto 1:** "Secuencias didácticas para álgebra temprana" · Argentina · 2024-2026
  - **Proyecto 2:** "Pensamiento estadístico en primaria" · Chile · 2025-2026
  - **Proyecto 3:** "Acompañamiento curricular PIDPDM" · México · 2023-2026
- Card design: fondo `--white`, borde `--border`, badge de estado ("En curso"), año, país, título, descripción breve.

### 5 — RECURSOS DESCARGABLES

- **Eyebrow:** "Recursos"
- **Título:** "Material para docentes"
- 4 resource cards placeholder elegante (mismo estilo que pub card del home pero versión compacta):
  - Guía de secuencias didácticas · PDF
  - Marco de evaluación formativa · PDF
  - Cuaderno de actividades algebraicas · PDF
  - Protocolo de observación de clase · PDF
- Badge "Próximamente" en cada card hasta tener contenido real.

---

## Clases CSS nuevas

```
.pub-page           → sección publicaciones (wrapper para .library reutilizado)
.proyectos-grid     → grid 3 cols de project cards
.proyecto-card      → card de proyecto activo
.proyecto-badge     → badge "En curso"
.recursos-grid      → grid 4 cols de resource cards
.recurso-card       → card de recurso descargable
.recurso-badge      → badge "Próximamente"
```

---

## Criterio de éxito

1. Publicaciones del home se reutilizan correctamente
2. Cards de proyectos visibles con badge "En curso"
3. Cards de recursos con badge "Próximamente"
4. Responsive en 375 / 768 / 1440px
