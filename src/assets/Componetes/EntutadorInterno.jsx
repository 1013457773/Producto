import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Menu from "./Menus";
import Extras from "../servicios/Extras.jsx";
import Contacto from "../servicios/Contacto.jsx";
import Pagos from "../servicios/Pagos.jsx";

export default function EnrutadorInterno() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/servicios" element={<Extras />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Pagos" element={<Pagos />} />
      </Routes>
    </Router>
  );
}
