import React from "react";
import Menu from "../Componetes/Menus.jsx";
import "../Eventos/cssEventos/TiendaArepas.css";

// Importa tus imágenes aquí
import arepa1 from "../imagenes/arepas/a1.jpg";
import arepa2 from "../imagenes/arepas/a2.jpg";
import arepa3 from "../imagenes/arepas/a3.jpg";
import arepa4 from "../imagenes/arepas/a4.jpg";
import arepa5 from "../imagenes/arepas/a5.jpg";
import arepa6 from "../imagenes/arepas/a6.jpg";
import arepa7 from "../imagenes/arepas/a7.jpg";
import arepa8 from "../imagenes/arepas/a8.jpg";
import arepa9 from "../imagenes/arepas/a9.jpg";
import arepa10 from "../imagenes/arepas/a10.jpg";

export default function TiendaArepas() {
  const productos = [
    {
      id: 1,
      titulo: "Arepa Reina Pepiada",
      descripcion: "Rellena de pollo, aguacate y mayonesa.",
      precio: "$3.50",
      calificacion: 4.7,
      imagen: arepa1,
    },
    {
      id: 2,
      titulo: "Arepa de Queso",
      descripcion: "Clásica arepa rellena con queso blanco fundido.",
      precio: "$3.00",
      calificacion: 4.5,
      imagen: arepa2,
    },
    {
      id: 3,
      titulo: "Arepa Pelúa",
      descripcion: "Carne desmechada con queso rallado.",
      precio: "$4.00",
      calificacion: 4.6,
      imagen: arepa3,
    },
    {
      id: 4,
      titulo: "Arepa de Jamón y Queso",
      descripcion: "Arepa con relleno tradicional y sabroso.",
      precio: "$3.20",
      calificacion: 4.4,
      imagen: arepa4,
    },
    {
      id: 5,
      titulo: "Arepa de Carne Mechada",
      descripcion: "Jugosa carne desmechada estilo criollo.",
      precio: "$3.80",
      calificacion: 4.7,
      imagen: arepa5,
    },
    {
      id: 6,
      titulo: "Arepa Vegana",
      descripcion: "Rellena de vegetales frescos y hummus.",
      precio: "$3.60",
      calificacion: 4.3,
      imagen: arepa6,
    },
    {
      id: 7,
      titulo: "Arepa de Pollo BBQ",
      descripcion: "Rellena con pollo a la BBQ y vegetales.",
      precio: "$4.20",
      calificacion: 4.5,
      imagen: arepa7,
    },
    {
      id: 8,
      titulo: "Arepa Mixta",
      descripcion: "Combinación de carnes y queso.",
      precio: "$4.50",
      calificacion: 4.6,
      imagen: arepa8,
    },
    {
      id: 9,
      titulo: "Arepa de Perico",
      descripcion: "Rellena de huevos revueltos con tomate y cebolla.",
      precio: "$3.40",
      calificacion: 4.2,
      imagen: arepa9,
    },
    {
      id: 10,
      titulo: "Arepa Dulce",
      descripcion: "Arepa con toques de anís y relleno dulce.",
      precio: "$3.30",
      calificacion: 4.1,
      imagen: arepa10,
    },
  ];

  return (
    <div>
      <Menu />
      <section className="tienda">
        <h2 className="tienda-titulo">Tienda de Arepas</h2>
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
