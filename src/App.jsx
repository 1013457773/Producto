import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login";
import Registro from "./assets/Pages/Registro";
import Home from "./assets/Pages/Home";
import RutaProtegida from "./assets/Componetes/RutaProtegida";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        {/* Ruta protegida: Solo entra si está autenticado */}
        <Route
          path="/home"
          element={
            <RutaProtegida>
              <Home />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}
