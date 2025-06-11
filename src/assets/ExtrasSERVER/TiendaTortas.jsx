import React from "react";
import imgTortas from "../imagenes/Extras (4).jpg";

export default function TiendaTortas() {
  return (
    <div className="pagina-detalle">
      <h1>Tortas</h1>
      <img src={imgTortas} alt="Tortas" className="detalle-img" />
      <p>
        Tortas artesanales hechas a tu gusto. Ideal para cualquier celebración.
      </p>
    </div>
  );
}
