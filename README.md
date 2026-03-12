# ⏱ Control Horario Laboral

Aplicación web progresiva (PWA) para registrar y gestionar el horario laboral desde el celular Android o PC. Funciona **100% offline** sin necesidad de servidor ni cuenta.

---

## 📱 Instalación en Android

1. Abrí Chrome en tu celular
2. Entrá a: `https://TU-USUARIO.github.io/horario-app`
3. Tocá los 3 puntos (⋮) → **"Agregar a pantalla de inicio"**
4. ¡Listo! Aparece como app nativa

---

## 💻 Uso desde PC

Abrí directamente el archivo `index.html` en cualquier navegador, o accedé por GitHub Pages.

---

## ✅ Funciones

### ⏰ Marcaciones diarias
- Entrada / Salida normal
- Salida médico / Regreso médico
- Salida particular / Regreso particular
- Hora manual (si olvidaste marcar)

### ⚖ Compensatorio semanal
- Si llegás tarde un día y lo recuperás en la misma semana → no se descuenta nada
- Balance por día y semanal en tiempo real
- Barra de progreso de la semana

### 🟢 Horas verdes (banco mensual)
- 6 horas por defecto (configurable)
- Solo se descuenta el déficit neto de semanas ya cerradas
- Si recuperaste las horas en la misma semana, no se toca el banco

### 🏖 Licencias
- Marcar un día o rango de fechas
- No descuenta feriados ni fines de semana del rango
- Tipos: anual, enfermedad, estudio, especial, otro
- Días extra por acuerdo especial o premio
- Historial agrupado por mes

### 📅 Feriados Uruguay
- Cargados automáticamente (incluye Semana Santa, Carnaval)
- Podés agregar feriados personalizados

### 💾 Backup
- Exportar datos en JSON
- Importar: combinar con datos actuales o reemplazar todo
- Carga manual de marcaciones para cualquier fecha pasada o futura

---

## 🚀 Subir a GitHub Pages (paso a paso)

### Opción A — Desde el navegador (sin instalar nada)

1. Creá una cuenta en [github.com](https://github.com) si no tenés
2. Creá un repositorio nuevo llamado `horario-app` (público)
3. Subí todos los archivos arrastrándolos al repositorio
4. Andá a **Settings → Pages → Source: Deploy from branch → main → / (root)**
5. Guardá. En 1-2 minutos tu app estará en:
   `https://TU-USUARIO.github.io/horario-app`

### Opción B — Con Git desde la PC

```bash
git init
git add .
git commit -m "primera version"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/horario-app.git
git push -u origin main
```

Luego activá GitHub Pages en Settings del repositorio.

---

## 📁 Estructura de archivos

```
horario-app/
├── index.html       ← Toda la aplicación
├── manifest.json    ← Configuración PWA (icono, nombre, colores)
├── sw.js            ← Service Worker (funciona offline)
├── icons/
│   ├── icon-192.png ← Ícono para Android
│   └── icon-512.png ← Ícono grande
└── README.md        ← Este archivo
```

---

## 🔒 Privacidad

Todos los datos se guardan **localmente en tu dispositivo** (localStorage del navegador). No se envía ningún dato a ningún servidor.

---

## ⚙ Configuración

Desde la pestaña **Config** podés cambiar:
- Horario de entrada y salida
- Tolerancia de llegada tarde (minutos)
- Total de horas verdes disponibles
- Feriados personalizados
