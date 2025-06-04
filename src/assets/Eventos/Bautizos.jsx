import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

const images = [
  "https://source.unsplash.com/1200x800/?baptism,church",
  "https://source.unsplash.com/1200x800/?baptism,family",
  "https://source.unsplash.com/1200x800/?baby,baptism",
  "https://source.unsplash.com/1200x800/?baptism,celebration",
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

const Bautizos = () => {
  const [theme, setTheme] = useState("theme-bautizos");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "theme-bautizos" ? "theme-nature" : "theme-bautizos"
    );
  };

  return (
    <div className={`fiestas-page ${theme}`}>
      <header className="hero">
        <h1>Bautizos</h1>
        <p>Ambiente íntimo, decoración clásica y atención personalizada.</p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Bautizo ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Celebración Íntima"
          description="Reunión familiar con decoración clásica y menú personalizado para todos."
          capacity="20 a 50"
          price="$3,000,000 COP"
          img="https://source.unsplash.com/600x400/?baptism,family"
        />
        <Card
          title="Bautizo Tradicional"
          description="Ambiente elegante con decoración clásica, ceremonia y catering especializado."
          capacity="50 a 120"
          price="$6,500,000 COP"
          img="https://source.unsplash.com/600x400/?church,baptism"
        />
        <Card
          title="Bautizo Premium"
          description="Decoración exclusiva, menú gourmet y atención personalizada para grandes grupos."
          capacity="120 a 250+"
          price="$11,000,000 COP"
          img="https://source.unsplash.com/600x400/?party,baptism"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos para tu bautizo?</h2>
        <ul>
          <li>
            Espacios íntimos y acogedores para tus celebraciones más
            importantes.
          </li>
          <li>Decoración clásica adaptada a tu estilo y tradición.</li>
          <li>Atención personalizada y cercana para cada detalle.</li>
          <li>Menú adaptado a todos los invitados y necesidades especiales.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gerizim Bautizos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Bautizos;
