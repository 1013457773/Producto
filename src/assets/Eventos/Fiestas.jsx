import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

const images = [
  "https://source.unsplash.com/1200x800/?corporate,event",
  "https://source.unsplash.com/1200x800/?business,party",
  "https://source.unsplash.com/1200x800/?meeting,luxury",
  "https://source.unsplash.com/1200x800/?event,people",
];

const Card = ({ title, description, capacity, price, img }) => (
  <div className="card">
    <img src={img} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Capacidad:</strong> {capacity} personas
      </p>
      <p>
        <strong>Precio:</strong> {price}
      </p>
    </div>
  </div>
);

const FiestasEmpresariales = () => {
  // Estado para el tema (azul o fucsia)
  const [theme, setTheme] = useState("theme-azul");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "theme-azul" ? "theme-fucsia" : "theme-azul"));
  };

  return (
    <div className={`fiestas-page ${theme}`}>
      <header className="hero">
        <h1>Fiestas Empresariales Gerizim</h1>
        <p>
          Transformamos tus eventos corporativos en experiencias inolvidables
        </p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Evento ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Paquete Esencial"
          description="Una opción accesible con todos los servicios básicos para celebrar con estilo."
          capacity="100 a 200"
          price="$3,500,000 COP"
          img="https://source.unsplash.com/600x400/?small,corporate-party"
        />
        <Card
          title="Paquete Ejecutivo"
          description="Comodidad y elegancia en espacios selectos con catering premium y ambientación corporativa."
          capacity="200 a 400"
          price="$6,800,000 COP"
          img="https://source.unsplash.com/600x400/?medium,event,corporate"
        />
        <Card
          title="Paquete Elite Corporativo"
          description="La experiencia más exclusiva para grandes celebraciones empresariales con todos los lujos."
          capacity="400 a 600+"
          price="$11,500,000 COP"
          img="https://source.unsplash.com/600x400/?luxury,business,event"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Experiencia de más de 10 años en eventos corporativos.</li>
          <li>Atención personalizada para cada cliente.</li>
          <li>Flexibilidad y adaptabilidad a tus necesidades.</li>
          <li>Equipos y tecnología de última generación.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          © 2025 Gerizim Eventos Corporativos. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default FiestasEmpresariales;
