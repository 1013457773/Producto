import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas principales
import Login from "./assets/Pages/Login";
import Registro from "./assets/Pages/Registro";
import Home from "./assets/Pages/Home";

// Componentes protegidos
import RutaProtegida from "./assets/Componetes/RutaProtegida";

// Servicios
import Pagos from "./assets/servicios/Pagos";
import Contacto from "./assets/servicios/Contacto";
import Extras from "./assets/servicios/Extras";
import Consultas from "./assets/servicios/Consultas";
import Reservas from "./assets/servicios/Reservas";
import Encuesta from "./assets/servicios/Encuesta.jsx";

// Tiendas extra
import TiendaFlores from "./assets/ExtrasSERVER/TiendaFlores.jsx";
import TiendaTortas from "./assets/ExtrasSERVER/TiendaTortas.jsx";
import TiendaComidas from "./assets/ExtrasSERVER/TiendaComidas.jsx";
import TiendaArepas from "./assets/ExtrasSERVER/TiendaArepas.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas protegidas */}
        <Route
          path="/home"
          element={
            <RutaProtegida>
              <Home />
            </RutaProtegida>
          }
        />
        <Route
          path="/pagos"
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
        <Route
          path="/consultas"
          element={
            <RutaProtegida>
              <Consultas />
            </RutaProtegida>
          }
        />
        <Route
          path="/reservas"
          element={
            <RutaProtegida>
              <Reservas />
            </RutaProtegida>
          }
        />
        <Route
          path="/encuesta"
          element={
            <RutaProtegida>
              <Encuesta />
            </RutaProtegida>
          }
        />

        {/* Rutas de tiendas */}
        <Route
          path="/flores"
          element={
            <RutaProtegida>
              <TiendaFlores />
            </RutaProtegida>
          }
        />
        <Route
          path="/tortas"
          element={
            <RutaProtegida>
              <TiendaTortas />
            </RutaProtegida>
          }
        />
        <Route
          path="/comidas"
          element={
            <RutaProtegida>
              <TiendaComidas />
            </RutaProtegida>
          }
        />
        <Route
          path="/arepas"
          element={
            <RutaProtegida>
              <TiendaArepas />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}
