import React from "react";
import Menu from "../Componetes/Menus.jsx";
import "../Eventos/cssEventos/TiendaTortas.css";

import torta1 from "../imagenes/tortas/t1.jpg";
import torta2 from "../imagenes/tortas/t2.jpg";
import torta3 from "../imagenes/tortas/t3.jpg";
import torta4 from "../imagenes/tortas/t4.jpg";
import torta5 from "../imagenes/tortas/t5.jpg";
import torta6 from "../imagenes/tortas/t6.jpg";
import torta7 from "../imagenes/tortas/t7.jpg";
import torta8 from "../imagenes/tortas/t8.jpg";
import torta9 from "../imagenes/tortas/t9.jpg";
import torta10 from "../imagenes/tortas/t10.jpg";

export default function TiendaTortas() {
  const productos = [
    {
      id: 1,
      titulo: "Torta Chocolate",
      descripcion: "Bizcocho húmedo con cobertura de chocolate.",
      precio: "$20.00",
      calificacion: 4.7,
      imagen: torta1,
    },
    {
      id: 2,
      titulo: "Torta Fresa",
      descripcion: "Cubierta de fresas frescas y crema batida.",
      precio: "$22.00",
      calificacion: 4.5,
      imagen: torta2,
    },
    {
      id: 3,
      titulo: "Red Velvet",
      descripcion: "Pastel rojo aterciopelado con glaseado cremoso.",
      precio: "$24.00",
      calificacion: 4.8,
      imagen: torta3,
    },
    {
      id: 4,
      titulo: "Torta de Zanahoria",
      descripcion: "Densa, dulce y con nueces, cubierta de crema.",
      precio: "$21.00",
      calificacion: 4.4,
      imagen: torta4,
    },
    {
      id: 5,
      titulo: "Torta Tres Leches",
      descripcion: "Clásico pastel empapado en tres tipos de leche.",
      precio: "$23.00",
      calificacion: 4.6,
      imagen: torta5,
    },
    {
      id: 6,
      titulo: "Torta de Vainilla",
      descripcion: "Bizcocho esponjoso con suave glaseado de vainilla.",
      precio: "$19.00",
      calificacion: 4.3,
      imagen: torta6,
    },
    {
      id: 7,
      titulo: "Torta Oreo",
      descripcion: "Con galletas Oreo trituradas y relleno cremoso.",
      precio: "$25.00",
      calificacion: 4.9,
      imagen: torta7,
    },
    {
      id: 8,
      titulo: "Torta Cheesecake",
      descripcion: "Base de galleta con relleno cremoso tipo cheesecake.",
      precio: "$26.00",
      calificacion: 4.7,
      imagen: torta8,
    },
    {
      id: 9,
      titulo: "Torta Limón",
      descripcion: "Sabor cítrico con un glaseado dulce y fresco.",
      precio: "$20.00",
      calificacion: 4.5,
      imagen: torta9,
    },
    {
      id: 10,
      titulo: "Torta Piña",
      descripcion: "Con rodajas de piña caramelizadas y base suave.",
      precio: "$22.00",
      calificacion: 4.6,
      imagen: torta10,
    },
  ];

  return (
    <div>
      <Menu />
      <section className="tienda">
        <h2 className="tienda-titulo">Tienda de Tortas</h2>
        <p className="tienda-subtitulo">
          Explora nuestra variedad de tortas artesanales hechas con amor y los mejores ingredientes. ¡Encuentra tu favorita!
        </p>

        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img
                src={producto.imagen}
                alt={producto.titulo}
                className="producto-img"
              />
              <h3 className="producto-titulo">{producto.titulo}</h3>
              <p className="descripcion">{producto.descripcion}</p>
              <p className="precio">{producto.precio}</p>
              <p className="calificacion">⭐ {producto.calificacion} / 5</p>
              <button className="boton-comprar">Ver más</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
