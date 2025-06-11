import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

// Importar imágenes locales
import bautizo1 from "../../assets/img/bautizo1.jpg";
import bautizo2 from "../../assets/img/bautizo2.jpg";
import bautizo3 from "../../assets/img/bautizo3.jpg";
import bautizo4 from "../../assets/img/bautizo4.jpg";

const images = [bautizo1, bautizo2, bautizo3, bautizo4];

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
          img={bautizo2}
        />
        <Card
          title="Bautizo Tradicional"
          description="Ambiente elegante con decoración clásica, ceremonia y catering especializado."
          capacity="50 a 120"
          price="$6,500,000 COP"
          img={bautizo3}
        />
        <Card
          title="Bautizo Premium"
          description="Decoración exclusiva, menú gourmet y atención personalizada para grandes grupos."
          capacity="120 a 250+"
          price="$11,000,000 COP"
          img={bautizo4}
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
