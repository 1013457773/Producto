import React, { useState } from "react"; //
import "./Locaciones.css";
import img1 from "./assets/casa1.jpg";
import img2 from "./assets/casa2.jpg";
import img3 from "./assets/casa3.jpg";

const locaciones = [
  {
    titulo: "EL RANCHO DE NACHO",
    descripcion: "Zonas verdes, piscina, salón y parqueadero.",
    valoracion: "4.4",
    opiniones: 12,
    ciudad: "Tenjo, Cundinamarca",
    menuDesde: "$30.000",
    capacidad: "20 a 150 invitados",
    popularidad: "20 parejas lo contrataron",
    imagen: img1,
  },
  {
    titulo: "VALLE ARRIBA",
    descripcion: "Vista panorámica, jardines exóticos, ideal para bodas.",
    valoracion: "5.0",
    opiniones: 3,
    ciudad: "Bogotá, Bogotá DC",
    menuDesde: "$29.000",
    capacidad: "20 a 200 invitados",
    popularidad: "Más de 30 parejas lo contrataron",
    imagen: img2,
  },
  {
    titulo: "HACIENDA SAN PABLO",
    descripcion: "Senderos naturales con luces colgantes y terraza rústica.",
    valoracion: "4.8",
    opiniones: 31,
    ciudad: "Subachoque, Cundinamarca",
    menuDesde: "$27.000",
    capacidad: "20 a 150 invitados",
    popularidad: "Más de 135 parejas lo contrataron",
    imagen: img3,
  },
];

const Locaciones = () => {
  const [index, setIndex] = useState(0);

  const anterior = () =>
    setIndex(index === 0 ? locaciones.length - 1 : index - 1);
  const siguiente = () =>
    setIndex(index === locaciones.length - 1 ? 0 : index + 1);

  const actual = locaciones[index];

  return (
    <div className="locaciones-container">
      <h2 className="locaciones-titulo">Nuestras Locaciones</h2>
      <div className="carrusel">
        <button className="nav-btn" onClick={anterior}>
          ❮
        </button>

        <div className="locacion-card">
          <img src={actual.imagen} alt={actual.titulo} />
          <h3>{actual.titulo}</h3>
          <p>{actual.descripcion}</p>

          <p>
            <strong>Valoración:</strong> ⭐ {actual.valoracion} / 5.0 (
            {actual.opiniones} opiniones)
          </p>
          <p>
            <strong>Ubicación:</strong> {actual.ciudad}
          </p>
          <p>
            <strong>Menús desde:</strong> {actual.menuDesde}
          </p>
          <p>
            <strong>Capacidad:</strong> {actual.capacidad}
          </p>
          <p>
            <em>{actual.popularidad}</em>
          </p>

          <button className="consultar-btn">Consultar más</button>
        </div>

        <button className="nav-btn" onClick={siguiente}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Locaciones;
