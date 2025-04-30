import React from "react";
import "./Cuadros.css";
import fiesta from "./assets/Opera Instantánea_2025-03-19_195313_www.instagram.com.png";
import cumple from "./assets/Opera Instantánea_2025-04-29_204206_www.instagram.com.png";
import años from "./assets/Opera Instantánea_2025-03-19_195413_www.instagram.com.png";
import matrimonio from "./assets/Opera Instantánea_2025-03-19_195208_www.instagram.com.png";
import primeras from "./assets/Opera Instantánea_2025-04-29_205038_www.instagram.com.png";
import grados from "./assets/Opera Instantánea_2025-04-29_205617_www.instagram.com.png";
import bautizos from "./assets/Opera Instantánea_2025-04-29_205755_www.instagram.com.png";
import eventos from "./assets/Opera Instantánea_2025-03-19_195536_www.instagram.com.png";

const listaEventos = [
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
    imagen: años,
  },
  {
    titulo: "Matrimonios",
    descripcion:
      "Planeamos la boda de tus sueños desde la ceremonia hasta la fiesta.",
    imagen: matrimonio,
  },
  {
    titulo: "Primeras Comuniones",
    descripcion: "Ambiente familiar, decoración religiosa y menú infantil.",
    imagen: primeras,
  },
  {
    titulo: "Grados",
    descripcion:
      "Celebra tus logros con estilo y un excelente servicio de catering.",
    imagen: grados,
  },
  {
    titulo: "Bautizos",
    descripcion:
      "Ambiente íntimo, decoración clásica y atención personalizada.",
    imagen: bautizos,
  },
  {
    titulo: "Eventos Personalizados",
    descripcion: "Cuéntanos tu idea y la hacemos realidad. ¡Sin límites!",
    imagen: eventos,
  },
];

const Cuadros = () => {
  return (
    <div className="main-container">
      <h2 className="titulo">Tipos de eventos que realizamos</h2>
      <div className="cuadros-container">
        {listaEventos.map((evento, index) => (
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
    </div>
  );
};

export default Cuadros;
