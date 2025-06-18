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

✨ Frase Final
En Eventos Gerizim, cada detalle cuenta. Creamos experiencias que trascienden, recuerdos que perduran, y eventos que se sienten como magia.
¡Gracias por celebrar con nosotros!
```
