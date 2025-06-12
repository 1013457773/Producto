🎉 Eventos Gerizim
“Celebramos sueños, creamos recuerdos”

¿Quiénes Somos?

Eventos Gerizim es una casa de eventos dedicada a convertir cada celebración en una experiencia inolvidable. Nacimos con la pasión de servir y hacer realidad los sueños de nuestros clientes, combinando creatividad, compromiso y excelencia en cada detalle.

🎯 Nuestro Objetivo

Queremos posicionarnos como la empresa líder en organización de eventos en Medellín y Bogotá. Más que ofrecer un servicio, creamos recuerdos mágicos y celebraciones que se graban para siempre en el corazón de nuestros clientes.

🛎️ Nuestros Servicios

🎂 Cumpleaños y Quince Años

💍 Matrimonios inolvidables

🕊️ Bautizos y Primeras Comuniones

🎓 Fiestas de Grado

🏢 Fiestas empresariales y cenas corporativas

🪄 Eventos personalizados y temáticos

🧁 Opciones gastronómicas: desayunos, almuerzos, refrigerios, tortas

📍 Lugares para eventos: finca, salón o espacio del cliente

📖 Nuestra Historia

Lo que comenzó como un pequeño sueño familiar fue creciendo con cada evento exitoso. "Gerizim" significa “bendición”, y creemos que cada celebración debe estar llena de esa energía. Hoy, somos un equipo comprometido con brindar un servicio excepcional, cuidando cada detalle como si fuera nuestro propio evento.

👨‍💻 Equipo de Desarrollo

Proyecto realizado por estudiantes del CESDE:

José Luis Acosta Vanega

Sebastián Ramírez

Danvi Álvarez

Samuel Gómez

🧠 Tecnologías Usadas

⚛️ React JS (Vite)

🎨 CSS y HTML

🗂️ JSON-Server (para simular la base de datos)

☕ Java (Spring Boot con Maven)

🖥️ XAMPP (para otros servicios locales)

📊 Python + Pandas (para análisis de datos de pagos en consola)

📂 Estructura del Proyecto

Gerizim/
├── public/
├── src/
│ ├── assets/
│ │ ├── Componentes/
│ │ ├── Eventos/
│ │ ├── ExtrasSERVER/
│ │ ├── imagenes/
│ │ ├── img/
│ │ ├── Pages/
│ │ ├── servicios/
│ │ └── styles/
│ ├── App.jsx
│ ├── AppGerizim.jsx
│ ├── enrutador.jsx
│ ├── main.jsx
│ └── Api.js
├── Base.json
├── PagosAnalisis.py ← Script de análisis de pagos
├── index.html
├── package.json
└── vite.config.js

🚀 ¿Cómo Ejecutar el Proyecto?

Frontend (React)

Clona el repositorio

Ejecuta:

npm install
npm run dev

Backend Simulado (JSON Server)

npx json-server --watch Base.json --port 3001

Asegúrate de que esté en sincronía con tus peticiones en React.

Análisis de Datos (opcional - Python)

Si deseas ejecutar análisis de pagos registrados:

Asegúrate de tener Python instalado.

Instala pandas:

pip install pandas

Ejecuta el script de análisis:

python PagosAnalisis.py

Este script mostrará en consola:

Total de usuarios registrados

Cantidad de pagos por tipo de evento

Monto total por tipo de evento

Total pagado por cada persona

Backend Real (Spring Boot + SQL Server)

Ver carpeta backend si se está trabajando con IntelliJ y Maven para conexión a base de datos real.
