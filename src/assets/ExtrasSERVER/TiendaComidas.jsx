import React from "react";
import Menu from "../Componetes/Menus.jsx";
import "../Eventos/cssEventos/TiendaTortas.css"; // Puedes renombrarlo a TiendaComidas.css si prefieres

import comida1 from "../imagenes/comidas/c1.jpg";
import comida2 from "../imagenes/comidas/c2.jpg";
import comida3 from "../imagenes/comidas/c3.jpg";
import comida4 from "../imagenes/comidas/c4.jpg";
import comida5 from "../imagenes/comidas/c5.jpg";
import comida6 from "../imagenes/comidas/c6.jpg";
import comida7 from "../imagenes/comidas/c7.jpg";
import comida8 from "../imagenes/comidas/c8.jpg";
import comida9 from "../imagenes/comidas/c9.jpg";
import comida10 from "../imagenes/comidas/c10.jpg";

export default function TiendaComidas() {
  const productos = [
    {
      id: 1,
      titulo: "Bandeja Paisa",
      descripcion: "Clásico plato colombiano con frijoles, arroz, carne y más.",
      precio: "$40.00",
      calificacion: 4.9,
      imagen: comida1,
    },
    {
      id: 2,
      titulo: "Paella Valenciana",
      descripcion: "Arroz con mariscos y verduras al estilo español.",
      precio: "$45.00",
      calificacion: 4.8,
      imagen: comida2,
    },
    {
      id: 3,
      titulo: "Asado Argentino",
      descripcion: "Carnes variadas a la parrilla con guarniciones.",
      precio: "$50.00",
      calificacion: 4.7,
      imagen: comida3,
    },
    {
      id: 4,
      titulo: "Tacos Mexicanos",
      descripcion: "Tortillas de maíz rellenas de carne, queso y vegetales.",
      precio: "$28.00",
      calificacion: 4.6,
      imagen: comida4,
    },
    {
      id: 5,
      titulo: "Pizza Margarita",
      descripcion: "Pizza tradicional con tomate, mozzarella y albahaca.",
      precio: "$22.00",
      calificacion: 4.5,
      imagen: comida5,
    },
    {
      id: 6,
      titulo: "Sushi Roll",
      descripcion: "Rollos de arroz con pescado fresco y vegetales.",
      precio: "$35.00",
      calificacion: 4.7,
      imagen: comida6,
    },
    {
      id: 7,
      titulo: "Lomo Saltado",
      descripcion: "Plato peruano con carne salteada y papas.",
      precio: "$38.00",
      calificacion: 4.6,
      imagen: comida7,
    },
    {
      id: 8,
      titulo: "Hamburguesa Gourmet",
      descripcion: "Hamburguesa con carne premium y toppings especiales.",
      precio: "$32.00",
      calificacion: 4.5,
      imagen: comida8,
    },
    {
      id: 9,
      titulo: "Shawarma Árabe",
      descripcion: "Pan pita relleno de pollo especiado y salsas.",
      precio: "$30.00",
      calificacion: 4.4,
      imagen: comida9,
    },
    {
      id: 10,
      titulo: "Ravioles de Queso",
      descripcion: "Pasta rellena con salsa cremosa de champiñones.",
      precio: "$34.00",
      calificacion: 4.7,
      imagen: comida10,
    },
  ];

  return (
    <div>
      <Menu />
      <section className="tienda">
        <h2 className="tienda-titulo">Tienda de Comidas</h2>
        <p className="tienda-subtitulo">
          Deléitate con nuestros platos internacionales preparados con ingredientes frescos y mucho sabor. ¡Haz tu pedido ahora!
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
