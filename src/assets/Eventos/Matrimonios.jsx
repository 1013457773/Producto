import React from "react";
import "../Eventos/cssEventos/Fiestas.css";

// Importar imágenes locales
import matrimonio1 from "../../assets/img/matrimonio1.jpg";
import matrimonio2 from "../../assets/img/matrimonio2.jpg";
import matrimonio3 from "../../assets/img/matrimonio3.jpg";
import matrimonio4 from "../../assets/img/matrimonio4.jpg";

const images = [matrimonio1, matrimonio2, matrimonio3, matrimonio4];

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

const Matrimonios = () => {
  return (
    <div className="fiestas-page theme-matrimonios">
      <header className="hero">
        <h1>Matrimonios Gerizim</h1>
        <p>
          Planeamos la boda de tus sueños desde la ceremonia hasta la fiesta.
        </p>
      </header>

      <section className="image-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Matrimonio ${idx + 1}`} />
        ))}
      </section>

      <section className="cards-section">
        <Card
          title="Boda Íntima"
          description="Una celebración acogedora para compartir con los más cercanos."
          capacity="50 a 100"
          price="$4,200,000 COP"
          img={matrimonio1}
        />
        <Card
          title="Boda Clásica"
          description="Ceremonia tradicional con todos los detalles cuidados y recepción elegante."
          capacity="100 a 200"
          price="$8,900,000 COP"
          img={matrimonio2}
        />
        <Card
          title="Boda de Ensueño"
          description="La experiencia completa con ambientación de lujo, música en vivo y banquete inolvidable."
          capacity="200 a 400+"
          price="$14,500,000 COP"
          img={matrimonio3}
        />
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Organización integral desde la ceremonia hasta la fiesta.</li>
          <li>Estilo personalizado según tus sueños y cultura.</li>
          <li>Decoración y catering premium de alta calidad.</li>
          <li>Coordinadores profesionales en todo momento.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gerizim Matrimonios. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Matrimonios;
