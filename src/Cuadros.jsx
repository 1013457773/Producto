import React from "react";
import "./Cuadros.css";
import fiesta from "./assets/Opera Instantánea_2025-03-19_195313_www.instagram.com.png";
import cumple from "./assets/Opera Instantánea_2025-03-19_195208_www.instagram.com.png";
import otros from "./assets/Opera Instantánea_2025-03-19_195413_www.instagram.com.png";

const eventos = [
  {
    titulo: "Fiestas Empresariales",
    descripcion:
      "Reuniones, integraciones o cenas de fin de año con todo incluido.",
    imagen: fiesta,
  },
  {
    titulo: "Cumpleaños Inolvidables",
    descripcion:
      "Decoración temática, música y menú especial para todas las edades.",
    imagen: cumple,
  },
  {
    titulo: "Quince Años",
    descripcion:
      "Una noche mágica con entrada especial, pista de baile y catering premium.",
    imagen: otros,
  },
  {
    titulo: "Matrimonios",
    descripcion:
      "Planeamos la boda de tus sueños desde la ceremonia hasta la fiesta.",
    imagen: fiesta,
  },
  {
    titulo: "Primeras Comuniones",
    descripcion: "Ambiente familiar, decoración religiosa y menú infantil.",
    imagen: cumple,
  },
  {
    titulo: "Grados",
    descripcion:
      "Celebra tus logros con estilo y un excelente servicio de catering.",
    imagen: otros,
  },
  {
    titulo: "Bautizos",
    descripcion:
      "Ambiente íntimo, decoración clásica y atención personalizada.",
    imagen: cumple,
  },
  {
    titulo: "Eventos Personalizados",
    descripcion: "Cuéntanos tu idea y la hacemos realidad. ¡Sin límites!",
    imagen: otros,
  },
];

const Cuadros = () => {
  return (
    <div className="cuadros-container">
      {eventos.map((evento, index) => (
        <div key={index} className="cuadro">
          <img
            src={evento.imagen}
            alt={evento.titulo}
            className="cuadro-imagen"
          />
          <div className="cuadro-contenido">
            <h3 className="cuadro-titulo">{evento.titulo}</h3>
            <p className="cuadro-descripcion">{evento.descripcion}</p>
            <button className="cuadro-boton">Más información</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cuadros;
