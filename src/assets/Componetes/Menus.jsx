import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Menus.css";

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="menu-title">Eventos Gerizim</h1>
        <ul className="menu-links">
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios">Extras</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
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
