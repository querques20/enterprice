# Spec: Página Contacto — Empoderamiento Docente

**Fecha:** 2026-04-16  
**Archivo:** `contacto-template.html` (compilado via `inject.cjs`)

---

## Objetivo

Construir la página `/contacto`. Destino del botón "Escribinos hoy →" del CTA en todas las páginas. Página simple y enfocada: formulario + información institucional.

---

## Estructura de secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | NAV | Link "Contacto" activo |
| 2 | HERO + FORMULARIO | Split layout: título izq, form der |
| 3 | INFO INSTITUCIONAL | Email, institución origen, redes |
| 4 | FOOTER | Igual al home |

---

## Contenido por sección

### 2 — HERO + FORMULARIO

**Columna izquierda (texto):**
- **Eyebrow:** "Contacto"
- **H1:** "Contanos qué necesitás."
- **Texto:** "Trabajamos con instituciones educativas de toda Latinoamérica. Contanos el contexto y te armamos una propuesta a medida."
- **Info rápida:**
  - `contacto@empoderamientodocente.org`
  - Respuesta en 48–72 horas hábiles

**Columna derecha (formulario):**
```html
<form class="contact-form">
  <div class="form-group">
    <label>Nombre completo</label>
    <input type="text" placeholder="Tu nombre">
  </div>
  <div class="form-group">
    <label>Institución</label>
    <input type="text" placeholder="Nombre de tu institución">
  </div>
  <div class="form-group">
    <label>País</label>
    <input type="text" placeholder="País">
  </div>
  <div class="form-group">
    <label>Email</label>
    <input type="email" placeholder="tu@email.com">
  </div>
  <div class="form-group">
    <label>¿Qué necesitás?</label>
    <textarea rows="5" placeholder="Contanos brevemente el contexto y lo que estás buscando..."></textarea>
  </div>
  <button type="submit" class="btn-primary">Enviar mensaje →</button>
</form>
```

**Diseño:** Grid 2 cols (texto 2fr, form 3fr). Form con campos en `--white`, bordes `--border`, focus ring `--v`. Submit button reutiliza `.btn-primary` del design system. Fondo general `--bg`. Nota: formulario es HTML estático (sin backend en esta versión del prototipo).

### 3 — INFO INSTITUCIONAL

- Fondo `--bg-2`
- Datos: email, ciudad (Buenos Aires · Ciudad de México), redes (placeholder links)
- Layout: fila centrada con 3 columnas de datos

---

## Clases CSS nuevas

```
.contact-page       → sección hero+form
.contact-inner      → grid 2 cols
.contact-text       → columna izquierda
.contact-info-item  → fila de info (email, país)
.contact-form       → el formulario
.form-group         → wrapper label + input
.form-group label   → label del campo
.form-group input,
.form-group textarea → campos del formulario
.contact-info-bar   → sección info institucional
```

---

## Criterio de éxito

1. Form visible con todos los campos
2. Focus state visible en campos (outline violeta)
3. Botón submit con el estilo correcto
4. Responsive: form de 1 columna en mobile
5. Sin JS requerido (form estático)
