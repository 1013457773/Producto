import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "../styles/Cuadros.css";

import Cumpleaños from "../Eventos/Cumpleaños.jsx";
import Matrimonios from "../Eventos/Matrimonios.jsx";
import Quince from "../Eventos/Quince.jsx";
import Fiestas from "../Eventos/Fiestas.jsx";
import Comuniones from "../Eventos/Comuniones.jsx";
import Grados from "../Eventos/Grados.jsx";
import Bautizos from "../Eventos/Bautizos.jsx";
import Personalizados from "../Eventos/Personalizados.jsx";

import fiesta from "../imagenes/Opera Instantánea_2025-03-19_195313_www.instagram.com.png";
import cumple from "../imagenes/Opera Instantánea_2025-04-29_204206_www.instagram.com.png";
import años from "../imagenes/Opera Instantánea_2025-03-19_195413_www.instagram.com.png";
import matrimonio from "../imagenes/Opera Instantánea_2025-03-19_195208_www.instagram.com.png";
import primeras from "../imagenes/Opera Instantánea_2025-04-29_205038_www.instagram.com.png";
import grados from "../imagenes/Opera Instantánea_2025-04-29_205617_www.instagram.com.png";
import bautizos from "../imagenes/Opera Instantánea_2025-04-29_205755_www.instagram.com.png";
import eventos from "../imagenes/Opera Instantánea_2025-03-19_195536_www.instagram.com.png";

const listaEventos = [
  {
    titulo: "Fiestas Empresariales",
    descripcion:
      "Reuniones, integraciones o cenas de fin de año con todo incluido.",
    imagen: fiesta,
    link: "fiestas",
  },
  {
    titulo: "Cumpleaños Inolvidables",
    descripcion:
      "Decoración temática, música y menú especial para todas las edades.",
    imagen: cumple,
    link: "cumpleaños",
  },
  {
    titulo: "Quince Años",
    descripcion:
      "Una noche mágica con entrada especial, pista de baile y catering premium.",
    imagen: años,
    link: "quince",
  },
  {
    titulo: "Matrimonios",
    descripcion:
      "Planeamos la boda de tus sueños desde la ceremonia hasta la fiesta.",
    imagen: matrimonio,
    link: "matrimonios",
  },
  {
    titulo: "Primeras Comuniones",
    descripcion: "Ambiente familiar, decoración religiosa y menú infantil.",
    imagen: primeras,
    link: "comuniones",
  },
  {
    titulo: "Grados",
    descripcion:
      "Celebra tus logros con estilo y un excelente servicio de catering.",
    imagen: grados,
    link: "grados",
  },
  {
    titulo: "Bautizos",
    descripcion:
      "Ambiente íntimo, decoración clásica y atención personalizada.",
    imagen: bautizos,
    link: "bautizos",
  },
  {
    titulo: "Eventos Personalizados",
    descripcion: "Cuéntanos tu idea y la hacemos realidad. ¡Sin límites!",
    imagen: eventos,
    link: "personalizados",
  },
];

// Objeto que mapea las rutas con los componentes específicos
const componentesEventos = {
  fiestas: Fiestas,
  cumpleaños: Cumpleaños,
  quince: Quince,
  matrimonios: Matrimonios,
  comuniones: Comuniones,
  grados: Grados,
  bautizos: Bautizos,
  personalizados: Personalizados,
};

const Cuadros = () => {
  const location = useLocation();
  const estaViendoDetalle = listaEventos.some((e) =>
    location.pathname.endsWith(e.link)
  );

  return (
    <div className="main-container">
      {!estaViendoDetalle && (
        <>
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
                  <Link to={evento.link} className="cuadro-boton">
                    Más información
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Rutas internas con componentes específicos */}
      <Routes>
        {listaEventos.map((evento) => {
          const Componente = componentesEventos[evento.link];
          return (
            <Route
              key={evento.link}
              path={evento.link}
              element={<Componente />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Cuadros;
