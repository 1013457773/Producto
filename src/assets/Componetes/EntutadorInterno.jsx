import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Menu from "./Menus";

// Nuevas páginas
import Servicios from "../servicios/Extras"; // Puedes cambiar el nombre del archivo si quieres
import Contacto from "../Pages/Contacto"; // Crea esta página si no existe
import Eventos from "../Pages/Eventos"; // Página general de eventos

export default function EnrutadorInterno() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Nuevas rutas */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </BrowserRouter>
  );
}
