import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";
const images = [
  "https://source.unsplash.com/1200x800/?quinceanera,party",
  "https://source.unsplash.com/1200x800/?dance,celebration",
  "https://source.unsplash.com/1200x800/?birthday,gala",
  "https://source.unsplash.com/1200x800/?event,ballroom",
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

const QuinceAnios = () => {
  // Estado para el tema (vintage o azul)
  const [theme, setTheme] = useState("theme-vintage");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "theme-vintage" ? "theme-azul" : "theme-vintage"
    );
  };

  return (
    <div className={`fiestas-page ${theme}`}>
      <header className="hero">
        <h1>Quince Años Gerizim</h1>
        <p>
          Una noche mágica con entrada especial, pista de baile y catering
          premium.
        </p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Evento ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Paquete Clásico"
          description="Celebración elegante con pista de baile, música en vivo y decoración temática."
          capacity="80 a 150"
          price="$4,200,000 COP"
          img="https://source.unsplash.com/600x400/?quinceanera,dance"
        />
        <Card
          title="Paquete Premium"
          description="Incluye DJ profesional, catering gourmet y fotografía para capturar cada momento."
          capacity="150 a 300"
          price="$7,800,000 COP"
          img="https://source.unsplash.com/600x400/?party,gala"
        />
        <Card
          title="Paquete Lujo"
          description="Experiencia exclusiva con salón VIP, show en vivo y servicios personalizados."
          capacity="300 a 500+"
          price="$13,200,000 COP"
          img="https://source.unsplash.com/600x400/?luxury,event"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Experiencia en la organización de quinceañeras inolvidables.</li>
          <li>Atención personalizada para cada detalle de tu evento.</li>
          <li>Ambientes temáticos diseñados a tu gusto.</li>
          <li>
            Equipos y tecnología de última generación para animar tu fiesta.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gerizim Quince Años. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default QuinceAnios;
