import React from "react";
import Menu from "../Componetes/Menus.jsx";
import "../Eventos/cssEventos/TiendaFlores.css";

// Importa tus imágenes
import flor1 from "../imagenes/flores/f1.jpg";
import flor2 from "../imagenes/flores/f2.jpg";
import flor3 from "../imagenes/flores/f3.jpg";
import flor4 from "../imagenes/flores/f4.jpg";
import flor5 from "../imagenes/flores/f5.jpg";
import flor6 from "../imagenes/flores/f6.jpg";
import flor7 from "../imagenes/flores/f7.jpg";
import flor8 from "../imagenes/flores/f8.jpg";
import flor9 from "../imagenes/flores/f9.jpg";
import flor10 from "../imagenes/flores/f10.jpg";

export default function TiendaFlores() {
  const productos = [
    {
      id: 1,
      titulo: "Ramo Rosas Rojas",
      descripcion: "Elegante ramo con 12 rosas rojas naturales.",
      precio: "$25.00",
      calificacion: 4.5,
      imagen: flor1,
    },
    {
      id: 2,
      titulo: "Bouquet Primavera",
      descripcion: "Mezcla colorida de flores frescas de temporada.",
      precio: "$30.00",
      calificacion: 4.8,
      imagen: flor2,
    },
    {
      id: 3,
      titulo: "Centro de Mesa Clásico",
      descripcion: "Ideal para eventos o decoración de interiores.",
      precio: "$20.00",
      calificacion: 4.2,
      imagen: flor3,
    },
    {
      id: 4,
      titulo: "Caja de Tulipanes",
      descripcion: "Presentación delicada con tulipanes variados.",
      precio: "$35.00",
      calificacion: 4.9,
      imagen: flor4,
    },
    {
      id: 5,
      titulo: "Ramo Amor Eterno",
      descripcion: "Combinación de rosas y lirios en tonos cálidos.",
      precio: "$28.00",
      calificacion: 4.7,
      imagen: flor5,
    },
    {
      id: 6,
      titulo: "Florero Pastel",
      descripcion: "Arreglo de flores pastel en jarrón de vidrio.",
      precio: "$22.00",
      calificacion: 4.3,
      imagen: flor6,
    },
    {
      id: 7,
      titulo: "Orquídeas de Lujo",
      descripcion: "Orquídeas blancas en presentación minimalista.",
      precio: "$40.00",
      calificacion: 4.9,
      imagen: flor7,
    },
    {
      id: 8,
      titulo: "Ramo Silvestre",
      descripcion: "Flores silvestres con estilo bohemio.",
      precio: "$26.00",
      calificacion: 4.4,
      imagen: flor8,
    },
    {
      id: 9,
      titulo: "Rosas con Chocolates",
      descripcion: "Set romántico con flores y chocolates gourmet.",
      precio: "$38.00",
      calificacion: 4.6,
      imagen: flor9,
    },
    {
      id: 10,
      titulo: "Mini Ramo Sorpresa",
      descripcion: "Pequeño ramo con flores variadas sorpresa.",
      precio: "$15.00",
      calificacion: 4.1,
      imagen: flor10,
    },
  ];

  return (
    <div>
      <Menu />
      <section className="tienda">
        <h2 className="tienda-titulo">Tienda de Flores</h2>
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img
                src={producto.imagen}
                alt={producto.titulo}
                className="producto-img"
              />
              <h3>{producto.titulo}</h3>
              <p className="descripcion">{producto.descripcion}</p>
              <p className="precio">{producto.precio}</p>
              <p className="calificacion">⭐ {producto.calificacion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
