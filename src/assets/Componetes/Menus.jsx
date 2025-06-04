import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir
import "../styles/Menus.css";

const Menu = () => {
  const navigate = useNavigate(); // Usamos navigate para redirigir al login

  const handleLogout = () => {
    localStorage.removeItem("auth"); // Eliminar el item de sesión
    navigate("/"); // Redirigir al login
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="menu-title">Eventos Gerizim</h1>
        <ul className="menu-links">
          <li>
            <a href="../home">Inicio</a>
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
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Menu;
