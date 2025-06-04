import React, { useState } from "react";
import "../Eventos/cssEventos/Fiestas.css";

const images = [
  "https://source.unsplash.com/1200x800/?custom,event",
  "https://source.unsplash.com/1200x800/?party,design",
  "https://source.unsplash.com/1200x800/?celebration,theme",
  "https://source.unsplash.com/1200x800/?creative,event",
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

const EventosPersonalizados = () => {
  const [theme, setTheme] = useState("theme-personalizados");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "theme-personalizados" ? "theme-nature" : "theme-personalizados"
    );
  };

  return (
    <div className={`fiestas-page ${theme}`}>
      <header className="hero">
        <h1>Eventos Personalizados</h1>
        <p>Cuéntanos tu idea y la hacemos realidad. ¡Sin límites!</p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Evento Personalizado ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Diseño a Tu Medida"
          description="Creamos tu evento desde cero según tus gustos, colores, temática y estilo."
          capacity="30 a 100"
          price="$4,500,000 COP"
          img="https://source.unsplash.com/600x400/?design,celebration"
        />
        <Card
          title="Evento Soñado"
          description="Convierte tu idea más loca en una experiencia real con decoración única."
          capacity="100 a 200"
          price="$7,800,000 COP"
          img="https://source.unsplash.com/600x400/?custom,party"
        />
        <Card
          title="Experiencia VIP"
          description="Escenografía exclusiva, menú gourmet y producción audiovisual profesional."
          capacity="200 a 500+"
          price="$13,900,000 COP"
          img="https://source.unsplash.com/600x400/?event,light,show"
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué elegir un evento personalizado?</h2>
        <ul>
          <li>Tu imaginación es el límite: hacemos realidad cualquier idea.</li>
          <li>Decoración, iluminación y concepto únicos para ti.</li>
          <li>Atención personalizada en cada etapa del evento.</li>
          <li>
            Ideal para lanzamientos, bodas temáticas, celebraciones creativas.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          © 2025 Gerizim Eventos Personalizados. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default EventosPersonalizados;
