import React, { useState } from "react";
import "../styles/Cuadros.css";

// Importa todos los componentes de eventos
import Cumpleaños from "../Eventos/Cumpleaños";
import Matrimonios from "../Eventos/Matrimonios";
import Quince from "../Eventos/Quince";
import Fiestas from "../Eventos/Fiestas";
import Comuniones from "../Eventos/Comuniones";
import Grados from "../Eventos/Grados";
import Bautizos from "../Eventos/Bautizos";
import Personalizados from "../Eventos/Personalizados";

// Imágenes
import fiesta from "../imagenes/Opera Instantánea_2025-03-19_195313_www.instagram.com.png";
import cumple from "../imagenes/Opera Instantánea_2025-04-29_204206_www.instagram.com.png";
import años from "../imagenes/Opera Instantánea_2025-03-19_195413_www.instagram.com.png";
import matrimonio from "../imagenes/Opera Instantánea_2025-03-19_195208_www.instagram.com.png";
import primeras from "../imagenes/Opera Instantánea_2025-04-29_205038_www.instagram.com.png";
import grados from "../imagenes/Opera Instantánea_2025-04-29_205617_www.instagram.com.png";
import bautizos from "../imagenes/Opera Instantánea_2025-04-29_205755_www.instagram.com.png";
import eventos from "../imagenes/Opera Instantánea_2025-03-19_195536_www.instagram.com.png";

// Lista de eventos
const listaEventos = [
  {
    titulo: "Fiestas Empresariales",
    descripcion:
      "Reuniones, integraciones o cenas de fin de año con todo incluido.",
    imagen: fiesta,
    componente: "Fiestas",
  },
  {
    titulo: "Cumpleaños Inolvidables",
    descripcion:
      "Decoración temática, música y menú especial para todas las edades.",
    imagen: cumple,
    componente: "Cumpleaños",
  },
  {
    titulo: "Quince Años",
    descripcion:
      "Una noche mágica con entrada especial, pista de baile y catering premium.",
    imagen: años,
    componente: "Quince",
  },
  {
    titulo: "Matrimonios",
    descripcion:
      "Planeamos la boda de tus sueños desde la ceremonia hasta la fiesta.",
    imagen: matrimonio,
    componente: "Matrimonios",
  },
  {
    titulo: "Primeras Comuniones",
    descripcion: "Ambiente familiar, decoración religiosa y menú infantil.",
    imagen: primeras,
    componente: "Comuniones",
  },
  {
    titulo: "Grados",
    descripcion:
      "Celebra tus logros con estilo y un excelente servicio de catering.",
    imagen: grados,
    componente: "Grados",
  },
  {
    titulo: "Bautizos",
    descripcion:
      "Ambiente íntimo, decoración clásica y atención personalizada.",
    imagen: bautizos,
    componente: "Bautizos",
  },
  {
    titulo: "Eventos Personalizados",
    descripcion: "Cuéntanos tu idea y la hacemos realidad. ¡Sin límites!",
    imagen: eventos,
    componente: "Personalizados",
  },
];

// Mapa para renderizar el componente correcto
const componentes = {
  Fiestas: <Fiestas />,
  Cumpleaños: <Cumpleaños />,
  Quince: <Quince />,
  Matrimonios: <Matrimonios />,
  Comuniones: <Comuniones />,
  Grados: <Grados />,
  Bautizos: <Bautizos />,
  Personalizados: <Personalizados />,
};

const Cuadros = () => {
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  const volver = () => setEventoSeleccionado(null);

  return (
    <div className="main-container">
      {!eventoSeleccionado ? (
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
                  <button
                    className="cuadro-boton"
                    onClick={() => setEventoSeleccionado(evento.componente)}
                  >
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="detalle-evento">
          <button className="cuadro-boton" onClick={volver}>
            Volver a la lista
          </button>
          <br />
          <br />
          {componentes[eventoSeleccionado]}
        </div>
      )}
    </div>
  );
};

export default Cuadros;
