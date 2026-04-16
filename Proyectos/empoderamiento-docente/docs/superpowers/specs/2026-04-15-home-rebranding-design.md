# Spec: Home Rebranding — Empoderamiento Docente (v7 → v8)

**Fecha:** 2026-04-15  
**Fuente de verdad:** `Precentacion-Propuesta-intituto.pen` (wireframe WF-Inicio)  
**Archivo a modificar:** `home-v7-template.html` (compiled via `inject.cjs`)

---

## Objetivo

Refactorizar el home del prototipo para que refleje fielmente el wireframe **WF — Inicio** del brief del cliente. Estructura, contenido y jerarquía visual provienen directamente del Pencil design file.

---

## Estructura de secciones (orden exacto)

| # | Sección | Estado | Acción |
|---|---------|--------|--------|
| 1 | NAV pill flotante | existente | Actualizar links al sitemap completo |
| 2 | INTRO splash | existente | Sin cambios |
| 3 | HERO | existente | Actualizar copia; mantener fotos reales del equipo |
| 4 | STATS BAR | existente | Sin cambios |
| 5 | TRABAJAN CON NOSOTROS | existente | Sin cambios |
| 6 | PROPUESTA DE VALOR | **nueva** | 3 pilares con número, título y descripción |
| 7 | SERVICIOS DESTACADOS | reemplaza `about` + `services` actuales | 4 cards: Formación · Acompañamiento · Talleres · Cursos |
| 8 | NOSOTROS BRIEF | reemplaza sección `about` actual | Imagen + texto + quote + CTA → /nosotros |
| 9 | PROYECTO/PUBLICACIÓN DESTACADA | **nueva** | Placeholder elegante hasta tener contenido real |
| 10 | EQUIPO | **eliminado del home** | Se mueve a /nosotros; ya no vive en el home |
| 11 | CTA → CONTACTO | existente | Actualizar copia |
| 12 | FOOTER | existente | Actualizar nav con las 5 páginas del sitemap |

---

## Contenido por sección

### 3 — HERO
- **Eyebrow:** "Matemática Educativa · Latinoamérica"
- **H1:** "Formación docente para una matemática que transforma."
- **Subtítulo:** "Acompañamos docentes e instituciones con investigación rigurosa y metodología construida desde el aula."
- **CTA primario:** "Ver servicios" → `#servicios`
- **CTA secundario:** "Conocé el equipo" → `#nosotros`
- **Fotos:** Karla Gomez (Directora Académica), Daniela Reyes (Directora General), Wendolyne Ríos (Facilitadora) — sin cambios

### 6 — PROPUESTA DE VALOR (nueva)
- **Eyebrow:** "Nuestro enfoque"
- **Título:** "Tres pilares que sostienen nuestro trabajo."
- **Descripción intro:** "Más de una década construyendo metodologías que conectan la investigación matemática con la práctica docente real."
- **Pilar 01 — Formación docente:** Procesos de desarrollo profesional situados, sostenidos en el tiempo y anclados en las prácticas del aula.
- **Pilar 02 — Acompañamiento institucional:** Diagnóstico, diseño curricular y seguimiento de proyectos con foco en la matemática educativa.
- **Pilar 03 — Investigación aplicada:** Producción y difusión de conocimiento sobre cómo se aprende y se enseña matemática en contextos reales.
- **Diseño:** Tres columnas con número destacado en tipografía serif grande (Cormorant), línea separadora violeta, texto en DM Sans.

### 7 — SERVICIOS DESTACADOS (nueva)
- **Eyebrow:** "Lo que hacemos"
- **Título:** "Líneas de trabajo"
- **4 cards:**
  - **Formación docente** — Programas presenciales e intensivos de desarrollo profesional
  - **Acompañamiento institucional** — Acompañamiento curricular, estratégico y pedagógico
  - **Talleres** — Jornadas temáticas, workshops y eventos de corta duración
  - **Cursos** — Formación online y semipresencial a tu propio ritmo
- **Cada card:** número, título, descripción, tag de modalidad, flecha → `/servicios#id`
- **Diseño:** Grid 4 columnas en desktop, 2 en tablet, 1 en mobile. Cards con borde violeta sutil, hover con elevación y color.

### 8 — NOSOTROS BRIEF (nueva)
- **Eyebrow:** "Quiénes somos"
- **Título:** "Un equipo que nació de una pregunta incómoda."
- **Texto:** "Nacemos del PIDPDM del Cinvestav-IPN. Desde 2010, trabajamos en la intersección entre la investigación y el aula. Investigamos con los docentes, no sobre ellos."
- **Quote flotante:** "Los docentes que entienden el por qué de la matemática enseñan de manera radicalmente distinta."
- **CTA:** "Conocé nuestra historia →" → `/nosotros`
- **Imagen:** placeholder de taller/trabajo en equipo
- **Diseño:** Grid 2 columnas (texto izq, imagen + quote der), fondo `--bg-2` para diferenciarlo.

### 9 — PROYECTO/PUBLICACIÓN DESTACADA (nueva)
- **Eyebrow:** "Publicación reciente"
- **Placeholder elegante:** Card grande con fondo oscuro `--ink`, ícono de libro, texto "Próximamente" + descripción de qué tipo de contenido irá aquí.
- **CTA:** "Ver publicaciones →" → `/proyectos`
- **Diseño:** Card horizontal a full-width, imagen a la izquierda, texto a la derecha.

### 11 — CTA
- **Título:** "Llevá la matemática educativa a tu institución."
- **Subtítulo:** "Contanos qué necesitás y te proponemos un camino a medida. Procesos serios, resultados reales."
- **Botón:** "Escribinos hoy →"

### 12 — FOOTER
- **Nav:** Inicio · Nosotros · Servicios · Proyectos · Contacto
- **Tagline:** "Matemática Educativa · Latinoamérica"
- **Redes:** links a redes sociales (placeholders si no están definidos)

---

## Sistema de diseño (sin cambios)

```css
--v: #6245A8     /* violeta */
--c: #4891C0     /* celeste */
--bg: #F5F4FB    /* fondo global */
--ink: #1A1528   /* texto oscuro */
--fd: Cormorant Garamond  /* display/serif */
--fs: Syne                /* headings/labels */
--fb: DM Sans             /* body */
```

GSAP 3.12.5 + ScrollTrigger — mantener animaciones de scroll reveal existentes, extenderlas a las nuevas secciones.

---

## Lo que NO entra en este spec

- Páginas internas (/nosotros, /servicios, /proyectos, /contacto) — son un sprint separado
- Fotos reales para la sección publicación — placeholder por ahora
- Integración con CMS — fuera de alcance

---

## Criterio de éxito

El home compilado (`node inject.cjs`) debe:
1. Mostrar todas las secciones en el orden correcto
2. Los 4 links del nav llevan a sus secciones/páginas correctas
3. Las animaciones GSAP funcionan en todas las secciones nuevas
4. Responsive: se ve bien en 375px, 768px y 1440px
