import React from "react";
import "../Eventos/cssEventos/Fiestas.css";

// Imágenes locales
import grado1 from "../../assets/img/grado1.jpg";
import grado2 from "../../assets/img/grado2.jpg";
import grado3 from "../../assets/img/grado3.jpg";
import grado4 from "../../assets/img/grado4.jpg";

const images = [grado1, grado2, grado3, grado4];

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
  return (
    <div className="fiestas-page theme-grados">
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
          img={grado2}
        />
        <Card
          title="Graduación Premium"
          description="Ideal para ceremonias más elaboradas con catering completo y zona de fotos."
          capacity="100 a 200"
          price="$5,900,000 COP"
          img={grado3}
        />
        <Card
          title="Gran Fiesta de Egresados"
          description="Un evento inolvidable con música, luces, show y cena gourmet."
          capacity="200 a 400+"
          price="$10,700,000 COP"
          img={grado4}
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
