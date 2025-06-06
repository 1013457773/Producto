import React from "react";
import imgFlores from "../imagenes/casa1.jpg";
import imgTortas from "../imagenes/casa2.jpg";
import imgComidas from "../imagenes/casa3.jpg";
import imgArepas from "../imagenes/casa1.jpg";

import "../Eventos/cssEventos/ServiciosExtras.css";
import Menu from "../Componetes/Menus.jsx";
import { FaLeaf, FaBirthdayCake, FaUtensils, FaHotdog } from "react-icons/fa";

export default function Eventos() {
  const servicios = [
    {
      id: "flores",
      nombre: "Flores",
      icono: <FaLeaf />,
      descripcion:
        "Arreglos florales frescos y elegantes para tu ocasión especial.",
      beneficios: [
        "Flores naturales",
        "Diseños personalizados",
        "Entrega puntual",
      ],
      imagen: imgFlores,
    },
    {
      id: "tortas",
      nombre: "Tortas",
      icono: <FaBirthdayCake />,
      descripcion: "Deliciosas tortas artesanales personalizadas a tu gusto.",
      beneficios: [
        "Ingredientes frescos",
        "Diseños creativos",
        "Sabores únicos",
      ],
      imagen: imgTortas,
    },
    {
      id: "comidas",
      nombre: "Comidas",
      icono: <FaUtensils />,
      descripcion: "Variedad de platos y banquetes para tu evento o reunión.",
      beneficios: [
        "Menú variado",
        "Opciones vegetarianas",
        "Servicio completo",
      ],
      imagen: imgComidas,
    },
    {
      id: "arepas",
      nombre: "Arepas Rellenas",
      icono: <FaHotdog />,
      descripcion: "Arepas con rellenos variados, listas para disfrutar.",
      beneficios: [
        "Ingredientes locales",
        "Recetas tradicionales",
        "Sabores caseros",
      ],
      imagen: imgArepas,
    },
  ];

  return (
    <div>
      <Menu />
      <section className="eventos-extras">
        <h2 className="eventos-titulo">Servicios Extras que ofrecemos</h2>
        <p className="eventos-descripcion">
          Explora nuestros servicios adicionales con estilo y calidad.
        </p>

        <div className="eventos-cajas-container">
          {servicios.map((servicio) => (
            <div key={servicio.id} className={`evento-caja ${servicio.id}`}>
              <div className="evento-logo">{servicio.icono}</div>
              <h3>{servicio.nombre}</h3>
              <p>{servicio.descripcion}</p>
              <ul className="evento-beneficios">
                {servicio.beneficios.map((b, i) => (
                  <li key={i}>✅ {b}</li>
                ))}
              </ul>
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className="evento-img"
              />
              <button className="evento-boton">Más información</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
