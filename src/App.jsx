// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login";
import Registro from "./assets/Pages/Registro";
import Home from "./assets/Pages/Home";
import RutaProtegida from "./assets/Componetes/RutaProtegida";
import Pagos from "./assets/servicios/Pagos";
import Contacto from "./assets/servicios/Contacto";
import Extras from "./assets/servicios/Extras";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/home"
          element={
            <RutaProtegida>
              <Home />
            </RutaProtegida>
          }
        />
        <Route
          path="/Pagos"
          element={
            <RutaProtegida>
              <Pagos />
            </RutaProtegida>
          }
        />
        <Route
          path="/contacto"
          element={
            <RutaProtegida>
              <Contacto />
            </RutaProtegida>
          }
        />
        <Route
          path="/servicios"
          element={
            <RutaProtegida>
              <Extras />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}
