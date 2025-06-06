import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Registro from "./assets/Pages/Registro";
import RutaProtegida from "./assets/Componetes/RutaProtegida.jsx";

export const enrutador = [
  {
    path: "/home",
    element: <RutaProtegida proteger={<Home />} />,
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/", // redirige a login si es la raíz
    element: <Login />,
  },
];
