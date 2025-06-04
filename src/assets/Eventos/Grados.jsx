import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css"; // Asegúrate de que este archivo contenga la clase .theme-grados

const images = [
  "https://source.unsplash.com/1200x800/?graduation,celebration",
  "https://source.unsplash.com/1200x800/?graduates,ceremony",
  "https://source.unsplash.com/1200x800/?cap,gown",
  "https://source.unsplash.com/1200x800/?students,graduation",
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

const Grados = () => {
  const [theme] = useState("theme-grados");

  return (
    <div className={`fiestas-page ${theme}`}>
      <header className="hero">
        <h1>Grados Gerizim</h1>
        <p>Celebra tus logros con estilo y un excelente servicio de catering</p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Grado ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Celebración Clásica"
          description="Un espacio cómodo con ambientación formal para compartir en familia."
          capacity="50 a 100"
          price="$2,800,000 COP"
          img="https://source.unsplash.com/600x400/?graduation,classic"
        />
        <Card
          title="Graduación Premium"
          description="Ideal para ceremonias más elaboradas con catering completo y zona de fotos."
          capacity="100 a 200"
          price="$5,900,000 COP"
          img="https://source.unsplash.com/600x400/?graduation,premium"
        />
        <Card
          title="Gran Fiesta de Egresados"
          description="Un evento inolvidable con música, luces, show y cena gourmet."
          capacity="200 a 400+"
          price="$10,700,000 COP"
          img="https://source.unsplash.com/600x400/?party,graduation"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Ambientes elegantes y versátiles para tu celebración.</li>
          <li>Asesoría completa en decoración y menú.</li>
          <li>Más de 10 años de experiencia en eventos estudiantiles.</li>
          <li>Fotografía profesional incluida en paquetes premium.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gerizim Eventos de Grado. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Grados;
