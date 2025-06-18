import React from "react";
import Menu from "../Componetes/Menus"; // Asegúrate de importar el menú
import Cuadros from "../Componetes/Cuadros";
import Locaciones from "../Componetes/Locaciones";
import Presentacion from "../Componetes/Presentacion";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Menu /> {/* Aquí va el menú, visible en todo momento */}
      <main className="home-main">
        <br />
        <br />
        <br />
        <br />
        <Presentacion />
        <Cuadros />
        <Locaciones />
      </main>
    </div>
  );
}
