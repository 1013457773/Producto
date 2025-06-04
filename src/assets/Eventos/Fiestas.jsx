import React from "react";
import "../Eventos/cssEventos/Fiestas.css";

const images = [
  "https://source.unsplash.com/1200x800/?corporate,event",
  "https://source.unsplash.com/1200x800/?business,party",
  "https://source.unsplash.com/1200x800/?meeting,luxury",
  "https://source.unsplash.com/1200x800/?event,people",
];

const Card = ({ title, description, img }) => (
  <div className="card">
    <img src={img} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const FiestasEmpresariales = () => {
  return (
    <div className="fiestas-page">
      <header className="hero">
        <h1>Fiestas Empresariales Gerizim</h1>
        <p>
          Transformamos tus eventos corporativos en experiencias inolvidables
        </p>
        <button className="btn-primary">Cotiza tu evento</button>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Evento ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Planificación Profesional"
          description="Nos encargamos de todo el proceso para que tú solo disfrutes."
          img="https://source.unsplash.com/600x400/?planning,event"
        />
        <Card
          title="Ambientes Exclusivos"
          description="Espacios elegantes para causar una gran impresión."
          img="https://source.unsplash.com/600x400/?luxury,venue"
        />
        <Card
          title="Catering Premium"
          description="Menús personalizados y de alta calidad para cada ocasión."
          img="https://source.unsplash.com/600x400/?catering,food"
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
