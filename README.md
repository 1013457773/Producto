# 🎉 Eventos Gerizim

> “Celebramos sueños, creamos recuerdos”

---

## ¿Quiénes Somos?

**Eventos Gerizim** es una casa de eventos dedicada a convertir cada celebración en una experiencia inolvidable.  
Nacimos con la pasión de servir y hacer realidad los sueños de nuestros clientes, combinando creatividad, compromiso y excelencia en cada detalle.

---

## 🎯 Nuestro Objetivo

Posicionarnos como la empresa líder en organización de eventos en Medellín y Bogotá.  
Más que ofrecer un servicio, **creamos recuerdos mágicos** y celebraciones que se graban para siempre en el corazón de nuestros clientes.

---

## 🛎️ Nuestros Servicios

- 🎂 Cumpleaños Inolvidables
- 👑 Quince Años
- 💍 Matrimonios
- 🕊️ Bautizos
- 📖 Primeras Comuniones
- 🎓 Grados
- 🏢 Fiestas Empresariales
- 🪄 Eventos Personalizados
- 🧁 Servicios adicionales: tortas, flores, comidas, arepas

---

## 👨‍💻 Equipo de Desarrollo

Proyecto realizado por estudiantes del CESDE:

- José Luis Acosta Vanega
- Sebastián Ramírez
- Danvi Álvarez
- Samuel Gómez

---

## 🧠 Tecnologías Usadas

- ⚛️ React (Vite)
- ☕ Java Spring Boot
- 🗂️ JSON-Server (API local simulada)
- 🎨 CSS modular
- 📊 Recharts (gráficas dinámicas)
- 🧪 SweetAlert2 (alertas interactivas)
- 🐘 SQL Server (para el backend real)
- 🐍 Python + Pandas (análisis adicional de datos)
- 📈 Matplotlib + Seaborn (gráficas de alto nivel en Python)

---

## 📊 Consultas y Analítica Visual

Módulo incluido en la ruta protegida `/consultas`, donde se muestran:

- 📌 **Pagos por tipo de evento**
- 👥 **Total pagado por cada persona**
- 📈 **Distribución circular de eventos**
- 📅 **Fechas con más eventos** (coloreadas, rojo = más concurridas)

Este panel se construyó usando `Recharts`, es responsivo y visualmente profesional.

---

## 📂 Estructura del Proyecto

Gerizim/
├── public/
├── src/
│ ├── assets/
│ │ ├── Componetes/
│ │ │ └── Menus.jsx
│ │ ├── Pages/
│ │ ├── servicios/
│ │ │ └── Consultas.jsx
│ │ ├── ExtrasSERVER/
│ │ ├── styles/
│ ├── App.jsx
│ ├── main.jsx
│ ├── Api.js
├── Base.json
├── PagosAnalisis.py (opcional con Python)
├── package.json
└── vite.config.js

## 🚀 ¿Cómo Ejecutar el Proyecto?

### 🔹 Frontend (React)

```bash
npm install
npm run dev

Backend simulado con JSON-Server

npx json-server --watch Base.json --port 3000

📦 Dependencias (Frontend React)

npm install react-router-dom
npm install sweetalert2
npm install recharts
npm install json-server --save-dev

🐍 Dependencias Python (Análisis opcional)

pip install pandas matplotlib seaborn

🧩 Tecnologías utilizadas

React + Vite

React Router DOM

SweetAlert2

Recharts

React Calendar

JSON Server (como backend local)

🧩 Tecnologías utilizadas

React + Vite

React Router DOM

SweetAlert2

Recharts

React Calendar

JSON Server (como backend local)

📋 Funcionalidades

✅ Login y Registro

Validación de usuario desde usuarios en Base.json.

✅ Gestión de pagos

Registro de pagos por evento.

Edición y eliminación.

Tarjetas visuales.

✅ Servicios Extra (Flores, Tortas, Arepas, etc.)

Pantallas visuales y rutas protegidas.

✅ Consultas

Gráficos por evento, persona, fecha.

Visualización de reservas.

✅ Gestión de reservas

Calendario interactivo con fechas ocupadas.

Tarjetas de reservas.

✅ Encuesta de satisfacción

Formulario con animación.

Tarjetas con opiniones recibidas.

✅ Scripts para Git


git init
git add .
git commit -m "Primera versión completa"
git branch -M main
git remote add origin https://github.com/1013457773/Producto.git
git push -u origin main


✨ Frase Final
En Eventos Gerizim, cada detalle cuenta. Creamos experiencias que trascienden, recuerdos que perduran, y eventos que se sienten como magia.
¡Gracias por celebrar con nosotros!
```
