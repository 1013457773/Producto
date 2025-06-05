import React from "react";
import "./ServiciosExtras.css";

const ServiciosExtras = () => {
  return (
    <section className="servicios-extras">
      <h2 className="titulo-principal">Servicios Extras que ofrecemos</h2>
      <p className="descripcion">
        Descubre nuestros servicios adicionales para hacer tus eventos
        inolvidables.
      </p>

      <div className="cuadros-container">
        <div className="cuadro">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
            alt="Flores"
            className="imagen"
          />
          <h3>Flores</h3>
          <p>Arreglos florales frescos y elegantes para tu ocasión especial.</p>
        </div>

        <div className="cuadro">
          <img
            src="https://images.unsplash.com/photo-1505253210343-9bc8f64b2f38?auto=format&fit=crop&w=400&q=80"
            alt="Tortas"
            className="imagen"
          />
          <h3>Tortas</h3>
          <p>Deliciosas tortas artesanales personalizadas a tu gusto.</p>
        </div>

        <div className="cuadro">
          <img
            src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=400&q=80"
            alt="Comidas"
            className="imagen"
          />
          <h3>Comidas</h3>
          <p>Variedad de platos y banquetes para tu evento o reunión.</p>
        </div>

        <div className="cuadro">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80"
            alt="Arepas Rellenas"
            className="imagen"
          />
          <h3>Arepas Rellenas</h3>
          <p>Arepas con rellenos variados, listas para disfrutar.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiciosExtras;
