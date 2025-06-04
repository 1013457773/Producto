import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

const images = [
  "https://source.unsplash.com/1200x800/?first,communion",
  "https://source.unsplash.com/1200x800/?church,communion",
  "https://source.unsplash.com/1200x800/?family,celebration",
  "https://source.unsplash.com/1200x800/?kids,party",
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

const PrimerasComuniones = () => {
  const [theme, setTheme] = useState("theme-comuniones");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "theme-comuniones" ? "theme-nature" : "theme-comuniones"
    );
  };

  return (
    <div className={`fiestas-page ${theme}`}>
      <header className="hero">
        <h1>Primeras Comuniones</h1>
        <p>Ambiente familiar, decoración religiosa y menú infantil.</p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Primera Comunión ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Celebración Básica"
          description="Evento íntimo para la familia más cercana con decoración básica y menú infantil."
          capacity="30 a 60"
          price="$2,800,000 COP"
          img="https://source.unsplash.com/600x400/?communion,kids"
        />
        <Card
          title="Celebración Tradicional"
          description="Decoración religiosa completa, ceremonia especial y catering personalizado."
          capacity="60 a 150"
          price="$5,900,000 COP"
          img="https://source.unsplash.com/600x400/?religious,event"
        />
        <Card
          title="Comunión Premium"
          description="Animación infantil, estaciones de comida y recuerdos personalizados para los invitados."
          capacity="150 a 300+"
          price="$9,700,000 COP"
          img="https://source.unsplash.com/600x400/?party,kids,communion"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué celebrar con nosotros?</h2>
        <ul>
          <li>Decoración con símbolos religiosos y delicados detalles.</li>
          <li>Menú infantil delicioso y saludable.</li>
          <li>Ambiente seguro y familiar.</li>
          <li>Espacios amplios para niños y familiares.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gerizim Comuniones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PrimerasComuniones;
