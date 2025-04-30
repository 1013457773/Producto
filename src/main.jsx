import React from "react";
import ReactDOM from "react-dom/client";
import Menus from "./Menus";
import Login from "./Login";
import Cuadros from "./cuadros";
import Locaciones from "./Locaciones";
import Presentacion from "./Presentacion";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Menus />
      <br />
      <br />
      <br />
      <br />
      <Presentacion />
      <br />
      <br />
      <div className="main-container">
        <h1 className="titulo">Nuestros Servicios</h1>
        <Cuadros />
        <Locaciones />
      </div>
      <div className="content">
        <Login />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
