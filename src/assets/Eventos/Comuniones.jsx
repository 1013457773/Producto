import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

// Importar imágenes locales
import comunion1 from "../../assets/img/comunion1.jpg";
import comunion2 from "../../assets/img//comunion2.jpg";
import comunion3 from "../../assets/img/comunion3.jpg";
import comunion4 from "../../assets/img/comunion4.jpg";

const images = [comunion1, comunion2, comunion3, comunion4];

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
          img={comunion1}
        />
        <Card
          title="Celebración Tradicional"
          description="Decoración religiosa completa, ceremonia especial y catering personalizado."
          capacity="60 a 150"
          price="$5,900,000 COP"
          img={comunion2}
        />
        <Card
          title="Comunión Premium"
          description="Animación infantil, estaciones de comida y recuerdos personalizados para los invitados."
          capacity="150 a 300+"
          price="$9,700,000 COP"
          img={comunion3}
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
