import React from "react";
import "./Cuadros.css";
import fiesta from "./assets/Opera Instantánea_2025-03-19_195313_www.instagram.com.png";
import cumple from "./assets/Opera Instantánea_2025-03-19_195208_www.instagram.com.png";
import otros from "./assets/Opera Instantánea_2025-03-19_195413_www.instagram.com.png";

const eventos = [
  {
    titulo: "Fiestas Empresariales",
    descripcion: "Organizamos eventos inolvidables.",
    imagen: fiesta,
  },
  {
    titulo: "Cumpleaños Inolvidables",
    descripcion: "Celebra tu día especial con nosotros.",
    imagen: cumple,
  },
  {
    titulo: "Otros Eventos",
    descripcion: "Nos encargamos de todo tipo de eventos.",
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cuadros;
