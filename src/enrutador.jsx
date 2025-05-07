import { createElement } from "react";
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Registro from "./assets/Pages/Registro";
import RutaProtegida from "./assets/Componetes/RutaProtegida.jsx";

export const enrutador = [
  {
    path: "/home",
    element: createElement(RutaProtegida, { proteger: createElement(Home) }),
  },
  {
    path: "/",
    element: createElement(Login),
  },
  {
    path: "/registro",
    element: createElement(Registro),
  },
];
