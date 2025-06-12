import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

// Imágenes locales
import cumple1 from "../../assets/img/cumple1.jpg";
import cumple2 from "../../assets/img/cumple2.jpg";
import cumple3 from "../../assets/img/cumple3.jpg";
import cumple4 from "../../assets/img/cumple4.jpg";

const images = [cumple1, cumple2, cumple3, cumple4];

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
          img={cumple2}
        />
        <Card
          title="Paquete Familiar"
          description="Una opción intermedia con actividades, animación, menú variado y ambientación para todas las edades."
          capacity="100 a 200"
          price="$4,700,000 COP"
          img={cumple3}
        />
        <Card
          title="Paquete Fantasía Total"
          description="La experiencia más completa: show en vivo, buffet temático, música profesional, juegos y ambientación personalizada."
          capacity="200 a 400+"
          price="$8,900,000 COP"
          img={cumple4}
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
