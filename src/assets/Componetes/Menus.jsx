import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Menus.css";

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/"); // vuelve al login
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
            <Link to="/pagos">Pagos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/consultas">Consultas</Link>
          </li>
          <li>
            <Link to="/reservas">Reservas</Link>
          </li>
          <li>
            <Link to="/encuesta">Encuestas</Link>
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
