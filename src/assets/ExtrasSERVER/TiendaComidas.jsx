import React from "react";
import imgComidas from "../imagenes/Extras (3).jpg";

export default function TiendaComidas() {
  return (
    <div className="pagina-detalle">
      <h1>Comidas</h1>
      <img src={imgComidas} alt="Comidas" className="detalle-img" />
      <p>
        Banquetes, platos especiales y opciones vegetarianas para todos los
        gustos.
      </p>
    </div>
  );
}
