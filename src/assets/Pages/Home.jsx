import React from "react";
import Menu from "../Componetes/Menus"; // Importación correcta
import Cuadros from "../Componetes/Cuadros";
import Locaciones from "../Componetes/Locaciones";
import Presentacion from "../Componetes/Presentacion";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Menu /> {/* Aquí se está importando y usando el componente Menu */}
      <main className="home-main">
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
