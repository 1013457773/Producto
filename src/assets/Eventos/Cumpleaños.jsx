import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

const images = [
  "https://source.unsplash.com/1200x800/?birthday,party",
  "https://source.unsplash.com/1200x800/?birthday,cake",
  "https://source.unsplash.com/1200x800/?birthday,decoration",
  "https://source.unsplash.com/1200x800/?birthday,celebration",
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

const CumpleanosInolvidables = () => {
  const themes = ["theme-fucsia", "theme-verde", "theme-naranja"];
  const [themeIndex, setThemeIndex] = useState(0);

  const nextTheme = () => {
    setThemeIndex((themeIndex + 1) % themes.length);
  };

  return (
    <div className={`fiestas-page ${themes[themeIndex]}`}>
      <header className="hero">
        <h1>Cumpleaños Inolvidables</h1>
        <p>
          Decoración temática, música y menú especial para todas las edades.
        </p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Cumpleaños ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Paquete Alegre"
          description="Ideal para celebraciones pequeñas pero llenas de magia. Incluye decoración temática, música infantil y menú básico."
          capacity="50 a 100"
          price="$2,200,000 COP"
          img="https://source.unsplash.com/600x400/?kids,birthday,party"
        />
        <Card
          title="Paquete Familiar"
          description="Una opción intermedia con actividades, animación, menú variado y ambientación para todas las edades."
          capacity="100 a 200"
          price="$4,700,000 COP"
          img="https://source.unsplash.com/600x400/?birthday,family,celebration"
        />
        <Card
          title="Paquete Fantasía Total"
          description="La experiencia más completa: show en vivo, buffet temático, música profesional, juegos y ambientación personalizada."
          capacity="200 a 400+"
          price="$8,900,000 COP"
          img="https://source.unsplash.com/600x400/?luxury,birthday,decoration"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué celebrar con nosotros?</h2>
        <ul>
          <li>Diseños únicos para cada temática infantil o adulta.</li>
          <li>Animadores, DJ y shows interactivos incluidos.</li>
          <li>Opciones de catering para todo tipo de dietas.</li>
          <li>Ambientes seguros, cómodos y totalmente decorados.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gerizim Celebraciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CumpleanosInolvidables;
