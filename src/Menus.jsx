import React from "react";
import "./Menus.css";

const Menus = () => {
  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="menu-title">Eventos Gerizim</h1>
        <ul className="menu-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Galería</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menus;
