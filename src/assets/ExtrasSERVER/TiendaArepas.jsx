import React from "react";
import imgArepas from "../imagenes/Extras (2).jpg";

export default function TiendaArepas() {
  return (
    <div className="pagina-detalle">
      <h1>Arepas Rellenas</h1>
      <img src={imgArepas} alt="Arepas" className="detalle-img" />
      <p>Recetas tradicionales con ingredientes locales. Un sabor auténtico.</p>
    </div>
  );
}
