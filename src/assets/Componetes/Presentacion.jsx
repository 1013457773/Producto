import React from "react";
import "../styles/Presentacion.css";

const Presentacion = () => {
  return (
    <div className="presentacion-container">
      <h1 className="presentacion-titulo">¿Quiénes Somos?</h1>
      <p className="presentacion-texto">
        <strong>Eventos Gerizim</strong> es una casa de eventos dedicada a
        convertir cada celebración en una experiencia inolvidable. Nacimos con
        la pasión de servir y hacer realidad los sueños de nuestros clientes,
        combinando creatividad, compromiso y excelencia en cada detalle.
      </p>
      <h2 className="presentacion-subtitulo">Nuestros Servicios 🛎️</h2>
      <ul className="presentacion-lista">
        <li>🎂 Cumpleaños y Quince Años</li>
        <li>💍 Matrimonios inolvidables</li>
        <li>🕊️ Bautizos y Primeras Comuniones</li>
        <li>🎓 Fiestas de Grado</li>
        <li>🏢 Fiestas empresariales y cenas corporativas</li>
        <li>🪄 Eventos personalizados y temáticos</li>
        <li>
          🧁 Opciones gastronómicas: desayunos, almuerzos, refrigerios, tortas
        </li>
        <li>📍 Lugares para eventos: finca, salón o espacio del cliente</li>
      </ul>

      <h2 className="presentacion-subtitulo">Nuestra Historia 📖</h2>
      <p className="presentacion-texto">
        Lo que comenzó como un pequeño sueño familiar fue creciendo con cada
        evento exitoso. <strong>Gerizim</strong> significa "bendición", y
        creemos que cada celebración debe estar llena de esa energía. Hoy, somos
        un equipo comprometido con brindar un servicio excepcional, cuidando
        cada detalle como si fuera nuestro propio evento.
      </p>
    </div>
  );
};

export default Presentacion;
